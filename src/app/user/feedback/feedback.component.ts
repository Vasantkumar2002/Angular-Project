import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent{
  feedbacks:any
  types:string[]=[
    "All",
    "Fruits",
    "Vegetables",
    "Salads",
    "Juices",
    "Milk-Products"
  ]
  selected:string="All"

  constructor(private fs:FeedbackService)  {
    this.fs.getFeedbacks().subscribe(
       {
           next : (data:any)=> this.feedbacks =data
       }
    )
 }
}
