import { Component } from '@angular/core';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WebSocketClient';
  private serverUrl = 'http://localhost:8080/socket';
  private stompClient;

  initializeWebSocketConnection() {
    let ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    let that = this;

    this.stompClient.connect({}, function(frame) {
      that.stompClient.subscribe(
        "/chat", (message) => {
          if(message.body) {
            $(".chat").append("<div class='message'>"+message.body+"</div>")
            console.log(message.body);
          }
        }
      );
    }
  }
}
