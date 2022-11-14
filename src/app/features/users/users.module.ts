import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { FormComponent } from './components/users-form/users-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandlerComponent } from './components/error-handler/error-handler.component';
import { RequestLoaderService } from './services/interceptors/request-loader.service';
import { HttpLoaderComponent } from './components/http-loader/http-loader.component';

@NgModule({
  declarations: [
    UsersComponent,
    UsersListComponent,
    FormComponent,
    ErrorHandlerComponent,
    HttpLoaderComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  exports: [
    UsersComponent,
    UsersListComponent,
    FormComponent,
    ErrorHandlerComponent,
  ],
})
export class UsersModule {}
