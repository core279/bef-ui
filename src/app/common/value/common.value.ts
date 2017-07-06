/**
 * 공통 VO
 */

export class AbstractValue{
  // 등록자 ID
  createdBy       : string;
  // 등록자 이름
  createdName     : string;
  // 등록 일
  createdDate     : string;
  // 등록 시간
  createdDateTime : string;

  createdDateStr  : string;

  // 수정자 ID
  updatedBy       : string;
  // 수정자 이름
  updatedName     : string;
  // 수정자 시간
  updatedDate     : string;
  updatedDateStr  : string;
  // link 목록
  //_links          : any;
  // 조직 ID
  //orgId           : string;
  // 프로젝트 ID
  //projectId       : string;
}
