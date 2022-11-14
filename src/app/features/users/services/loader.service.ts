import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loadingSub$ = new BehaviorSubject(false);
  public loading$ = this.loadingSub$.asObservable();

  setHttpProgressStatus(inprogess: boolean) {
    this.loadingSub$.next(inprogess);
  }

  constructor() {}
}
