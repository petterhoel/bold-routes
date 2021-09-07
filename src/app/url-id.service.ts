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

    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      filter(({url}: NavigationEnd) => url.startsWith(this.prefix)),
      tap((url) => this.navigationHandler(url.url))
    ).subscribe();

  }

  navigate(id: string):void {
    const parsed = this.router.parseUrl(this.router.url);
    const segmentPaths = parsed.root.children.primary.segments.map(segment => segment.path);
    if (!segmentPaths?.length){
      return;
    }
    const paths = segmentPaths.map((path, index) => index === 1 ? id : path)
    this.router.navigate(paths);
  }

  private navigationHandler(path: string = '') {
    const withputPrefix  = path.substring(this.prefix.length)
    const nextSlasgAt = withputPrefix.indexOf('/');
    const id = withputPrefix.substring(0, nextSlasgAt)
    this.numberService.updateNumber(id || '')
  }
}
