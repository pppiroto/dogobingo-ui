import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { DokobingoService } from '../dokobingo.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  constructor(private accountService: AccountService, private bingoService: DokobingoService) { 
  }

  ngOnInit() {
  }
}
