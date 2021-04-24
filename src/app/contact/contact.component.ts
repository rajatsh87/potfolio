import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  // @ViewChild ('f',{static:false}) formDetails:NgForm
  constructor() { }

  ngOnInit(): void {
  }

  submit(formDetails:NgForm){
    const data=formDetails.form.value
    console.log(data)
  }

}
