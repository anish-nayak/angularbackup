import { Component, OnInit } from '@angular/core';
import { PostElectionService } from '../service/election/post-election.service';

@Component({
  selector: 'app-post-election',
  templateUrl: './post-election.component.html',
  styleUrls: ['./post-election.component.css'],
})
export class PostElectionComponent implements OnInit {
  name: string;
  electionDate: string;
  district: string;
  constituency: string;
  countingDate: string;

  constructor(private postElectionService: PostElectionService) {}

  ngOnInit(): void {}

  async onSubmit() {
    console.log('clicked..');

    let body = {
      name: this.name,
      electionDate: this.electionDate,
      district: this.district,
      constituency: this.constituency,
      countingDate: this.countingDate,
    };

    console.log(body);
    const sessionId = localStorage.getItem('sessionId');
    let res = await this.postElectionService.registerElection(body, sessionId);

    if (res != null && res.electionid > 0) {
      alert('Election Added Successfully..');
    } else {
      alert('Failed..');
    }
  }
}
