/**
 * 문자 관련 유틸
 */
export class StringUtil {
    
    /**
     * 파라미터 자리수 만큼의 난수를 생성한다. 
     */
    public static random(length: number) {
     
        let str: string = "";
	
        let randomStr: string = 
                "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"
                + ",1,2,3,4,5,6,7,8,9,0";		
        
        let chars: string[] = randomStr.split(",");
        let randomIndex: number = 0;
        
        for (let i: number=0 ; i<length ; i++)
        {
            // 랜덤 인덱스를 구하고
            randomIndex = Math.floor(Math.random() * chars.length);
            
            // 인덱스에 해당하는 문자를 추가한다.
            str += chars[randomIndex];
        }
        
        return str;
    }
}