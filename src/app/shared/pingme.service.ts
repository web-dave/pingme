import { rest } from './../../environments/environment';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class PingmeService {
  window: Window;
  vapidPublicKey = 'BHe82datFpiOOT0k3D4pieGt1GU-xx8brPjBj0b22gvmwl-HLD1vBOP1AxlDKtwYUQiS9S-SDVGYe_TdZrYJLw8';

  constructor(private http: Http) { }

  getUsers(): Observable<string[]> {
    return this.http.get(`${rest.root}users`).map(res => res.json());
  }

  subscribeToPush(name: string) {
    const payload = { action: 'subscribe', user: name };
    return this.http.post(`${rest.root}pingme/webpush`, payload).map(res => res.json());
  }

  sendMessage(name, msg, users) {
    const payload = { action: 'message', user: name , message: msg, users: users};
    return this.http.post(`${rest.root}pingme/msg`, payload).map(res => res.json());
  }
}
