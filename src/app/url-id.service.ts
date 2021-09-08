import { Injectable } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {NumberService} from "./number.service";
import {filter, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UrlIdService {
  private prefix = "/section/";
  constructor(private route: ActivatedRoute,
              private numberService: NumberService,
              private router: Router) {
    this.route.paramMap.subscribe(p => console.debug({pid: p.get('jaja')}))

    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      filter(({url}: NavigationEnd) => url.startsWith(this.prefix)),
      tap(({url}) => this.navigationHandler(url))
    ).subscribe();
  }

  navigate(id: string):void {
    const parsed = this.router.parseUrl(this.router.url);
    const segmentPaths = parsed.root.children.primary.segments.map(segment => segment.path);
    if (!segmentPaths?.length){
      return;
    }
    console.debug({id})
    const paths = segmentPaths.map((path, index) => index === 2 ? id : path)
    this.router.navigate(paths);
  }

  private navigationHandler(path: string = '') {
    const nextSlasgAt = path.lastIndexOf('/') + 1;
    const id  = path.substring(nextSlasgAt, path.length)

    console.debug({id})
    this.numberService.updateNumber(id || '')
  }
}
