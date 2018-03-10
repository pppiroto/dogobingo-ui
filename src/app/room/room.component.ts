import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { DokobingoService } from '../dokobingo.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  hello: any;
  room: any;

  constructor(private accountService: AccountService, private bingoService: DokobingoService) { 
  }

  ngOnInit() {
  }

  createRoom() {
    this.bingoService.createRoom(this.accountService.getUser()).subscribe(
      response => {
        this.room = response;
        console.log(this.room);
      },
      error => {
        console.log(error);
      }
    );
  }

  apiTest() {
    this.bingoService.hello('Yagi').subscribe(
      response => {
        this.hello = response;
        console.log(this.hello);
      },
      error => {
        console.log(error);
      }
    );
   }
}
