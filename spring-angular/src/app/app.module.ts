import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from "@angular/common/http";

 import {FormsModule,ReactiveFormsModule} from '@angular/forms';
 import {LandingComponent} from './components/landingcomponents/landing.components';
 import {ElectoralComponent} from './components/electoral/electoral.components';
 import {AdminComponent} from './components/admincomponents/admin.components';
 import {AddPartyComponent} from './components/addpartycomponents/addparty.components';
 import {ViewPartyComponent} from './components/viewPartycomponents/viewparty.components';
 import {VoterComponent} from './components/votercomponents/voter.components';
 import{PutRequestComponent} from 'src/app/components/put-request/put-request.component'
 import {AddCandidateComponent} from 'src/app/components/post-candidate/post-candidate.component';
import{GetRequestComponent} from './components/get-request/get-request.component'
import { GetCandidateComponent } from 'src/app/components/get-candidate/get-candidate.component';
 
 
 import { LoginComponent } from './components/login/login.component';
 import { GetElectionComponent } from './components/get-election/get-election.component';
 
 import { PostElectionComponent } from './components/post-election/post-election.component';

 import { AllResultService } from './components/serviceresult/getAllResultService';
 import { ResultComponent } from './components/componentresult/getAllResultsComponent';




@NgModule({
  declarations: [
    AppComponent,LandingComponent,LoginComponent,AdminComponent,AddPartyComponent,ViewPartyComponent,GetElectionComponent,
    PostElectionComponent,ElectoralComponent,AddCandidateComponent,PutRequestComponent,GetCandidateComponent,
    GetRequestComponent,ResultComponent,VoterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,AppRoutingModule,HttpClientModule,
   
  ],
  providers: [AllResultService],
  bootstrap: [AppComponent]
})
export class AppModule { }
