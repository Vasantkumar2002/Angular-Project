import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AdminmenubarComponent } from './adminmenubar/adminmenubar.component';
import { AddComponent } from './add/add.component';
import { AdminforumComponent } from './adminforum/adminforum.component';
import { AdminforumresponseComponent } from './adminforum/adminforumresponse/adminforumresponse.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';

const routes:Routes=[
  {path:"",component:AdminmenubarComponent,
  children:[
  {path:"Add-Product",component:AddComponent},
  {path:"home",component:AdminhomeComponent},
  {path:"Response",component:AdminforumComponent},
  {path:"responses/:id",component:AdminforumresponseComponent}
  
  ]}
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
  
})
export class AdminRoutingModule { }
