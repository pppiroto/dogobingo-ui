import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountService } from '../account.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [AccountService]
})

export class CoreModule { 
  constructor(@Optional() @SkipSelf() parentModule: CoreModule, private accountService: AccountService) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
    this.accountService.init();
    console.log(`*B!* CoreModule initialized.`);
  }
}
