import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {LayoutGnbComponent} from "../common/component/layout.gnb.component";
import {LayoutLnbComponent} from "../common/component/layout.lnb.component";
import {LayoutComponent} from "./layout.component";
import {LayoutService} from "../common/service/layout.service";
import {CommonModule} from "../common/common.module";

@NgModule({
  declarations: [
      LayoutComponent
    , LayoutGnbComponent
    , LayoutLnbComponent
  ],
  imports: [
      CommonModule
    , RouterModule.forChild([
       { path: "", component: LayoutComponent,
         children: [
              { path: "",               redirectTo: '/main', pathMatch: 'full' }
             ,{ path: "main",           loadChildren: 'app/main/main.module#MainModule' } //lazy loading
             ,{ path: "menu1",          loadChildren: 'app/menu1/menu1.module#Menu1Module' }
             ,{ path: "menu2",          loadChildren: 'app/menu2/menu2.module#Menu2Module'}
           ]
       }
    ])
  ],
  exports: [
      RouterModule
  ],
  providers: [
      LayoutService
  ]
})
export class LayoutModule {
}
