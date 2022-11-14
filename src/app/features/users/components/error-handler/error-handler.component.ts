import { Component, OnInit } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HandlerService } from '../../services/handler.service';

@Component({
  selector: 'app-error-handler',
  templateUrl: './error-handler.component.html',
  styleUrls: ['./error-handler.component.css'],
})
export class ErrorHandlerComponent implements OnInit {
  hide$ = new Subject();
  errorHappend$ = this.errorhandler.isError$.pipe(
    tap(() => {
      setTimeout(() => this.hide$.next(false), 2000);
    })
  );

  isVisible$ = merge(this.hide$, this.errorHappend$);

  constructor(private errorhandler: HandlerService) {}

  ngOnInit(): void {}
}
