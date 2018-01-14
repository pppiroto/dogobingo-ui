import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { SnsAccount } from '../sns-account.enum';
import { AccountService } from '../account.service';
import { User } from '../user';

declare const hello;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [AccountService]
})
export class NavComponent implements OnInit, OnDestroy {
  subscription: Subscription
  user: User;

  constructor(private router: Router, private accountService: AccountService) {
  }
  
  ngOnInit() {
    this.subscription = this.accountService.userChangeAnnounced$.subscribe((user:User) => {
      this.user = user;
    });  
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /**
   * SNS認証ログイン
   * 
   * @param sns 
   */
  login(sns:string) {
    this.accountService.snsAccountLogin(sns)
      .then(()=> {
        // ログインユーザー情報の取得
        return this.accountService.getSnsLoginUserInfo();
      })
      .catch(e => {
        console.log(`B! ${sns} login error: ${e}`);

        // TODO: to Material Dialog
        alert(`${sns} アカウントで、ログインできませんでした。`);
      })
      .then((user:User) => {
        // ログインユーザー情報の取得 成功
        this.router.navigate([""]);
        this.accountService.announceUserChange(user)
      })
      ;
  }
}