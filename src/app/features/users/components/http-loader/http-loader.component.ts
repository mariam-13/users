import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-http-loader',
  templateUrl: './http-loader.component.html',
  styleUrls: ['./http-loader.component.css'],
})
export class HttpLoaderComponent implements OnInit {
  constructor(private loader: LoaderService) {}

  isLoading$: Observable<boolean>;

  ngOnInit(): void {
    this.isLoading$ = this.loader.loading$;
  }
}
