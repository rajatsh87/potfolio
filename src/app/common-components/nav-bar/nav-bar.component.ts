import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }
  hamburger_val=false
  about=false
  ngOnInit(): void {
  }

  toggel(){
    console.log("changed  ")
    this.hamburger_val=!this.hamburger_val
  }
  toggel1(){
    console.log("active")
    this.about=!this.about
  }
}
