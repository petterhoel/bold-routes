import {Component, OnInit} from '@angular/core';
import {NumberService} from "./number.service";
import {UrlIdService} from "./url-id.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-root',
  template: `
    <nav *ngIf="number$ | async as num">
      <h1>Section</h1>
      <button (click)="newNumber()">{{num}}</button>
    </nav>
    <router-outlet></router-outlet>`,
  styles: ['']
})
export class AppComponent implements OnInit {
  number$ = this.numberService.number$;
  constructor(
    public numberService: NumberService,
    public urlService: UrlIdService ,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(p => console.debug({pid: p.get('jaja')}))
  }

  newNumber(): void {
    const num = (Math.random() * 1000).toString();
    this.urlService.navigate(num);
  }
}
