
// jQuery
declare var $:any;

/**
 * Loading 유틸
 */
export class Loading {

    // 전체 로딩
    public static $loadingFull: any            = null;

    // 부분 로딩
    public static $loadingLayout: any          = null;
    public static $loadingNoneLayout: any      = null;

    // 로딩 타입이 레이아웃 타입인지 여부
    public static IS_LOADING_LAYOUT: boolean  = false;

    /**
     * 전체 로딩 보여줌
     */
    public static showFull() {

        // 로딩 객체체크
       if( this.$loadingFull == null ){

           // 생성된적이 없다면 객체 생성
           this.$loadingFull     = $("#_loadingFull");
       }

        this.$loadingFull.show();
    }

    /**
     * 전체 로딩 숨김
     */
    public static hideFull() {

        // 로딩 객체체크
       if( this.$loadingFull == null ){

           // 생성된적이 없다면 객체 생성
           this.$loadingFull     = $("#_loadingFull");
       }

        this.$loadingFull.hide();
    }

    /**
     * 레이아웃 타입 변경
     */
    public static changeIsLayout(isLayout: boolean){

        // 레이아웃 여부 변경
        this.IS_LOADING_LAYOUT      = isLayout;

        // 로딩 엘리먼트 제거
        this.$loadingLayout         = null;
        this.$loadingNoneLayout     = null;

        // 로딩객체 재생성
        this.makeLoading();
    }

    /**
     * 부분 로딩 보여줌
     */
    public static show() {

        // 로딩객체 체크
        this.makeLoading();

        // 로딩
        if( this.IS_LOADING_LAYOUT ){

            this.$loadingLayout.show();
        }
        else{

            this.$loadingNoneLayout.show();
        }
    }

    /**
     * 부분 로딩 숨김
     */
    public static hide() {

        // 로딩객체 체크
        this.makeLoading();

        // 로딩 해제
        if( this.IS_LOADING_LAYOUT ){

            this.$loadingLayout.hide();
        }
        else{

            this.$loadingNoneLayout.hide();
        }
    }

    public static makeLoading(){

       // 로딩 객체체크
       if( this.IS_LOADING_LAYOUT && (this.$loadingLayout == null || this.$loadingLayout.length == 0) ){

           // 생성된적이 없다면 객체 생성
           this.$loadingLayout     = $("#_loadingLayout");
       }

       // 로딩 객체체크
       if( !this.IS_LOADING_LAYOUT && (this.$loadingNoneLayout == null || this.$loadingNoneLayout.length == 0) ){

           // 생성된적이 없다면 객체 생성
           this.$loadingNoneLayout  = $("#_loadingNoneLayout");
       }
    }
}
