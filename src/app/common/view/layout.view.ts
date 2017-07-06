import {ElementRef, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs/Subscription";
import {CommonView} from "./common.view";
import {LayoutService} from "../../common/service/layout.service";

export class LyaoutView extends CommonView implements OnInit, OnDestroy {

	// 공통 전체팝업 변경 알림 콜백
	public popupSubscription: Subscription;

	// 현재 페이지 ID
	public pageId: string;

	// 마지막으로 열려있던 페이지 ID
	public static pageId: string;

	// 생성자
	constructor(public element: ElementRef,
				public layoutService: LayoutService) {

		super(element);

		//////////////////////////////////////////////////
		//
		// 공통 전체팝업 관련
		//
		//////////////////////////////////////////////////

		console.info('layout.view.ts : constructor');

		// 공통 전체팝업 변경시
		this.popupSubscription = this.layoutService.popup$.subscribe(deployParam => {

			console.info('layout.view.ts : popupSubscription');
			console.info(deployParam);

			// 현재 띄워진 페이지가 아니라면
			if (deployParam['type'] == "close") {

				// View(현재 엘리먼트)를 보여준다.
				if (this.$element) {
					this.$element.show();
				}

			}

			// 공통 전체팝업 종료가 아니라면
			else if (deployParam['type'] != "close") {

				// View(현재 엘리먼트)를 숨긴다.
				if (this.$element) {
					this.$element.hide();
				}

				// 실행중지
				this.stop();
			}

		});
	}

	// 초기실행 & 실행재계
	public init(pageId: string) {

		// 하위 클래스에서 구현
		this.pageId = pageId;
		LyaoutView.pageId = pageId;
	}

	// 실행중지
	public stop() {
		// 하위 클래스에서 구현
	}

	// Init
	public ngOnInit() {

		super.ngOnInit();
	}

	// Destory
	public ngOnDestroy() {

		// 실행중지
		this.stop();

		// 옵저버 해제
		if (this.popupSubscription) {
			this.popupSubscription.unsubscribe();
		}

		super.ngOnDestroy();
	}

}
