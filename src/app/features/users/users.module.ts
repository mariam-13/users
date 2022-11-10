import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { FormComponent } from './components/users-form/users-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [UsersComponent, UsersListComponent, FormComponent],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  exports: [UsersComponent, UsersListComponent, FormComponent],
})
export class UsersModule {}
