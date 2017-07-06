import {Component, ElementRef, OnDestroy, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {CommonComponent} from "./common.component";
import {LayoutService} from "../service/layout.service";

// App 경로
declare var _app: string;
// jQuery
declare var $: any;


@Component({
    selector    : '[layout-lnb]',
    templateUrl : './layout.lnb.component.html'
})
export class LayoutLnbComponent extends CommonComponent implements OnInit, OnDestroy{

    /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    | public Variables
    |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/


    /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    | public Variables
    |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

    // 사이드 메뉴변경 알림 콜백
    public sideChangeSubscription: Subscription;

    // 사이드 메뉴 선택표시 변경
    public changeDisplayOfMenuChoice: Subscription;

    /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    | Public Variables
    |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

    // 선택된 메뉴
    public selectedMenu: string;

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

        // 사이드 메뉴 선택표시 변경
        this.changeDisplayOfMenuChoice = this.layoutService.change$.subscribe(menuName => {

            // 메뉴명
            LayoutService.menu  = menuName;

            // 선택메뉴 변경
            this.selectedMenu   = menuName;
        });

        // 메뉴 변경시
        this.sideChangeSubscription = this.layoutService.sideChange$.subscribe(menuName => {

            // 메뉴명
            LayoutService.menu  = menuName;

            // 선택메뉴 변경
            this.selectedMenu   = menuName;

            this.router.navigate([menuName]);
        });
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

        // 옵저버 해제
        if( this.sideChangeSubscription ){
            this.sideChangeSubscription.unsubscribe();
        }

        // 옵저버 해제
        if( this.changeDisplayOfMenuChoice ){
            this.changeDisplayOfMenuChoice.unsubscribe();
        }
    }

    /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    | Public Method
    |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

    // 메뉴클릭
    public changeMenu(menuName:string){
      if(this.selectedMenu != menuName){
        this.layoutService.notiMenuChange(menuName);
      }

    }

    // 앱 목록 토글
    public toggleApps(menuName: string){

        // 메뉴변경 알림
        LayoutService.menu  = menuName;
        this.layoutService.notiMenuChange(menuName);
    }

    // 특정 페이지로 이동
    public changeRoute(route: string, param: Object = {}){
        this.router.navigate([route, param]);
    }

    /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    | public Method
    |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/


    /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    | public Method
    |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

}
