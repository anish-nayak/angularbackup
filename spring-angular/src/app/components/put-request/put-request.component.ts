import { Component, OnInit } from '@angular/core';
import { PutRequestService } from 'src/app/components/service/request/put-request.service'
@Component({
  selector: 'app-put-request',
  templateUrl: './put-request.component.html',
  styleUrls: ['./put-request.component.css']
})
export class PutRequestComponent implements OnInit {
  
  userid: number;
  constituency: string;
  approvedstatus:number;
  passedstatus: number;
  voterid:string;

  constructor(private putRequestService: PutRequestService) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    console.log('clicked..');

    let body = {
      userid: this.userid,
  constituency: this.constituency,
  approvedstatus:this.approvedstatus,
  passedstatus:this.passedstatus,
  voterid:this.voterid,
    };

    console.log(body);
    const sessionId = localStorage.getItem('sessionId');
    let res = await this.putRequestService.updateRequest(body, sessionId);

    if (res != null && res.userid > 0) {
      alert('Application Updated Successfully..');
    } else {
      alert('Failed..');
    }
  }
}
