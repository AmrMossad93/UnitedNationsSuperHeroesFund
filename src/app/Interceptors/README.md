# Interceptors

It Watches The Request, And The Response Of The API End-Point While Calling It.

---

# `Auth Interceptor`

It Is Responsible For Putting The Authorization In The Request We Call To The End-Point API. And Put The Token In It
From The Cookie.

    const token: string = this.cookieService.get('token');
    if (token) {
      request = request.clone({headers: request.headers.set('Authorization', 'Bearer ' + token)});
    }

And It Implements The Content Type To `application/json`

    request = request.clone({headers: request.headers.set('Accept', 'application/json')});

And It Checks If There Is And Error From The Request Shows A Snack Bar Tells That There Is And
Error. `Ex: UnAuthorized , Internal Server Error etc...`

    return next.handle(request).pipe(
      tap(
        () => {
        },
        err => {
          console.log(err);
          if (err.error.error === 'Unauthorized') {
            this.snackBar.open('Not Authorized', 'Error', {
              duration: 2000,
              horizontalPosition: 'end',
              verticalPosition: 'top',
            });
          } else {
            this.snackBar.open('Error Occurred', 'Error', {
              duration: 2000,
              horizontalPosition: 'end',
              verticalPosition: 'top',
            });
          }
        }
      )
    );

---

# `Loader Interceptor`

It's Responsible To Initialize The Loader While Calling The API And Distroy It While Its Finished Calling The API. We
Used [NGX-Spinner](https://www.npmjs.com/package/ngx-spinner) Version `10.0.1`. We Generated A Service To Easy Use The
Spinner Service `Show` or `Hide` It And We Inject The LoaderService In The Interceptor.

    const loaderService = this.injector.get(LoaderService);
    loaderService.show();
    return next.handle(request).pipe(
      finalize(() => loaderService.hide())
    );

---

# Note

We Generated And Index Class To Collect All The Interceptors We Developed And Export It The Made The Provider In
The `AppModule`
