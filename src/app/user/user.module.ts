import { NgModule }             from '@angular/core';
import { RouterModule } 	    from "@angular/router";
import {FrontLoginView} from "./view/front.login.view";
import {CommonModule} from "../common/common.module";

/**
 * 유저관련 모듈
 */
@NgModule({
  declarations: [
    FrontLoginView

  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
        { path: "", component: FrontLoginView },
        { path: "login", component: FrontLoginView },
    ])
  ],
  providers: [

  ]
})
export class UserModule { }
