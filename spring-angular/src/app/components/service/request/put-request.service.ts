import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PutRequestService {
  constructor(private http: HttpClient) {}

  updateRequest(body, sessionId) {
    const headers = { sessionId: sessionId };
    return this.http
      .put<Application>('http://localhost:8080/evs/application/approve', body, {
        headers,
      })
      .toPromise();
  }
}

export class Application {
  userid: number;
  constituency: string;
  approvedstatus:number;
  passedstatus: number;
  voterid:string;
}