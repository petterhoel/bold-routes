import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  template: `<p>1</p>`,
})
export class PartOneComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(p => console.debug({pid: p.get('jaja')}))
  }
}
