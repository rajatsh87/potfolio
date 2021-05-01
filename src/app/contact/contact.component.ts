import { Component, OnInit, ViewChild,} from '@angular/core';
import {FormControl, NgForm, Validators} from '@angular/forms';
import {MessageService} from '../message.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  // @ViewChild ('f',{static:false}) formDetails:NgForm
  constructor(private messageService:MessageService) { }
  message:any
  ngOnInit(): void {
  }

  submit(formDetails:NgForm){
    const data=formDetails.form.value
    this.messageService.sendMessage(data).subscribe(data=>{
      
    })
    this.message="Message send successfully"
    // console.log(formDetails.form)
  }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  

}
