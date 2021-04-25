import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

import { faHackerrank, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faGithub = faGithub;
  faHackerrank=faHackerrank
  faLinkedin=faLinkedin
  

  constructor() { }
  hamburger_val=false
  about=false
  ngOnInit(): void {
  }

  toggel(){
    this.toggels()
    
    

  }
  toggels(){
    console.log(this.hamburger_val)
    this.hamburger_val=!this.hamburger_val
    
  }

}
