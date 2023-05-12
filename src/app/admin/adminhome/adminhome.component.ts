import { Component, OnInit,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  @Input() pro1:any;

selectedProduct: any;

selectProduct(product: any) {
  this.selectedProduct = product;
}

productlist:any;
product = null;

constructor(private hs:HomeService, private http:HttpClient){
  this.hs.getServices().subscribe(
    {
      next: (data:any)=> this.productlist =data,
      error: ()=> this.productlist=[]
    }
  )
}

ngOnInit(): void {
}
}