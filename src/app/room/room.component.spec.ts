import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomComponent } from './room.component';
import { AccountService } from '../account.service';
import { DokobingoService } from '../dokobingo.service';
import { HttpClient, HttpHandler } from '@angular/common/http'

describe('RoomComponent', () => {
  let component: RoomComponent;
  let fixture: ComponentFixture<RoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        AccountService,
        DokobingoService,
        HttpClient, HttpHandler
      ],
      declarations: [ 
        RoomComponent 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // expect(component).toBeTruthy();
  });
});
