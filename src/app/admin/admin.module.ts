import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminmenubarComponent } from './adminmenubar/adminmenubar.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './add/add.component';
import { AdminforumComponent } from './adminforum/adminforum.component';
import { AdminforumpageComponent } from './adminforum/adminforumpage/adminforumpage.component';
import { AdminforumresponseComponent } from './adminforum/adminforumresponse/adminforumresponse.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';



@NgModule({
  declarations: [
    AdminmenubarComponent,
    AddComponent,
    AdminforumComponent,
    AdminforumpageComponent,
    AdminforumresponseComponent,
    AdminhomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
  ]
})
export class AdminModule { }
