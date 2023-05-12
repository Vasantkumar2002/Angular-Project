import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  servicelist:any;
  type:string[]=[
    "All",
    "Fruits",
    "Vegetables",
    "Salads",
    "Milk-Products",
    "Juices"
  ]
  selected:string="All"
  constructor(private hs:HomeService){
    this.hs.getServices().subscribe(
    {
      next:(data:any)=>this.servicelist=data,
    }
    )
  }
  ngOnInit(): void {
    
    throw new Error('method not implemented.')
  }
}