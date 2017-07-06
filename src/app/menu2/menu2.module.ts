import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from "../common/common.module";
import {FrontMenu2View} from "./view/front.menu2.view";


@NgModule({
  declarations: [
    FrontMenu2View
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
       //{ path: "",         redirectTo: '/main', pathMatch: 'full' }
       { path: "",   component: FrontMenu2View }
    ])
  ]
})
export class Menu2Module {
}
