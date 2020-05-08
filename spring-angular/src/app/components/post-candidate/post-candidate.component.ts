import { Component, OnInit } from '@angular/core';
import { PostCandidateService } from '../service/candidate/post-candidate.service';
@Component({
  selector: 'app-post-candidate',
  templateUrl: './post-candidate.component.html',
  styleUrls: ['./post-candidate.component.css']
})
export class AddCandidateComponent implements OnInit {
  candidateid:number;
  name: string;
  electionid: number;
  partyid: number;
  dateofbirth:number;
  mobileno:number;
  district: string;
  constituency: string;
  address: string;
  emailid: string;

  constructor(private postCandidateService: PostCandidateService) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    console.log('clicked..');

    let body = {
      candidateid:this.candidateid,
  name: this.name,
  electionid: this.electionid,
  partyid:this.partyid,
  dateofbirth:this.dateofbirth,
  mobileno:this.mobileno,
  district:this.district,
  constituency: this.constituency,
  address: this.address,
  emailid: this.emailid,
    };

    console.log(body);
    const sessionId = localStorage.getItem('sessionId');
    let res = await this.postCandidateService.registerCandidate(body, sessionId);

    if (res != null && res.candidateid > 0) {
      alert('Candidate Added Successfully..');
    } else {
      alert('Failed..');
    }
  }
}