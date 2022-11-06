import { Component, OnInit } from '@angular/core';
import { IUser } from '../../modules/user.interface';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  selectedUserId: number | null = null;

  users: IUser[] = [
    {
      id: 1,
      age: 19,
      email: 'user.1@gmail.com',
      mobile: '599402159',
      name: 'John',
      lastName: 'Doe'
    },
    {
      id: 2,
      age: 49,
      email: 'user.2@gmail.com',
      mobile: '589447651',
      name: 'Jeff',
      lastName: 'Scott'
    },
    {
      id: 3,
      age: 80,
      email: 'user.3@gmail.com',
      mobile: '5774711279',
      name: 'Erick',
      lastName: 'mayhew'
    },
  ]

  onselect(id: number) {
    this.selectedUserId = id
  }

  onDelete() {
    const index = this.users.findIndex((u) => u.id === this.selectedUserId);
    this.users.splice(index, 1);
    this.selectedUserId = null;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
