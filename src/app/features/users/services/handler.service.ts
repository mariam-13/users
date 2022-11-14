import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HandlerService {
  private isErrorSubject$ = new BehaviorSubject(false);
  public isError$ = this.isErrorSubject$.asObservable();

  isError(err: object | boolean) {
    this.isErrorSubject$.next(err as boolean);
  }

  constructor() {}
}
