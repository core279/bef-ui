import {ElementRef, OnDestroy, OnInit} from "@angular/core";

import {CommonComponent} from "../component/common.component";

export class CommonView extends CommonComponent implements OnInit, OnDestroy{

    // Body Element
    public $body: any        = null;

    // 생성자
    constructor(public element: ElementRef) {

        super(element);
    }

    // Init
    public ngOnInit() {

        super.ngOnInit();

        // Body Element가 아직 생성전이라면
        if( !this.$body ){

            this.$body  = this.$("body");
        }

        // Body에 Class 제거
        this.$body.removeClass();
    }

    // Destory
    public ngOnDestroy() {

        super.ngOnDestroy();

        // 로딩
        this.loadingShow();
    }
}
