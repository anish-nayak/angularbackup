import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../service/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userId: number;
  password: string = '';
  userType: number;

  // response: string;

  message: string;
  result: string;
  sessionId: string;

  constructor(private loginService: LoginService, private router: Router) {}

  async onSubmit() {
    let body = {
      userid: this.userId,
      password: this.password,
      usertype: this.userType,
    };

    let res = await this.loginService.loginAdmin(body);

    // this.message = this.loginService.sendResponse().message;
    // this.result = this.loginService.sendResponse().result;
    // this.sessionId = this.loginService.sendResponse().sessionId;
    console.log(res.sessionId);

    this.result = res.result;
    this.message = res.message;
    this.sessionId = res.sessionId;

    if (res.result === 'Success') {
      localStorage.setItem('sessionId', res.sessionId);

      if(body.usertype==1)
      this.router.navigate(['/admin']);
      else if(body.usertype==2)
      this.router.navigate(['/electoral']);
      else
      this.router.navigate(['/voter']);
     
    } else {
      this.router.navigate(['/login']);
    }

    // this.userId;
    // console.log(`${this.userId} ${this.password} ${this.userType}`);
  }

  ngOnInit(): void {}
}
