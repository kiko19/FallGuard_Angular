import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
declare const Pusher: any
@Injectable({
  providedIn: 'root'
})
export class PusherService {
  pusher: any;
  messagesChannel: any;
  constructor() {
    this.pusher = new Pusher('238db1cb77cebc09b53a');
    this.messagesChannel = this.pusher.subscribe('chat-channel');
  }

}
