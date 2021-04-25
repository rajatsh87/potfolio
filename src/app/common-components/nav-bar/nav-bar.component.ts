import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  subscription?:Subscription
  constructor() { }
  hamburger_val=false
  about=false
  ngOnInit(): void {
    console.log(this.hamburger_val)
  }

  toggel(){
    this.toggels()
    this.subscription = interval(2000).subscribe(val => {
      this.toggels()
    });
    

  }
  toggels(){
    console.log(this.hamburger_val)
    this.hamburger_val=!this.hamburger_val
    if(this.subscription){
      this.subscription.unsubscribe();
      console.log("un sub")
    }
  }
}
