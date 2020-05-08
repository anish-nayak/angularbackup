import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './components/landingcomponents/landing.components';

import {AdminComponent} from './components/admincomponents/admin.components';
import {AddPartyComponent} from './components/addpartycomponents/addparty.components';
import {ViewPartyComponent} from './components/viewPartycomponents/viewparty.components';
import { LoginComponent } from './components/login/login.component';
import { GetElectionComponent } from './components/get-election/get-election.component';
import { PostElectionComponent } from './components/post-election/post-election.component';
import {ElectoralComponent} from './components/electoral/electoral.components';
//surendra
import {ResultComponent} from './components/componentresult/getAllResultsComponent';

const routes: Routes = [
  {path:'land' , component:LandingComponent},
  {path:'' , component:LandingComponent},
  {path:'admin' , component:AdminComponent},
  {path:'addparty' , component:AddPartyComponent},
  {path:'viewparty' , component:ViewPartyComponent},
  { path: 'electoral', component: ElectoralComponent },
  { path: 'login', component: LoginComponent },
  { path: 'election', component: GetElectionComponent },
  { path: 'post-election', component: PostElectionComponent },
  //surendra
  {path:"updateResults",component:ResultComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
