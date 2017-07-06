import { NgModule }             from '@angular/core';
import { RouterModule } 	    from "@angular/router";
import {FrontMainView} from "./view/front.main.view";
import {CommonModule} from "../common/common.module";

/**
 * 유저관련 모듈
 */
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
        { path: "", component: FrontMainView }
    ])
  ],
  declarations: [
    FrontMainView
  ],
  providers: []
})
export class MainModule { }
