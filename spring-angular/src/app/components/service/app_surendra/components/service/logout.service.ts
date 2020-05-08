import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LogoutService {
  constructor(private http: HttpClient) {}

  logout() {
    return this.http
      .get<LogOutResponse>('http://localhost:8080/evs/logout')
      .toPromise();
  }
}

export class LogOutResponse {
  result: string;
  message: string;
  sessionId: string;
}
