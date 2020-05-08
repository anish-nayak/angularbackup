import{Injectable} from '@angular/core';
import {  HttpClient } from '@angular/common/http';



@Injectable({
    providedIn: 'root',
})
export class ElectoralService{

    constructor(private http: HttpClient) {}

   public approvedstatus(sessionId){
    const headers = { sessionId: sessionId }
        return this.http.get<Application[]>('http://localhost:8080/evs/application/approved/request',
        {headers,});
   }

    public generatevoterid(app,userid,sessionId){
        const headers = { sessionId: sessionId };
        return this.http.post<Application[]>("http://localhost:8080/evs/application/approved/update/"+ userid,
        app,{headers,}).toPromise();
    }
    public rejectUserById(userid,sessionId){
        const headers = { sessionId: sessionId }
        return this.http.delete("http://localhost:8080/evs/application/approved/reject/"+userid,
        {headers,});
    }

}

export class Application{
 
        userid:number;
        constituency:string;
        passedstatus:number;
        approvedstatus:number;
        voterid:number;
   
}
export class User{
    userId:number;
	firstname:string;
	lastname:string;
	dateofbirth:number;
    gender:string;
	street:string;
	location:string;
	city:string;
	state:string;
}
