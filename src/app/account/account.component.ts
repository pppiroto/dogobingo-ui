import { Component, OnInit } from '@angular/core';
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
  testActions: string[] = ['','login','logout','check'];
  snsAccounts: string[] = [''];
  selectedAccount: string = '';
  selectedAction: string = '';
  
  constructor(private accountService: AccountService) {
    Object.keys(SnsAccount).forEach(x => this.snsAccounts.push(x));
  }
  ngOnInit() {
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
    } else if (this.selectedAction == "check") {
      this.accountService.getSnsUserInfo(this.selectedAccount)
        .then((json:any) => alert(`your name is ${json.name}`))
        .catch(e => alert(`logout error: ${e}`))
        ;
    } else {
      alert(`invalid option ${this.selectedAccount}/${this.selectedAction}`);
    }
  }
}