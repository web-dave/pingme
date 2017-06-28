import { PingmeService } from './../shared/pingme.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.css']
})
export class MsgComponent implements OnInit, OnDestroy {
  users: string[];
  username: string = null;
  interval;

  constructor(private service: PingmeService) { }

  ngOnInit() {
    if (localStorage.getItem('pingmename') !== undefined && localStorage.getItem('pingmename') !== null) {
      this.username = localStorage.getItem('pingmename');
    }
    this.interval = setInterval(() => this.getUsers(), 5000);
  }

  subscribeme(n) {
    localStorage.setItem('pingmename', n.name);
    this.username = n.name;
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  unsubscribeme() {
    localStorage.setItem('pingmename', null);
    this.username = null;
  }

  getUsers() {
    this.service.getUsers().subscribe(users => this.users = users);
  }

}
