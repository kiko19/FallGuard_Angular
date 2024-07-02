import { HttpClient } from '@angular/common/http';
import Pusher from 'pusher-js';
import { PusherService } from './../pusher.service';
import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})



export class ChatComponent implements OnInit {
username ='username';
message='';
messages=[];

  constructor(private _PusherService: PusherService,private _httpClient:HttpClient) {
  }

  ngOnInit(): void {
    Pusher.logToConsole = true;

    var pusher = new Pusher('238db1cb77cebc09b53a', {
      cluster: 'eu'
    });

    var channel = pusher.subscribe('chat-channel');
    channel.bind('chat-event',  (data:any)=> {
      alert(JSON.stringify(data));
      console.log(data);

    });
  }

}




