import {Injectable, Injector} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';
import {LoaderService} from '../Services/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const loaderService = this.injector.get(LoaderService);
    loaderService.show();
    return next.handle(request).pipe(
      finalize(() => loaderService.hide())
    );
  }
}
