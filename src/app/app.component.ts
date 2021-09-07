import { Component } from '@angular/core';
import {NumberService} from "./number.service";
import {UrlIdService} from "./url-id.service";

@Component({
  selector: 'app-root',
  template: `
    <nav *ngIf="number$ | async as num" appNavigatore>
      <h1>Section</h1>
      <button (click)="newNumber()">{{num}}</button>
    </nav>
    <router-outlet></router-outlet>`,
  styles: ['']
})
export class AppComponent {
  number$ = this.numberService.number$;
  constructor(
    public numberService: NumberService,
    public urlService: UrlIdService){

  }

  newNumber(): void {
    const num = (Math.random() * 1000).toString();
    this.urlService.navigate(num);
  }
}
