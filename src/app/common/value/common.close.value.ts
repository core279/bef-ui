/**
 * 전체 팝업을 닫는 경우에 사용할 Value Object
 *
 * @field viewType: 필수 ( e.g - admin, app, project )
 * @field initFlag: 필수 ( 기본값 : true )
 * @field data: 옵션
 */
export class Close {
	viewType: string;
	initFlag: boolean = true;
	data: any = null;
}
