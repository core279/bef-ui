import {Component, OnInit, OnDestroy, ViewChild, ElementRef, OnChanges} from '@angular/core';
import {Router, ActivatedRoute}   from '@angular/router';
import { LyaoutView }                               from '../../common/view/layout.view';
import { LayoutService }                            from '../../common/service/layout.service';
import Any = jasmine.Any;


// App 경로
declare var _app:string;


@Component({
    selector    : 'front-menu1',
    templateUrl : './front.menu1.view.html'
})
export class FrontMenu1View extends LyaoutView implements OnInit, OnDestroy{

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
        public router: Router, //전체 router
        public activatedRoute: ActivatedRoute, //현재 활성화된 route
        public layoutService: LayoutService,
        public element: ElementRef ) {

        super(element, layoutService);

    }

    /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    | Override Method
    |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

    // Init
    public ngOnInit() {

        // 부모 Init 호출
        super.ngOnInit();

        // 앱 데이터 조회
        this.init();

    }

    // Destory
    public ngOnDestroy() {

      super.ngOnDestroy();
    }


    /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    | Public Method
    |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

    // 초기실행 & 실행재계
    public init(){

        // 상위 init 호출
        super.init("menu1");

        this.loadingHide();
    }



    // 실행중지
    public stop(){

        // 상위 stop 호출
        super.stop();
    }

    /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    | public Method
    |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

    /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    | public Method
    |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  /**-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
   | 팝업 관련
   |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/
}
