import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { FormComponent } from './components/users-form/users-form.component';
import { UsersComponent } from './components/users.component';

const router: Route[] = [
  {
    path: '',
    component: UsersComponent,
  },
  {
    path: 'create',
    component: FormComponent,
  },
  {
    path: ':id',
    component: FormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(router)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
