import { NgModule } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule, MatMenuModule, MatToolbarModule, MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        NgModule,
        {provide: Router, useClass: RouterModule},
      ],
      imports: [
        MatIconModule, MatMenuModule, MatToolbarModule, MatButtonModule, MatCheckboxModule
      ],
      declarations: [ NavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // expect(component).toBeTruthy();
  });
});
