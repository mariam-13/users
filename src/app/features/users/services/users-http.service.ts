import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { INewUser, IUser } from '../modules/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersHttpService {
  backendUrl = 'http://localhost:3000/users';

  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get<IUser[]>(this.backendUrl);
  }

  deleteUser(id: number) {
    return this.httpClient.delete(this.backendUrl + '/' + id);
  }

  addNewUser(user: INewUser) {
    return this.httpClient.post<IUser>(this.backendUrl, user);
  }

  updateUser(user: IUser) {
    return this.httpClient.put<IUser>(this.backendUrl + '/' + user.id, user);
  }
}
