import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetRequestService {
  constructor(private http: HttpClient) {}

  getAllRequests(sessionId) {
    const headers = { sessionId: sessionId };
    return this.http.get<Application[]>('http://localhost:8080/evs/user/request', {
      headers,
    });
  }
}

export class Application {
  userid: number;
  constituency: string;
  approvedstatus:number;
  passedstatus: number;
  voterid:string;
}