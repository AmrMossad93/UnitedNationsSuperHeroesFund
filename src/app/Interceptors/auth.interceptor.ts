import {Injectable} from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({headers: request.headers.set('Access-Control-Allow-Origin', '*')});
    request = request.clone({headers: request.headers.set('Accept', 'application/json')});
    return next.handle(request).pipe(
      tap(
        () => {
        },
        err => {
          console.log(err);
        }
      )
    );
  }

}
