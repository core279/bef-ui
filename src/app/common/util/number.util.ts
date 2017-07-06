/**
 * 숫자 관련 유틸
 */
export class NumberUtil {
    
    /**
     * Min ~ Max 사이의 랜덤값을 반환한다.
     */
    public static random(min: number, max: number) {
     
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}