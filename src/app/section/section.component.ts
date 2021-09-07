import { Component, OnInit } from '@angular/core';
import {NumberService} from "../number.service";

@Component({
  selector: 'app-section',
  template: `<nav *ngIf="number$ | async as num"><ul>
    <li routerLink="one/{{num}}" routerLinkActive="active">One - {{num.substring(0,3)}}</li>
    <li routerLink="two/{{num}}" routerLinkActive="active">Two - {{num.substring(0,3)}}</li>
    <li routerLink="three/{{num}}" routerLinkActive="active">Three - {{num.substring(0,3)}}</li>
  </ul>
  </nav><router-outlet></router-outlet>`,
  styles: [`
  :host  {
    display: flex;
  }
  `]
})
export class SectionComponent {
  number$ = this.numberService.number$
  constructor(
    private numberService: NumberService) { }
}
