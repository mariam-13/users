import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from '../../modules/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  @Input() users: IUser[] = [];
  @Input() selectedId: number | null;

  @Output() select = new EventEmitter<number>();
  @Output() edit = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

}
