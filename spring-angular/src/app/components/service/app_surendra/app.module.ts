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
 
 
 
 
 
 import { LoginComponent } from './components/login/login.component';
 import { GetElectionComponent } from './components/get-election/get-election.component';
 
 import { PostElectionComponent } from './components/post-election/post-election.component';


 //surendra
 import { AllResultService } from './components/serviceresult/getAllResultService';
 import { ResultComponent } from './components/componentresult/getAllResultsComponent';




@NgModule({
  declarations: [
    AppComponent,LandingComponent,LoginComponent,AdminComponent,AddPartyComponent,ViewPartyComponent,GetElectionComponent,
    PostElectionComponent,ElectoralComponent,ResultComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,AppRoutingModule,HttpClientModule,
   
  ],
  providers: [AllResultService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
