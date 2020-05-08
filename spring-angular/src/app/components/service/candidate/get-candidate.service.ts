import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetCandidateService {
  constructor(private http: HttpClient) {}

  getAllCandidates(sessionId) {
    const headers = { sessionId: sessionId };
    return this.http.get<Candidate[]>('http://localhost:8080/evs/candidate', {
      headers,
    });
  }
}

export class Candidate {
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
