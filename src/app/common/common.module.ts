import {NgModule} from "@angular/core";
import {CommonModule as AngularCommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {LayoutFooterComponent} from "./component/layout.footer.component";

@NgModule({
  imports: [
      AngularCommonModule
    , FormsModule
    , HttpModule
  ],
  declarations: [
    LayoutFooterComponent
  ],
  exports: [
    // Module
      AngularCommonModule
    , FormsModule
    , HttpModule
    // Component
    , LayoutFooterComponent
  ]
})
export class CommonModule {
}
