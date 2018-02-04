import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule, MatMenuModule, MatToolbarModule, MatButtonModule, MatCheckboxModule } from '@angular/material';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AccountService } from './account.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        AccountService
      ],
      imports: [
        RouterTestingModule,
        MatIconModule, MatMenuModule, MatToolbarModule, MatButtonModule, MatCheckboxModule,
      ],
      declarations: [
        AppComponent,
        NavComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    // const fixture = TestBed.createComponent(AppComponent);
    // const app = fixture.debugElement.componentInstance;
    // expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    // const fixture = TestBed.createComponent(AppComponent);
    // const app = fixture.debugElement.componentInstance;
    // expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    // const fixture = TestBed.createComponent(AppComponent);
    // fixture.detectChanges();
    // const compiled = fixture.debugElement.nativeElement;
    // expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
