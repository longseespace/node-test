import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ProfileService {

  private profileUrl = 'https://polar-sierra-94874.herokuapp.com/users/profile';

  constructor (private http: Http) {}

  get(token) {
    return new Promise(resolve => {
      /**
       * This is where you should talk with your API
       * See the Angular 2 Http Client Documentation for more information
       * Documentation: https://angular.io/docs/ts/latest/guide/server-communication.html
       */
       let headers = new Headers({
         'Content-Type': 'application/json',
         'Authorization': 'JWT ' + token
       });
       let options = new RequestOptions({ headers: headers });
       this.http.get(this.profileUrl, options)
         .toPromise()
         .then(res => {
           console.log(res.json());
           resolve(res.json());
         })
         .catch(error => {
           console.error(error);
           resolve(false);
         });
      // resolve(true); // Must be false in case of failure
    })
  }

  /**
   * Create an user Profile
   */
  create(token, profile) {
    return new Promise(resolve => {
      /**
       * This is where you should talk with your API
       * See the Angular 2 Http Client Documentation for more information
       * Documentation: https://angular.io/docs/ts/latest/guide/server-communication.html
       */
       let body = JSON.stringify(profile);
       let headers = new Headers({
         'Content-Type': 'application/json',
         'Authorization': 'JWT ' + token
       });
       let options = new RequestOptions({ headers: headers });
       this.http.post(this.profileUrl, body, options)
         .toPromise()
         .then(res => {
           console.log(res.json());
           resolve(true);
         })
         .catch(error => {
           console.error(error);
           resolve(false);
         });
      // resolve(true); // Must be false in case of failure
    })
  }

  /**
   * Edit an user Profile
   */
  edit(token, profile) {
    return this.create(token, profile);
  }
}
