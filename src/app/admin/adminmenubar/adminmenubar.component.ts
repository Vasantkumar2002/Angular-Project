import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-adminmenubar',
  templateUrl: './adminmenubar.component.html',
  styleUrls: ['./adminmenubar.component.css']
})
export class AdminmenubarComponent implements OnInit {

  constructor(private router:Router,private ar:ActivatedRoute) { }

  ngOnInit(): void {
  }
  adminforum(){
    this.router.navigate(['Response'],{relativeTo:this.ar})
  }
  add(){
    this.router.navigate(['Add-Product']),{relativeTo:this.ar}
  }
  adminhome(){
    this.router.navigate(['home']),{relativeTo:this.ar}
  }
  logout() {
    this.router.navigate(['/login']);
  }


}
