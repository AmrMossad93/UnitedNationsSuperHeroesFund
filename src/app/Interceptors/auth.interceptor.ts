import {Injectable} from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {SnackBarService} from '../Services/snack-bar.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private snackBarService: SnackBarService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({headers: request.headers.set('Access-Control-Allow-Origin', '*')});
    request = request.clone({headers: request.headers.set('Accept', 'application/json')});
    return next.handle(request).pipe(
      tap(
        () => {
        },
        err => {
          this.snackBarService.errorAlert('Error Happened', 'Error');
        }
      )
    );
  }

}
