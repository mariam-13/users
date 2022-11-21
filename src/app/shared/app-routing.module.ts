import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DemoComponent } from '../features/demo/demo.component';
import { HomeComponent } from '../features/home/home.component';
import { FormComponent } from '../features/users/components/users-form/users-form.component';
import { UsersComponent } from '../features/users/components/users.component';

const routes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'users',
    loadChildren: () =>
      import('../features/users/users.module').then(
        (module) => module.UsersModule
      ),
  },
  {
    path: 'demo',
    loadChildren: () =>
      import('../features/demo/demo.module').then(
        (module) => module.DemoModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
