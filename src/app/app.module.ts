import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {Error404View} from "./error/view/error.404.view";
import {Error401View} from "./error/view/error.401.view";
import {ErrorSSOView} from "./error/view/error.sso.view";


@NgModule({
  declarations: [
    AppComponent
    ,Error404View
    ,Error401View
    ,ErrorSSOView
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', loadChildren: 'app/layout/layout.module#LayoutModule' },
      { path: 'user',	loadChildren: 'app/layout/none.layout.module#NoneLayoutModule' },
      { path: 'error/401',	component: Error401View },
      { path: 'error/404',	component: Error404View },
      { path: 'error/sso',	component: ErrorSSOView },
      { path: '**',   component: Error404View }
    ])
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
