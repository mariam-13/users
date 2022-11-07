import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {IUser} from "../../modules/user.interface";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnDestroy {

  @Input() users: IUser[] = [];

  id = 4;
  newUser = new Map();
  uniqueId  = {};
  subs: Subscription[] = [];
  

  form = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl("", [Validators.required, Validators.minLength(3)]),
      age: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(99)]),
      email: new FormControl("", []),
      mobile: new FormControl("", [Validators.required])
  }) 

  

  onSubmit() {

    this.uniqueId  = {
      id : this.id
    }
    this.id++;

    this.newUser.set(this.id, {...this.form.value, ...this.uniqueId})
    
    
    this.users.push(this.newUser.get(this.id))
    
  }

  get isvalid() {
    return this.form.valid
  }
  get name() {
    return this.form.get('name') as FormControl
  }

  get lastname() {
    return this.form.get('lastName') as FormControl
  }
  get age() {
    return this.form.get('age') as FormControl
  }
  get email() {
    return this.form.get('email') as FormControl
  }
  get mobile() {
    return this.form.get('mobile') as FormControl
  }
  
  
  ngOnInit() {
    this.valueChanges();
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
    this.subs.forEach(sub => sub.unsubscribe());
  }

}
