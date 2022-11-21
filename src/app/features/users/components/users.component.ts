import { Component, OnDestroy, OnInit } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { INewUser, IUser } from '../modules/user.interface';
import { UsersHttpService } from '../services/users-http.service';
import { catchError, retry, tap } from 'rxjs/operators';
import { HandlerService } from '../services/handler.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit, OnDestroy {
  selectedUserId: number | null = null;
  chosenPostToEdit: IUser | null = null;
  addNewUserMode = false;

  users: IUser[] = [];

  sub: Subscription;

  getAllUsers() {
    this.usersHttp
      .getUsers()
      .pipe(
        tap((data) => {
          this.users = data;
        }),
        catchError((err) => {
          this.errorHandler.isError(err);
          return of(null);
        })
      )
      .subscribe();
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
          this.errorHandler.isError(err);
          return of(null);
        })
      )
      .subscribe();

    this.selectedUserId = null;
  }

  onAddNewUser() {
    this.addNewUserMode = true;
  }

  constructor(
    private usersHttp: UsersHttpService,
    private errorHandler: HandlerService,
    private router: Router
  ) {}
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        console.log('starrt');
      }
    });
    this.getAllUsers();
  }
}
