import {Component ,OnInit} from '@angular/core';
import { LogoutService, LogOutResponse} from '../service/logout.service';
import {ElectoralService, Application, User }from '../service/electoral.service';
import { Router } from '@angular/router';

@Component({
    selector:'electoral',
    templateUrl:'./electoral.components.html',
    styleUrls:['./electoral.component.css'],

})
export class ElectoralComponent implements OnInit{ 
  application: Application[] = [];
  user:any;
    logOutDetail: LogOutResponse;
    userid:number;
    constituency:string;
    passedStatus:number;
    approvedStatus:number;
    voterId:number;

   
        constructor(
        private service: ElectoralService ,
        private logoutService: LogoutService,
        private router: Router
        ) {}
      ngOnInit():void{
        const sessionId = localStorage.getItem('sessionId');
        this.service.approvedstatus(sessionId).subscribe((response)=>{
          console.log(response);
          this.application = response;
        });
      }
      async generate() {
        let app= {
          userid  :this.userid,
          constituency : this.constituency ,
          passedstatus: this.passedStatus,
          approvedstatus : this.approvedStatus,
          voterid :this.voterId,

        };
        console.log(app);
        const sessionId = localStorage.getItem('sessionId');
        let res =await this.service.generatevoterid(app,app.userid,sessionId);
        if (res != null && app.userid > 0) {
          alert('voterid generated and Added Successfully..');
        } else {
          alert('Failed..');
        }
       }
      async delete(userid:number) {
      
        let app= {
          userid  :this.userid,
        }
          const sessionId = localStorage.getItem('sessionId');
          let del= await this.service.rejectUserById(this.userid, sessionId);
          
      if ((del != null)&&(app.userid==0 )) {
          alert('voterid generated and Added Successfully..');
        } 
        else {
          alert('Failed..');
        }
        
      }



    async onClick() {
        console.log('Clicked..');
        let res = await this.logoutService.logout();
    
        if (res.message === 'LOGGED OUT SUCCESFULLY') {
          alert('LOGGED OUT SUCCESFULLY');
          this.router.navigate(['/login']);
        } else {
          alert('Some Error Occured..');
        }
      }
}

