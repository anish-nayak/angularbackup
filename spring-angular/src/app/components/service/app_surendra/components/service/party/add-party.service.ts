import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AddPartyService {
  constructor(private http: HttpClient) {}

  registerParty(body, sessionId) {
    const headers = { sessionId: sessionId };
    return this.http
      .post<RegisterParty>('http://localhost:8080/evs/party', body, {
        headers,
      })
      .toPromise();
  }
}

export class RegisterParty {
 partyid: number;
  name: string;
  leader: string;
  symbol: string;
 
}
