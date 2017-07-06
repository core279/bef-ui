/**
 * Validation 처리를 위한 유틸
 */
export class Validate {

    /**
     * 파라미터가 비어있는지 여부
     * param :
     */
    public static isEmpty(param: string) {

        // 빈값체크
        let trimParam = param == undefined || param == null || (typeof param != 'number' && this.trim(param) == '');

        // 빈값일때
        if (trimParam) {

            return true;
        }
        // 빈값이 아닐때
        else {
            return false;
        }
    }

    /**
     * escape 처리
     * param : 문자열
     */
    public static escapeHtml(param: string) {

        let escapeMap = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': '&quot;',
            "'": '&#39;',
            "/": '&#x2F;'
        }

        return param.replace(/[&<>"'\/]/g, function (s) {

            return escapeMap[s];
        });
    }

    /**
     * trim 처리
     * param : 문자열
     */
    public static trim(param: string) {

        return param.trim();
    }

    /**
     * 왼쪽 trim 처리
     * param : 문자열
     */
    public static ltrim(param: string) {

        return param.replace(/^\s+/, "");
    }

    /**
     * 오른쪽 trim 처리
     * param : 문자열
     */
    public static rtrim(param: string) {

        return param.replace(/\s+$/, "");
    }

    /**
     * 영문인지 체크
     * param : 문자열
     */
    public static isEng(param: string) {

        let pattern = /([^a-z^A-Z])/i;

        // 영문일때
        if (!pattern.test(param)) {
            return true;
        }
        // 영문이 아닐때
        else {
            return false;
        }
    }

    /**
     * 숫자인지 체크
     * param : 문자열
     */
    public static isNumber(param: string) {

        let pattern = /([^0-9])/i;

        // 숫자일때
        if (!pattern.test(param)) {
            return true;
        }
        // 숫자가 아닐때
        else {
            return false;
        }
    }

    /**
     * 특수문자인지 체크
     * param : 문자열
     */
    public static isSpecialLetter(param: string) {

        let pattern = /([!@#$%^*+=()~`\{\}\[\]\;\:\'\"\,\.\/\?\<\>\|\&\\])/i;

        // 특수문자일때
        if (pattern.test(param)) {
            return true;
        }
        // 특수문자가 아닐때
        else {
            return false;
        }
    }

    /**
     * 한글인지 체크
     * param : 문자열
     */
    public static isKor(param: string) {

        let pattern = /([^가-힣ㄱ-ㅎㅏ-ㅣ\x20])/i;

        // 한글일때
        if (!pattern.test(param)) {
            return true;
        }
        // 한글이 아닐때
        else {
            return false;
        }
    }

    /**
     * 한글포함인지 체크
     * param : 문자열
     */
    public static containKor(param: string) {

        let pattern = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

        // 한글포함
        if (pattern.test(param)) {
            return true;
        }
        // 한글포함이 아닐때
        else {
            return false;
        }
    }

    /**
     * 같은 문자열 반복 체크
     * param : 문자열
     * (예 : 1111,aaaa,ccc)
     */
    public static checkSameChar(param: string) {

        let pattern = /(.)\1\1\1/;

        // 4개이상 같은문자열 반복일때
        if (pattern.test(param)) {

            return true;
        }
        // 4개이하일때
        else {
            return false;
        }
    }

    /**
     * 연속적인 문자, 숫자열 체크
     * param : 문자열
     * (예 : 1234,abcd)
     */
    public static checkConsec(param: string) {

        // 리턴값
        let result = false;

        // 반복 카운트
        let count: number = 0;

        // 문자를 character 배열로 만듬
        let charArray = Array.from(param);

        // character에서 연속적인 문자가 있는지 체크
        for (let num = 0; num < charArray.length; num++) {

            // 마지막 문자가 아닐때
            if (charArray.length - 1 != num) {

                // 같지 않다면
                if (charArray[num].charCodeAt(0) + 1 != charArray[num + 1].charCodeAt(0)) {

                    count = 0;
                }
                // 같다면
                else {
                    count++;
                }
            }

            // 연속되는 문자/숫자가 4자리이면 (3번 같으면)
            if (count >= 3) {

                result = true;
                break;
            }
        }

        return result;
    }

    /**
     * 자리수 체크
     * param      : 문자열
     * startIndex : 최소 자리수
     * endIndex   : 최대 자리수
     */
    public static checkLength(param: string, startIndex: number, endIndex: number) {

        // startIndex 부터 endIndex 사이길이의 문자일때
        if (param && param.length >= startIndex && param.length <= endIndex) {

            return true;
        }
        else {

            return false;
        }
    }

    /**
     * max 자리수 체크
     * param      : 문자열
     * index      : 최대 자리수
     */
    public static checkMaxLength(param: string, index: number) {

        // index보다 자리수가 길때
        if (param.length > index) {

            return true;
        }
        else {

            return false;
        }
    }

    /**
     * 도메인인지 체크
     * param      : 문자열
     */
    public static isDomain(param: string) {

        let pattern = /^(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;

        // 도메인인경우
        if (pattern.test(param)) {

            return true;
        }
        // 도메인이 아닌경우
        else {
            return false;
        }
    }

   /**
    * 도메인 한글 및 특수문자 포함여부 (영문자, 숫자, -, . 이외의 문자가 있는지 체크)
    * param : 문자열
    */
    public static containKorSpecDomain(param: string) {

      let pattern = /.*[ㄱ-ㅎ|ㅏ-ㅣ|가-힣+!@#$%^*+=()~`\{\}\[\]\;\:\'\"\,\_\/\?\<\>\|\&\\]/;

      // 한글 특수문자 포함하는경우
      if (pattern.test(param)) {
        return true;
      }
      // 한글 특수문자 포함하지 않는경우
      else {
        return false;
      }
    }

  /**
   * 도메인 . - 뒤에 . 이 연속으로 있는지 체크
   * param  : 문자열
   */
  public static containSubDotDomain(param: string){
    let pattern = /(\.{2,})|(\-\.+)|(\.\-+)/;

    // 특수문자 포함하는경우
    if (pattern.test(param)) {
      return true;
    }
    // 특수문자 포함하지 않는경우
    else {
      return false;
    }
  }



  /**
     * 영문 숫자, 특수 문자 포함인지 체크
     * param      : 문자열
     */
    public static checkCombineLetter(param: string) {

        let pattern = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9])/i;

        // 포함하는 경우
        if (pattern.test(param)) {
            return true;
        }
        // 포함하지 않는경우
        else {
            return false;
        }
    }

    /**
     * url 체크
     * param : 문자열
     */
    public static checkUrl(param: string) {

        let pattern = /^(mirror|http|https):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;

        // url패턴이면
        if (pattern.test(param)) {
            return true;
        }
        // url패턴이 아니면
        else {
            return false;
        }
    }

    /**
     * 메모리 사이즈체크
     * param   : 데이터 용량
     * maxSize : 최대 사이즈
     */
    public static checkMaxSize(param: number, maxSize: number) {

        // max용량을 넘을때
        if (param > maxSize) {

            return true;
        }
        // 넘지않을때
        else {
            return false;
        }
    }

    /**
     * 이메일 형식 체크
     * param : 문자열
     */
    public static isEmail(param: string) {

        let pattern = /^(\".*\"|[A-Za-z0-9_-]([A-Za-z0-9_-]|[\+\.])*)@(\[\d{1,3}(\.\d{1,3}){3}]|[A-Za-z0-9][A-Za-z0-9_-]*(\.[A-Za-z0-9][A-Za-z0-9_-]*)+)$/i;

        // 이메일 형식
        if (pattern.test(param)) {
            return true;
        }
        // 이메일 형식 아닐때
        else {
            return false;
        }
    }

    /**
     * 특수문자 포함여부 체크
     * param : 문자열
     */
    public static ContainSpeLetter(param: string) {

        let pattern = /.*[!@#$%^*+=()~`\-\_\{\}\[\]\;\:\'\"\,\.\/\?\<\>\|\&\\]/;

        // 특수문자 포함하는경우
        if (pattern.test(param)) {
            return true;
        }
        // 특수문자 포함하지 않는경우
        else {
            return false;
        }
    }

    /**
     * 한글 특수문자 포함여부 (영문자, 숫자, -, _이외의 문자가 있는지 체크)
     * param : 문자열
     */
    public static containKorSpeLetter(param: string) {

        let pattern = /.*[ㄱ-ㅎ|ㅏ-ㅣ|가-힣+!@#$%^*+=()~`\{\}\[\]\;\:\'\"\,\.\/\?\<\>\|\&\\]/;

        // 한글 특수문자 포함하는경우
        if (pattern.test(param)) {
            return true;
        }
        // 한글 특수문자 포함하지 않는경우
        else {
            return false;
        }
    }

    /**
     * 아이디용 유효성 체크
     * param : 문자열
     */
    public static containKorSpeLetterForId(param: string) {
        let pattern = /.*[ㄱ-ㅎ|ㅏ-ㅣ|가-힣+!@#$%^*+=()~`\-\_\{\}\[\]\;\:\'\"\,\/\?\<\>\|\&\\]/;

        // 한글 특수문자 포함하는경우
        if (pattern.test(param)) {
            return true;
        }
        // 한글 특수문자 포함하지 않는경우
        else {
            return false;
        }
    }

    /**
     * 문자열에 공백이 있는지 검사
     * param : 문자열
     */
    public static checkContainSpace(param: string) {

        if ( this.isEmpty( param ) ) {
            return true;
        }

        if ( param.match('\u0020') != null ) {
            return true;
        } else {
            return false;
        }
    }
}
