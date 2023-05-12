import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { UserRoutingModule } from './user-routing.module';
import { MenubarComponent } from './menubar/menubar.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ServiceBoxComponent } from './home/service-box/service-box.component';
import { FormBuilder, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TypefilterPipe } from '../pipes/typefilter.pipe';
import { FeedbackComponent } from './feedback/feedback.component';
import { DietplanComponent } from './dietplan/dietplan.component';
import { DiettypeComponent } from './dietplan/diettype/diettype.component';
import { DietdetailsComponent } from './dietplan/dietdetails/dietdetails.component';
import { FeedbackFormComponent } from './feedback/feedback-form/feedback-form.component';
import { FeedbackBoxComponent } from './feedback/feedback-box/feedback-box.component';
import { ForumComponent } from './forum/forum.component';
import { ForumresponseComponent } from './forum/forumresponse/forumresponse.component';
import { ForumpageComponent } from './forum/forumpage/forumpage.component';
import { CreateComponent } from './create/create.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    MenubarComponent,
    HomeComponent,
    ServiceBoxComponent,
    TypefilterPipe,
    FeedbackComponent,
    DietplanComponent,
    DiettypeComponent,
    DietdetailsComponent,
    FeedbackFormComponent,
    FeedbackBoxComponent,
    ForumComponent,
    ForumresponseComponent,
    ForumpageComponent,
    CreateComponent,
  
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  exports:[
    HomeComponent,
    MenubarComponent,
  ]
})
export class UserModule { }
