import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  responseReturn: LoginResponse;
  loginAdmin(body) {
    return this.http
      .post<LoginResponse>('http://localhost:8080/evs/login', body)
      .toPromise();
    // this.http
    //   .post<LoginResponse>('http://localhost:8080/evs/login', body)
    //   .subscribe(
    //     (response) => {
    //       this.responseReturn = response;
    //       console.log(response);
    //     },
    //     (error) => console.log(error)
    //   );
  }

  sendResponse(): LoginResponse {
    return this.responseReturn;
  }
}

class LoginResponse {
  message: string;
  result: string;
  sessionId: string;
}
