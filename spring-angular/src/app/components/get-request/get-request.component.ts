import { Component, OnInit } from '@angular/core';
import {GetRequestService,Application} from 'src/app/components/service/request/get-request.service';
import { LogoutService, LogOutResponse } from 'src/app/components/service/logout.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-get-request',
  templateUrl: './get-request.component.html',
  styleUrls: ['./get-request.component.css']
})
export class GetRequestComponent implements OnInit {
   
  applications:Application[]=[];
  logOutDetail: LogOutResponse;

  constructor(
    private getRequestService: GetRequestService,
    private logoutService: LogoutService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const sessionId = localStorage.getItem('sessionId');
    this.getRequestService.getAllRequests(sessionId).subscribe((res) => {
      console.log(res);
      this.applications = res;
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


 