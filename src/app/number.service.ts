import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NumberService {
  _number$ = new BehaviorSubject<string>("42")
  number$ = this._number$.asObservable();

  updateNumber(num: string): void {
    this._number$.next(num);
  }
}
