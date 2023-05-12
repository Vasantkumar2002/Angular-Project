import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DietdetailsComponent } from './user/dietplan/dietdetails/dietdetails.component';
import { DetailsComponent } from './user/home/details/details.component';
import { AdminforumresponseComponent } from './admin/adminforum/adminforumresponse/adminforumresponse.component';
import { ForumresponseComponent } from './user/forum/forumresponse/forumresponse.component';


const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"details/:id",component:DetailsComponent},
  {path:"dietdetails/:id",component:DietdetailsComponent},
  {path:"user",
  loadChildren:() => import('./user/user.module').then(m => m.UserModule)},
  {path:"admin",loadChildren: 
  () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path:"forum/:id", component:ForumresponseComponent}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
