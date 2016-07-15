import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  /**
   * Look for already registered single user
   */
  login(provider, email, password) {
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
        break;
      }

      resolve(true); // Must be false in case of failure
    })
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
        break;
      }

      resolve(true); // Must be false in case of failure
    })
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

      resolve(true); // Must be false in case of failure
    })
  }
}
