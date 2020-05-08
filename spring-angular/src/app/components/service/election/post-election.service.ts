import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostElectionService {
  constructor(private http: HttpClient) {}

  registerElection(body, sessionId) {
    const headers = { sessionId: sessionId };
    return this.http
      .post<RegisterElection>('http://localhost:8080/evs/election', body, {
        headers,
      })
      .toPromise();
  }
}

export class RegisterElection {
  electionid: number;
  name: string;
  electionDate: string;
  district: string;
  constituency: string;
  countingDate: string;
}
