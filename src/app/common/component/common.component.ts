import {ElementRef, OnDestroy, OnInit} from "@angular/core";
import {Loading} from "../util/loading.util";
import {Alert} from "../util/alert.util";
import {Message} from "../util/message.util";
import {Validate} from "../util/validate.util";
import {LayoutService} from "../service/layout.service";

// Context 경로
declare var _ctx: string;

// API 경로
declare var _apiFull: string;

// jQuery
declare var $: any;

// 날짜 객체 함수 재정의 - Start
declare global {
    interface Date {
        addDays( nDays:number ): Date;
    }
}

//toast
declare var toastr: any;

Date.prototype.addDays = function( nDays ) {
    var time = this.getTime();
    var changedDate = new Date(time + (nDays * 24 * 60 * 60 * 1000));
    this.setTime(changedDate.getTime());
    return this;
};  // Method - addDays

// 날짜 객체 함수 재정의 - End

export class CommonComponent implements OnInit, OnDestroy{

    /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    | public Variables
    |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/
    /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    | public Variables
    |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

    // 메시지 객체
    public message: any                  = Message;

    // Validation 객체
    public validate: any                 = Validate;

    // jQuery 객체
    public $: any                        = $;

    // Alert 객체
    public alert: any                    = Alert;

    // 컴포넌트 바로 아래의 로딩 엘리먼트
    public $loading: any;

    // 현재 컴포넌트 jQuery 객체
    public $element: any;

    // 모달 영역의 로딩 엘리먼트
    public $modalLoading: any;

    // 컴포넌트 바로 아래의 짧은 로딩 엘리먼트
    public $shortLoading: any;

    //페이지 사이즈
    public pageSize : number             = 10;

    //페이지 범위
    public pageRange : number            = 5;

    // API 경로 ( ex: http://localhost:8080/api
    public api: string                   = _apiFull;

    //indicator객체
    public $indicator:any = this.$("#_indicator");

    /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    | Public Variables
    |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

    /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    | Constructor
    |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

    // 생성자
    constructor(public element: ElementRef) {
      toastr.options = {
        closeButton: false,
        debug: false,
        newestOnTop: false,
        progressBar: true,
        positionClass: "toast-top-right",
        preventDuplicates: false,
        onclick: null,
        showDuration: "300",
        hideDuration: "1000",
        timeOut: "5000",
        extendedTimeOut: "1000",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut"
      };
    }

    /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    | Override Method
    |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

    // Init
    public ngOnInit() {

        // 현재 컴포넌트 jQuery 객체
        this.$element   = this.$(this.element.nativeElement);

        // 컴포넌트 바로 아래의 로딩 엘리먼트
        this.$loading   = this.$element.children(".cp-loadingPart");
    }

    // Destory
    public ngOnDestroy() {

        if( this.$element ) {

            // 현재 엘리먼트 하위의 모든 이벤트 해제
            this.$element.find("*").off();

            // 엘리먼트 제거
            this.$element.remove();
        }
    }

    /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    | Public Method
    |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

    /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    | public Method
    |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

    // URL 변경
    public changeUrl(urlStr: string, indicatorStr:string = null) {

      this.$indicator.empty();

      let indicatorArr = indicatorStr  != null ? indicatorStr.split('/')  :  urlStr.split('/');
      let indicatorHtml = LayoutService.menu == 'favorite' ? '<li><span>favorite &gt; </span></li>' : '';
      for(var i=0; i < indicatorArr.length; i ++){
        if(i < indicatorArr.length -1){
          indicatorHtml = indicatorHtml + `<li><span>${indicatorArr[i]} &gt; </span></li>`
        }else{
          indicatorHtml = indicatorHtml + `<li><span>${indicatorArr[i]}</span></li>`
        }
      }

      this.$indicator.append(indicatorHtml);

      if(urlStr && urlStr != ''){
        window.history.pushState(null, null, _ctx + urlStr );
      }

    }

    // 컨텐츠 영역 로딩 시작
    public loadingShow(){

        Loading.show();
    }

    // 컨텐츠 영역 로딩 해제
    public loadingHide(){

        Loading.hide();
    }

    // 모달 팝업 영역 로딩 시작
    public modalLoadingShow(){

        // 현재 컴포넌트 jQuery 객체
        this.$element   = this.$(this.element.nativeElement);

        this.$modalLoading = this.$element.children(".crepaasModal").find(".cp-loadingPart").show();
    }

    // 모달 팝업 영역 로딩 해제
    public modalLoadingHide(){

        // 현재 컴포넌트 jQuery 객체
        this.$element   = this.$(this.element.nativeElement);

        this.$modalLoading = this.$element.children(".crepaasModal").find(".cp-loadingPart").hide();
    }


    // 컴포넌트 바로 아래의 짧은 로딩 시작
    public shortLoadingShow(){

        // 현재 컴포넌트 jQuery 객체
        this.$element   = this.$(this.element.nativeElement);

        this.$shortLoading = this.$element.children(".type-mid").show();
    }

    // 컴포넌트 바로 아래의 짧은 로딩 멈춤
    public shortLoadingHide(){

        // 현재 컴포넌트 jQuery 객체
        this.$element   = this.$(this.element.nativeElement);

        this.$shortLoading = this.$element.children(".type-mid").hide();
    }

    // String Pad
    public str_pad( input:string, length:number, padStr:string, padType:string ) {

        if( input.length >= length ) return input;

        let result:string = '';
        padStr  = padStr || '0';
        input   = input + '';
        padType = padType || 'STR_PAD_LEFT​';
        let inputLength:number  = input.length;
        let pad:string          = Array( length - inputLength + 1 ).join( padStr );
        switch( padType ) {
            case 'STR_PAD_LEFT​':
                result = pad + input;
                break;
            case 'STR_PAD_RIGHT':
                result = input + pad;
                break;
            case 'STR_PAD_BOTH':
                let i:number = parseInt( ( ( length - inputLength ) / 2 ) + '' ) ;
                result = pad.substring(0,i) + input + pad.substring(i, length - i + 1);
                break;
        }
        return result;

    }   // function - str_pad


    // 날짜 -> 형식 문자로 변경
    public toFormatString( date:any ) {
        let strSplitter:string = '-';
        var strYear     = date.getFullYear();
        var strMonth    = this.str_pad( ( date.getMonth() + 1 ), 2, '0', 'STR_PAD_LEFT​' );
        var strDate     = this.str_pad( date.getDate(), 2, '0', 'STR_PAD_LEFT​' );
        return strYear + strSplitter + strMonth + strSplitter + strDate;
    };   // Method - toFormatString

    // 날짜 -> 형식 문자로 변경
    public toFormatTimeString( date:any ) {
        let strSplitter:string = '-';
        var strYear     = date.getFullYear();
        var strMonth    = this.str_pad( ( date.getMonth() + 1 ), 2, '0', 'STR_PAD_LEFT​' );
        var strDate     = this.str_pad( date.getDate(), 2, '0', 'STR_PAD_LEFT​' );
        var strHour     = this.str_pad( date.getHours(), 2, '0', 'STR_PAD_LEFT​' );
        var strMinutes  = this.str_pad( date.getMinutes(), 2, '0', 'STR_PAD_LEFT​' );
        return strYear + strSplitter + strMonth + strSplitter + strDate + " " + strHour + ":" + strMinutes;
    };   // Method - toFormatTimeString

    // 어드민인지 여부 반환
    public isAdmin(){

      return true;
    }


    /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    | public Method
    |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

}
