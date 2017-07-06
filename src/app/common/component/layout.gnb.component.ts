import {Component, ElementRef, Input, OnDestroy, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {CommonComponent} from "./common.component";
import {Loading} from "../util/loading.util";
import {Subscription} from "rxjs/Subscription";
import {LayoutService} from "../service/layout.service";



@Component({
    selector    : '[layout-gnb]',
    templateUrl : './layout.gnb.component.html'
})
export class LayoutGnbComponent extends CommonComponent implements OnInit, OnDestroy{

    /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    | public Variables
    |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

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

        // this.layoutService = layoutService;
    }

    /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    | Override Method
    |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

    // Init
    public ngOnInit() {

        super.ngOnInit();


    }

    // Destory
    public ngOnDestroy() {

        super.ngOnDestroy();

    }


  // 메인페이지 (앱 첫페이지) 이동
  public gotoMain(){
    this.layoutService.notiMenuChange('main');
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
