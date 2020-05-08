import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetElectionService {
  constructor(private http: HttpClient) {}

  getAllElections(sessionId) {
    const headers = { sessionId: sessionId };
    return this.http.get<Election[]>('http://localhost:8080/evs/election', {
      headers,
    });
  }
}

export class Election {
  electionid: number;
  name: string;
  electionDate: string;
  district: string;
  constituency: string;
  countingDate: string;
}
