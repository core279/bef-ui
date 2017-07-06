import {Component, ElementRef, OnDestroy, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {CommonComponent} from "../common/component/common.component";
import {LayoutService} from "../common/service/layout.service";
import {Loading} from "../common/util/loading.util";



@Component({
  selector    : 'layout',
  templateUrl : 'layout.component.html'
})

export class LayoutComponent extends CommonComponent implements OnInit, OnDestroy{


  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
   | public Variables
   |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/


  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
   | Public Variables
   |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/


  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
   | Constructor
   |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  // 생성자
  constructor(
    public layoutService: LayoutService,
    public router: Router,
    public element: ElementRef) {

    // 부모 생성자 호출
    super(element);

    // 로딩타입 변경
    Loading.changeIsLayout(true);

  }

  public onActivate(e){
    this.$(document).scrollTop(0);
  }



  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
   | Override Method
   |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  // Destory
  public ngOnDestroy() {

    super.ngOnDestroy();
  }

  // Init
  public ngOnInit() {

    super.ngOnInit();

    setTimeout(function(){

      // 전체로딩 해제
      Loading.hideFull();
    }, 300);

  }

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
   | Public Method
   |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
   | public Method
   |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
   | public Method
   |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/



}
