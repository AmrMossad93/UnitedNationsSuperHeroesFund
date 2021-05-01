import { Component } from '@angular/core';
import {
  Event,
  Router,
  NavigationStart,
  NavigationEnd,
} from '@angular/router';
import {PlatformLocation} from '@angular/common';
import {LoaderService} from './Services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UnitedNationsSuperHeroesFund';
  currentUrl: string = '';
  isShowScrollButton: boolean = false;

  constructor(public router: Router, location: PlatformLocation,
              private loaderService: LoaderService) {
    this.router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.loaderService.show();
        if (!localStorage.getItem('language')) {
          localStorage.setItem('language', 'en');
        }
        this.currentUrl = routerEvent.url.substring(
          routerEvent.url.lastIndexOf('/') + 1
        );
      }
      if (routerEvent instanceof NavigationEnd) {
        this.loaderService.hide();
      }
      window.scrollTo(0, 0);
    });
  }
}
