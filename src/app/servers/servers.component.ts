import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  // template: '<app-server></app-server><app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false
  serverCreationStatus = "No server was created !!"
  serverName = 'TestServer'

  constructor() { 
     setTimeout(() => {
        this.allowNewServer = true
     }, 2000)
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created, server name is' + this.serverName
  }

  onUpdateServerName(event){
    console.log(event.target.value)
    this.serverName = event.target.value
  }

  ngOnInit(): void {
  }

}
