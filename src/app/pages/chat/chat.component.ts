import { Component, OnInit } from '@angular/core';
import * as socketIo from 'socket.io-client';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor() { }

  message: string = "";
  messages: string[] = [];
  socketClient: any = null;

  ngOnInit(): void {
    this.socketClient = socketIo.io(environment.socketUrl);
    this.socketClient.on('receiveMessages', (data:any)=>{
      this.messages.push(data);
      
    });

  }

  send(){
    console.log('Enviar mensajes');
    this.messages.push(this.message);
    this.message="";

    this.socketClient.emit('newMessage',{
      message: this.message
    });
    this.message = '';
    
  }

}
