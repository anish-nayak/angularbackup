import {Component} from '@angular/core';
import { OnInit} from '@angular/core';
import { FormGroup, FormControl,ReactiveFormsModule } from '@angular/forms';

import { AllResultService } from '../serviceresult/getAllResultService';
import { Result } from '../modelsresult/result.model';


@Component({
    selector:'result',
    templateUrl:'./getAllResultsComponent.html',
    providers:[AllResultService]
    
})

export class ResultComponent implements OnInit{


    public sessionId:string="";
    public results:Result;
    resultForm = new FormGroup({
        Sessionid: new FormControl(),
    });
    
    
    constructor(private myservice:AllResultService){
        
    }
    getRes(id:string){
        
        this.sessionId=id;
        this.myservice.allResults(this.sessionId).subscribe((response:any)=>{this.results=response;});
       
    }

    ngOnInit():void{
        
    }

    }
   