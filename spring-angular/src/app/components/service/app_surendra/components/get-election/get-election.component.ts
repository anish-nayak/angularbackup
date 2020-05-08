import { Component, OnInit } from '@angular/core';
import {
  GetElectionService,
  Election,
} from '../service/election/get-election.service';
import { LogoutService, LogOutResponse } from '../service/logout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-election',
  templateUrl: './get-election.component.html',
  styleUrls: ['./get-election.component.css'],
})
export class GetElectionComponent implements OnInit {
  elections: Election[] = [];

  logOutDetail: LogOutResponse;

  constructor(
    private getElectionService: GetElectionService,
    private logoutService: LogoutService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const sessionId = localStorage.getItem('sessionId');
    this.getElectionService.getAllElections(sessionId).subscribe((res) => {
      console.log(res);
      this.elections = res;
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
