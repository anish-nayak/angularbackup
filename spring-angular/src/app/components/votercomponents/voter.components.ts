import {Component} from '@angular/core';
import { LogoutService, LogOutResponse } from '../service/logout.service';
import { Router } from '@angular/router';

@Component({
    selector:'voter',
    templateUrl:'./voter.components.html',
    

})
export class VoterComponent{
    logOutDetail: LogOutResponse;
    constructor(
    
    private logoutService: LogoutService,
    private router: Router
  ) {}

    async onClick() {
        console.log('Clicked..');
        let res = await this.logoutService.logout();
    
        if (res.message === 'LOGGED OUT SUCCESFULLY') {
          alert('LOGGED OUT SUCCESFULLY');
          this.router.navigate(['/login']);
        } else {
          alert('Some Error Occured..');
        }
      }
}