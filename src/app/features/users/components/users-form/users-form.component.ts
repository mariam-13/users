import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { INewUser, IUser } from '../../modules/user.interface';
import { of, Subscription } from 'rxjs';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UsersHttpService } from '../../services/users-http.service';
import { catchError, filter, switchMap, tap } from 'rxjs/operators';
import { HandlerService } from '../../services/handler.service';

@Component({
  selector: 'app-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css'],
})
export class FormComponent implements OnInit, OnDestroy {
  id: number | undefined;
  _chosenpostToEdit: INewUser | null;
  chosenpostToEdit$ = this.route.params.pipe(
    filter((data) => {
      return data.id;
    }),
    switchMap((data) => {
      this.id = data.id;
      return this.usersHttp.getOneUser(data.id);
    }),
    tap((data) => {
      (this._chosenpostToEdit = data as INewUser), this.form.patchValue(data);
    })
  );
  subs: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private errorHandler: HandlerService,
    private usersHttp: UsersHttpService
  ) {}

  ngOnInit() {
    this.chosenpostToEdit$.subscribe();
    this.valueChanges();
  }

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    age: new FormControl(null, [
      Validators.required,
      Validators.min(1),
      Validators.max(99),
    ]),
    email: new FormControl('', []),
    mobile: new FormControl('', [Validators.required]),
  });

  submit() {
    const data = this.form.value;
    if (this.id) {
      console.log('update');

      this.updateUser({ ...(data as IUser), id: this.id as number });
    } else {
      console.log(data.id);

      this.addNewUser(data);
    }
  }

  addNewUser(user: INewUser) {
    this.usersHttp
      .addNewUser(user)
      .pipe(
        tap((data) => {
          this.router.navigate(['../', { relativeTo: this.route }]);
        }),
        catchError((err) => {
          this.errorHandler.isError(err);
          return of(null);
        })
      )
      .subscribe();
  }

  updateUser(user: IUser) {
    this.usersHttp
      .updateUser(user)
      .pipe(
        tap((data) => {
          this.router.navigate(['../', { relativeTo: this.route }]);
        }),
        catchError((err) => {
          this.errorHandler.isError(err);
          return of(null);
        })
      )
      .subscribe();
  }

  get isvalid() {
    return this.form.valid;
  }
  get name() {
    return this.form.get('name') as FormControl;
  }

  get lastname() {
    return this.form.get('lastName') as FormControl;
  }
  get age() {
    return this.form.get('age') as FormControl;
  }
  get email() {
    return this.form.get('email') as FormControl;
  }
  get mobile() {
    return this.form.get('mobile') as FormControl;
  }

  valueChanges() {
    const sub = this.age.valueChanges.subscribe((age) => {
      if (age < 18) {
        this.email.setValidators([Validators.required]);
      } else {
        this.email.clearValidators();
      }
      this.email.updateValueAndValidity();
    });

    this.subs.push(sub);
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
