import {
    HttpEvent,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse,
    HttpInterceptor,
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Router } from '@angular/router';
  import { Notify, Loading } from 'notiflix';
  import { Observable, throwError } from 'rxjs';
  import { catchError, retry } from 'rxjs/operators';
  
  
  @Injectable({
      providedIn: 'root',
    })
  
  export class ErrorIntercept implements HttpInterceptor {
    public errorStatus = false
    constructor(private router: Router) {}
    intercept(
      request: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      return next.handle(request).pipe(
        retry(1),
        catchError((error: HttpErrorResponse) => {
          let errorMessage = '';
          if (error.error instanceof ProgressEvent) {
  
            // client-side error
            // errorMessage = `Error: ${error.error.message}`;
  
            // Test what happens when we disable cors
            
            // Test what happens when we change value of error. How will it look like in my master search component
            this.errorStatus = true
            Loading.remove()
            this.router.navigate(['/error-something-happened']);
  
            // Notify.failure('Please check your internet connection'+ errorMessage);
          } else {
            console.log(error, "---44---The Error I'm getting")
            // errorMessage = `Error Status: ${error.status}\nMessage: ${error.message}`;
            // console.log("Ddddd",errorMessage);
            // this.router.navigate(['/error-something-happened']);
            // console.log(error, 'Error Message 45')
            // let errorObject = JSON.parse(error.error)
            if(error.error){
              Notify.failure(error.error)
              Loading.remove()
            }
            // Notify.failure("A problem occured. Please try again later" + errorMessage);
            // server-side error
          }
          return throwError(errorMessage);
        })
      );
    }
  }
  