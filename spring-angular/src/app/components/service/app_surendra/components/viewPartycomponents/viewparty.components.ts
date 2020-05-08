import { Component, OnInit } from '@angular/core';
import {
  ViewPartyService,
  Party,
} from '../service/party/view-party.service';
import { LogoutService, LogOutResponse } from '../service/logout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-party',
  templateUrl: './viewparty.components.html',
 
})
export class ViewPartyComponent implements OnInit {
  parties: Party[] = [];

  logOutDetail: LogOutResponse;

  constructor(
    private viewPartyService: ViewPartyService,
    private logoutService: LogoutService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const sessionId = localStorage.getItem('sessionId');
    this.viewPartyService.getAllParty(sessionId).subscribe((res) => {
      console.log(res);
      this.parties = res;
    });
  }

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
