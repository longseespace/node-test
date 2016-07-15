import { Injectable } from '@angular/core';

@Injectable()
export class ProfileService {
  /**
   * Create an user Profile
   */
  create(user, profile) {
    return new Promise(resolve => {
      /**
       * This is where you should talk with your API
       * See the Angular 2 Http Client Documentation for more information
       * Documentation: https://angular.io/docs/ts/latest/guide/server-communication.html
       */

      resolve(true); // Must be false in case of failure
    })
  }

  /**
   * Edit an user Profile
   */
  edit(user) {
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
