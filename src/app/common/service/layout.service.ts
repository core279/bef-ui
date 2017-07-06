import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";

@Injectable()
export class LayoutService {

	// 앱 or 프로젝트가 삭제되어 호출된지 여부
	static isDeleteEnter: boolean = false;

	// LNB 목록이 없어서 메인화면으로 유입되었는지 여부
	static isEmptyEnter: boolean = false;

	// MainView 를 통과했는지 여부
	// 최초 접근인 경우 메인에서 사이드메뉴를 오픈함 ==> 최초 접근이 아닌 경우 사이드메뉴를 여는 작업을 하지 않음
	static isFirstContact: boolean = true;

	// 현재 Side 메뉴명
	static menu: string = "";

	// 사이드 메뉴 선택변경 Observable
	public sideChangeSource: Subject<string> = new Subject<string>();
	public sideChange$ = this.sideChangeSource.asObservable();

	public notiMenuChange(menuName: string) {

		// 사이드 메뉴 선택변경 알림
		this.sideChangeSource.next(menuName);
	}

	// 공통 전체팝업 Observable
	public popupSource: Subject<Object> = new Subject<Object>();
	public popup$ = this.popupSource.asObservable();

	public notiPopup(data: Object) {

		// 공통 전체팝업 호출 알림
		this.popupSource.next(data);
	}

	// 퀵가이드 Observable
	public guideSource: Subject<Object> = new Subject<Object>();
	public guide$ = this.guideSource.asObservable();

	public notiGuide(data: Object) {

		// 공통 전체팝업 호출 알림
		this.guideSource.next(data);
	}

	// 로그인 체크완료 Observable
	public loginCheckSource: Subject<Object> = new Subject<Object>();
	public loginCheck$ = this.loginCheckSource.asObservable();

	public notiLoginCheck() {

		// 로그인체크 완료 호출 알림
		this.loginCheckSource.next("");
	}

	// 앱 상태 변화알림 Observable
	public sideAppStateNotice: Subject<Object> = new Subject<Object>();
	public sideApp$ = this.sideAppStateNotice.asObservable();

	public notiState(data: Object) {

		// 앱 상태 푸시
		this.sideAppStateNotice.next(data);
	}

  // 프로젝트 요약 페이지에서 즐겨찾기에 대한 변화알림 Observable
  public sideFavoriteNotice: Subject<Object> = new Subject<Object>();
	public sideFavorite$ = this.sideFavoriteNotice.asObservable();

	public notiFavorite(data: Object){

	  this.sideFavoriteNotice.next(data);
  }


  // 즐겨찾기 리스트 앱 해제 시 프로젝트 상세 화면으로 변화알림 Observable
  public favoriteAppStateNotice: Subject<Object> = new Subject<Object>();
  public sideFavoriteApp$ = this.favoriteAppStateNotice.asObservable();

  public notiFavoriteAppState(data: Object) {

    // 앱 상태 푸시
    this.favoriteAppStateNotice.next(data);
  }


	// 프로젝트 이름 변화 알림
	public sideProjectNameNotice: Subject<Object> = new Subject<Object>();
	public sideProject$ = this.sideProjectNameNotice.asObservable();

	public notiProject(data: Object) {
		this.sideProjectNameNotice.next(data);
	}

	// 마이페이지 이미지 변경 Observable
	public myPageImageNotice: Subject<Object> = new Subject<Object>();
	public mypageImage$ = this.myPageImageNotice.asObservable();

	public notiMypageImage(data: Object) {

		// 이미지 변경 noti
		this.myPageImageNotice.next(data);
	}

	// 사이드 메뉴 선택표시 변경 Observable
	public changeDisplayOfMenuChoice: Subject<string> = new Subject<string>();
	public change$ = this.changeDisplayOfMenuChoice.asObservable();

	public menuChoice(menuName: string) {

		// 사이드 메뉴 선택표시 변경
		this.changeDisplayOfMenuChoice.next(menuName);
	}

	// 관리자 탭 변경 Observable
	public adminChangeTab: Subject<any> = new Subject<any>();
	public admin$ = this.adminChangeTab.asObservable();

	public changeTab(firstTabName: string, LastTabName: string = '', selectFirstTab: boolean = false) {

		// 사이드 메뉴 선택표시 변경
		this.adminChangeTab.next({
			'firstTabName': firstTabName,
			'LastTabName': LastTabName,
			'selectFirstTab': selectFirstTab
		});
	}

	// QueryBrowser close noti Observable
	public queryBrowserCloseNoti: Subject<Object> = new Subject<Object>();
	public queryBrowser$ = this.queryBrowserCloseNoti.asObservable();

	public closeNoti(data: Object) {
		this.queryBrowserCloseNoti.next(data);
	}

	// QueryBrowser table click noti Observable
	public queryBrowserTableClick: Subject<string> = new Subject<string>();
	public queryBrowserTable$ = this.queryBrowserTableClick.asObservable();

	public tableNameClick(tableName: string) {
		this.queryBrowserTableClick.next(tableName);
	}

}
