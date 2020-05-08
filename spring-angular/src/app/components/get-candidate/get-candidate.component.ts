import { Component, OnInit } from '@angular/core';
import { GetCandidateService,Candidate} from 'src/app/components/service/candidate/get-candidate.service';
import { LogoutService, LogOutResponse } from '../service/logout.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-get-candidate',
  templateUrl: './get-candidate.component.html',
  styleUrls: ['./get-candidate.component.css']
})
export class GetCandidateComponent implements OnInit {
  candidates: Candidate[] = [];

  logOutDetail: LogOutResponse;
  constructor(
    private getCandidateService: GetCandidateService,
    private logoutService: LogoutService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const sessionId = localStorage.getItem('sessionId');
    this.getCandidateService.getAllCandidates(sessionId).subscribe((res) => {
      console.log(res);
      this.candidates = res;
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
