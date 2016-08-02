import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AuthService {

  private registerUrl = 'http://localhost:3000/users/register';
  private loginUrl = 'http://localhost:3000/users/login';
  private resetPasswordUrl = 'http://localhost:3000/users/resetpassword';

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
  private persistToken(token: string) {
    localStorage.setItem('jwtToken', token);
  }
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Promise.reject(errMsg);
  }

  constructor (private http: Http) {}

  isAuthenticated() {
    return localStorage.getItem('jwtToken') && localStorage.getItem('jwtToken').length > 0;
  }

  getToken() {
    return localStorage.getItem('jwtToken');
  }

  logout() {
    localStorage.removeItem('jwtToken');
  }

  /**
   * Look for already registered single user
   */
  login(provider, email, password) {
    return new Promise((resolve, reject) => {
      /**
       * This is where you should talk with your API
       * See the Angular 2 Http Client Documentation for more information
       * Documentation: https://angular.io/docs/ts/latest/guide/server-communication.html
       */

      switch (provider) {
        case 'linkedin' :
          // `email` now contains token
          this.persistToken(email);
          resolve(true);
        break;
        default :
          console.log(email);
          console.log(password);
          let body = JSON.stringify({ email, password });
          let headers = new Headers({ 'Content-Type': 'application/json' });
          let options = new RequestOptions({ headers: headers });
          this.http.post(this.loginUrl, body, options)
            .toPromise()
            .then(res => {
              const user = this.extractData(res);
              this.persistToken(user.token);
              console.log(user);
              resolve(true);
            })
            .catch(error => {
              this.handleError(error);
              resolve(false);
            });
        break;
      }

      // resolve(false); // Must be false in case of failure
    });
  }

  /**
   * Verify if user already exists and register
   */
  register(provider, email, password) {
    return new Promise(resolve => {
      /**
       * This is where you should talk with your API
       * See the Angular 2 Http Client Documentation for more information
       * Documentation: https://angular.io/docs/ts/latest/guide/server-communication.html
       */

      switch (provider) {
        case 'linkedin' :
          console.log(provider);
        break;
        default :
          console.log(email);
          console.log(password);
          let body = JSON.stringify({ email, password });
          let headers = new Headers({ 'Content-Type': 'application/json' });
          let options = new RequestOptions({ headers: headers });
          this.http.post(this.registerUrl, body, options)
            .toPromise()
            .then(res => {
              const user = this.extractData(res);
              this.persistToken(user.token);
              console.log(user);
              resolve(true);
            })
            .catch(error => {
              this.handleError(error);
              resolve(false);
            });
        break;
      }

      // resolve(true); // Must be false in case of failure
    });
  }

  /**
   * Send email to user
   */
  forgotPassword(email) {
    return new Promise(resolve => {
      /**
       * This is where you should talk with your API
       * See the Angular 2 Http Client Documentation for more information
       * Documentation: https://angular.io/docs/ts/latest/guide/server-communication.html
       */
       let body = JSON.stringify({ email });
       let headers = new Headers({ 'Content-Type': 'application/json' });
       let options = new RequestOptions({ headers: headers });
       this.http.post(this.resetPasswordUrl, body, options)
         .toPromise()
         .then(res => {
           resolve(true);
         })
         .catch(error => {
           this.handleError(error);
           resolve(false);
         });
    });
  }
}
