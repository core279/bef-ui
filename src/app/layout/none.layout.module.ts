import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {NoneLayoutComponent} from "./none.layout.component";
import {CommonModule} from "../common/common.module";
import {LayoutService} from "../common/service/layout.service";

@NgModule({
  declarations: [
    NoneLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", component: NoneLayoutComponent, children: [
        { path: "",      redirectTo: '/user/login', pathMatch: 'full' },
        { path: "login", loadChildren: 'app/user/user.module#UserModule' },
        { path: "join",  loadChildren: 'app/user/user.module#UserModule' }
      ]}
    ])
  ],
  exports: [],
  providers: [
    LayoutService
  ]
})
export class NoneLayoutModule {

}

