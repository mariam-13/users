import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RequestLoaderService } from './features/users/services/interceptors/request-loader.service';
import { UsersModule } from './features/users/users.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UsersModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RequestLoaderService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
