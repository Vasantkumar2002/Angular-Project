import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DietplanComponent } from './dietplan/dietplan.component';
import { MenubarComponent } from './menubar/menubar.component';
import { DetailsComponent } from './home/details/details.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ForumComponent } from './forum/forum.component';
import { ForumresponseComponent } from './forum/forumresponse/forumresponse.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {path:"menubar",component:MenubarComponent,
  children:[
  {path:"home",component:HomeComponent},
  {path:"Dietplan",component:DietplanComponent},
  {path:"Feedback", component:FeedbackComponent},
  {path:"Create",component:CreateComponent},
  {path:"Forum", component:ForumComponent}  
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
