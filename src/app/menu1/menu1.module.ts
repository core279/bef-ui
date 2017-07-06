import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from "../common/common.module";
import {FrontMenu1View} from "./view/front.menu1.view";


@NgModule({
  declarations: [
    FrontMenu1View
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
       //{ path: "",         redirectTo: '/main', pathMatch: 'full' }
       { path: "",   component: FrontMenu1View }
    ])
  ]
})
export class Menu1Module {
}
