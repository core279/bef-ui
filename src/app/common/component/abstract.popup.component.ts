import {ElementRef, OnDestroy, OnInit} from "@angular/core";
import {CommonComponent} from "../../common/component/common.component";
import {LayoutService} from "../../common/service/layout.service";
import {Close} from "../value/common.close.value";

export class AbstractPopupComponent extends CommonComponent implements OnInit, OnDestroy {

    /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
     | public Variables
     |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

    /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
     | public Variables
     |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

    /**
     * Layout 영역 Element
     * @type {any}
     */
    public $layout: any = null;

    /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
     | Public Variables
     |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

    /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
     | Constructor
     |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

    /**
     * 생성자
     *
     * @param element
     * @param layoutService
     */
    constructor(public element: ElementRef,
                public layoutService: LayoutService) {

        super(element);
    }

    /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
     | Override Method
     |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

    /**
     * Init
     */
    ngOnInit() {

        /**
         * 부모 Init 호출
         */
        super.ngOnInit();

        /**
         * 레이아웃 영역 엘리먼트 생성전이라면
         */
        if (!this.$layout) {
            this.$layout = this.$("#_layout");
        }
    }

    /**
     * Destory
     */
    ngOnDestroy() {
        super.ngOnDestroy();
    }

    /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
     | Public Method
     |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

    /**
     * 초기 데이터 세팅
     * @param param
     */
    init(param: any = null) {

        let _scope: any = this;

        /**
         * 뒤로가기 체크
         * @param event
         */
        window.onpopstate = function (event) {
            /** 뒤로가기를 막고 */
            window.history.forward(1);
            /** 팝업을 닫는다. */
            _scope.close(true);
        };

        /**
         * 레이아웃의 배포팝업 클래스를 추가해준다.
         */
        this.$layout.addClass("type-allscreen");

        /**
         * 팝업을 보여준다.
         */
        this.$element.show();
    }

    /**
     * 공통 전체팝업을 닫는다.
     *
     * @param isNoti
     * @param data
     */
    public close(isNoti: boolean, data: Close = null): void {

        /** 뒤로가기 체크해제 */
        window.onpopstate = null;

        /** 레이아웃의 배포팝업 클래스를 제거해준다. */
        this.$layout.removeClass("type-allscreen");

        /** 팝업을 숨긴다. */
        this.$element.hide();

        /**
         * 알림을 보내는 경우
         */
        if (isNoti) {

            // 파라미터
            let popupParam: Object = {
                type: "close",
                data: data
            };

            // 배포 팝업 닫음 알림
            this.layoutService.notiPopup(popupParam);
        }

    }

    /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
     | public Method
     |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

    /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
     | public Method
     |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

}
