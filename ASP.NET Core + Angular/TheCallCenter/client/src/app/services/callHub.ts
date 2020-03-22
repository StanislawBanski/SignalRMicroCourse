import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class CallHub {

  private newCallMessage = new Subject<any>();
  private answeredCallMessage = new Subject<any>();
  private client: HubConnection;

  constructor() {

    this.client = new HubConnectionBuilder()
      .withUrl("/api/call-hub")
      .build();

    this.client.on("NewCall", call => {
      this.newCallMessage.next(call);
    });

    this.client.on("CallAnswered", call => {
      this.answeredCallMessage.next(call);
    })

  }

  public NewCallMessage() {
    return this.newCallMessage.asObservable();
  }

  public AnsweredCallMessage() {
    return this.answeredCallMessage.asObservable();
  }

  public resolveCall(call) {
    this.client.invoke("CallAnswered", call);
  }

  start() {
    this.client.start();
  }

}