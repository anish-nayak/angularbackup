import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ViewPartyService {
  constructor(private http: HttpClient) {}

  getAllParty(sessionId) {
    const headers = { sessionId: sessionId };
    return this.http.get<Party[]>('http://localhost:8080/evs/party', {
      headers,
    });
  }
}

export class Party {
 partyid: number;
  name: string;
  leader: string;
  symbol: string;
 
}
