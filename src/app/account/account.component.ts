import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SnsAccount } from '../sns-account.enum';
import { AccountService } from '../account.service';

declare const hello;

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [AccountService]
})

export class AccountComponent implements OnInit {
  testActions: string[] = ['','login','logout'];
  snsAccounts: string[] = [''];
  selectedAccount: string = '';
  selectedAction: string = '';
  alerts: any = [];

  constructor(private router: Router, private accountService: AccountService) {
    Object.keys(SnsAccount).forEach(x => this.snsAccounts.push(x));
  }
  ngOnInit() {
  }

  login(sns:string) {
    this.accountService.snsAccountLogin(sns)
    .then(()=> {
      this.router.navigate(['']);
    })
    .catch(e => {
      console.log(`B! ${sns} login error: ${e}`);
      this.alerts.push({
        type: 'warning',
        msg: `${sns} アカウントで、ログインできませんでした。`,
        timeout: 10000
      });
    })
    ;
  }

  /**
   * SNS認証テスト用処理
   */
  doTestAction() {
    if (this.selectedAction == "login") {
      this.accountService.snsAccountLogin(this.selectedAccount)
        .then(()=> alert(`login success!`))
        .catch(e => alert(`login error: ${e}`))
        ;
    } else if (this.selectedAction == "logout") {
      this.accountService.snsAccountLogout(this.selectedAccount)
        .then(()=> alert('logout success!'))
        .catch(e => alert(`logout error: ${e}`))
        ;
    } else {
      alert(`invalid option ${this.selectedAccount}/${this.selectedAction}`);
    }
  }
}