import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderModule } from '../features/header/header.module';
import { RequestLoaderService } from '../features/users/services/interceptors/request-loader.service';
import { UsersModule } from '../features/users/users.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HeaderModule],

  bootstrap: [AppComponent],
})
export class AppModule {}
