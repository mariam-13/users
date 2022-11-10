import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { INewUser, IUser } from '../modules/user.interface';
import { UsersHttpService } from '../services/users-http.service';
import { catchError, retry, tap } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  selectedUserId: number | null = null;
  chosenPostToEdit: IUser | null = null;
  addNewUserMode = false;

  users: IUser[] = [];

  getAllUsers() {
    this.usersHttp.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  onselect(id: number) {
    this.selectedUserId = id;
  }
  onEdit(id: number) {
    this.chosenPostToEdit = this.users.find(
      (users) => users.id === id
    ) as IUser;
  }

  onDelete() {
    const index = this.users.findIndex((u) => u.id === this.selectedUserId);
    this.usersHttp
      .deleteUser(this.selectedUserId as number)
      .pipe(
        tap((data) => {
          this.users.splice(index, 1);
        }),
        retry(2),
        catchError((err) => {
          alert('something went wrong');
          return of(null);
        })
      )
      .subscribe();

    this.selectedUserId = null;
  }

  addNewUser(user: INewUser) {
    this.usersHttp.addNewUser(user).subscribe((data) => {
      this.users.push(data);
      this.addNewUserMode = false;
    });
  }

  updateUser(user: IUser) {
    this.usersHttp.updateUser(user).subscribe((data) => {
      this.getAllUsers();
      this.chosenPostToEdit = null;
    });
  }

  onAddNewUser() {
    this.addNewUserMode = true;
  }

  onSubmit(user: INewUser | IUser) {
    if (!(user as IUser).id) {
      const newUser = {
        name: user.name,
        lastName: user.lastName,
        age: user.age,
        email: user.email,
        mobile: user.mobile,
      };
      this.addNewUser(newUser);
    } else {
      const indexToReplace = this.users.findIndex(
        (p) => p.id === (user as IUser).id
      ) as number;
      this.updateUser(user as IUser);
    }
  }
  constructor(private usersHttp: UsersHttpService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }
}
