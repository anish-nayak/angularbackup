import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';



@Injectable()
export class AllResultService{
public httpHeaders:HttpHeaders;


    constructor(private httpClient:HttpClient){
        this.httpHeaders=new HttpHeaders()
        .set('allow-origin-access-control','http://localhost:8080/')
        .set('Content-type','application/json');

    }
   
    allResults(sessionid:string): Observable<Object>{
        this.httpHeaders=new HttpHeaders()
        .set('allow-origin-access-control','http://localhost:8080/')
        .set('Content-type','application/json')
        .set("sessionId",sessionid);

        console.log(this.httpHeaders);
        return this.httpClient.get('http://localhost:8080/evs/check/result',{headers:this.httpHeaders});
    }
}