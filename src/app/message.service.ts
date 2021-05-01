import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http:HttpClient) { }

  sendMessage(data:any){
    // console.log(data)
    return this.http.post('https://rajatsh87-send-mail.herokuapp.com/sendmail',data)
  }
}
