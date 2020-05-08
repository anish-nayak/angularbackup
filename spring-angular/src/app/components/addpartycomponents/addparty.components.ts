import { Component, OnInit } from '@angular/core';
import { AddPartyService } from '../service/party/add-party.service';

@Component({
  selector: 'addparty',
  templateUrl: './addparty.components.html',
  
})
export class AddPartyComponent implements OnInit {
  name: string;
  leader: string;
  symbol: string;
 

  constructor(private addPartyService: AddPartyService) {}

  ngOnInit(): void {}

  async onSubmit() {
    console.log('clicked..');

    let body = {
      name: this.name,
      leader: this.leader,
      symbol: this.symbol,
     
    };

    console.log(body);
    const sessionId = localStorage.getItem('sessionId');
    let res = await this.addPartyService.registerParty(body, sessionId);

    if (res != null && res.partyid > 0) {
      alert('Party Added Successfully..');
    } else {
      alert('Failed..');
    }
  }
}
