import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostCandidateService {
  constructor(private http: HttpClient) {}

  registerCandidate(body, sessionId) {
    const headers = { sessionId: sessionId };
    return this.http
      .post<RegisterCandidate>('http://localhost:8080/evs/candidate', body, {
        headers,
      })
      .toPromise();
  }
}

export class RegisterCandidate {
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
}
