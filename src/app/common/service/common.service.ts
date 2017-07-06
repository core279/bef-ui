import {Http, Headers, Response, RequestOptions} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {Alert} from "../util/alert.util";
import set = Reflect.set;
import {Message} from "../util/message.util";

// API 경로
declare var _api:string;

// API 경로
declare var _apiFull: string;

// base 경로
declare var _ctx:string;

export class CommonService{

    // Timeout 시간
    public TIMEOUT: number   = 5000;

    // API 경로
    public API: string       = _api;

    // API 경로 ( ex: http://localhost:8080/api
    public api: string       = _apiFull;



    // 생성자
   constructor ( public http: Http) {}

    // Get 호출
    public get(url: string) {
      console.info("get>>>>>>>>>>>>: " + url);
        // 호출
        return this.http.get(url)
                        .toPromise()
                        .then(this.errorCheck)
                        .catch(this.errorHandler);
    }

    // Post 호출
    public post(url: string, data: any) {
      console.info("post>>>>>>>>>>>>: " + url);
        // 헤더
        let headers = new Headers({'Content-Type': 'application/json'});

        // 호출
        return this.http.post(url, JSON.stringify(data), {headers: headers})
                        .toPromise()
                        .then(this.errorCheck)
                        .catch(this.errorHandler);
    }

    // Put 호출
    public put(url: string, data: any) {
      console.info("put>>>>>>>>>>>>: " + url);
        // 헤더
        let headers = new Headers({'Content-Type': 'application/json'});

        // 호출
        return this.http.put(url, JSON.stringify(data), {headers: headers})
                        .toPromise()
                        .then(this.errorCheck)
                        .catch(this.errorHandler);
    }

    // Delete 호출
    public delete(url: string) {
      console.info("delete>>>>>>>>>>>>: " + url);
        // 호출
        return this.http.delete(url)
                        .toPromise()
                        .then(this.errorCheckNoReturn)
                        .catch(this.errorHandler);
    }

    // Delete 호출
    public deleteBody(url: string, data: any = null) {

      let headers = new Headers({'Content-Type': 'application/json'});

      let options = new RequestOptions(Object.assign({
        headers: headers,
        body: data
      }));

      return this.http.delete(url, options)
                 .toPromise()
                 .then(this.errorCheck)
                 .catch(this.errorHandler);
    }

    public multipartPost(url: string, formData: FormData){

      console.info("multipartPost>>>>>>>>>>>>: " + url);
      let headers = new Headers();
      //headers.append('Content-Type', 'multipart/form-data');
      //headers.append('Accept', '*/*');

      let options = new RequestOptions({ headers: headers });

      // 호출
      return this.http.post(url, formData, options)
        .toPromise()
        .then(this.errorCheck)
        .catch(this.errorHandler);

    }

    // 에러 체크
    public errorCheck(response: Response) {


        if( response.status >= 200 && response.status < 300 ){

            // 결과값 Text
            let responseText: string    = response.text();

             // 결과값이 존재한다면
             if( responseText && responseText != "" ){

                 // json을 string으로 변환
                 //let _message = JSON.parse(responseText).message;
                 let _code = JSON.parse(responseText).code;
                 // 메세지가 login인경우 리다이렉트
                 let redirectFl:boolean = false;

                 if(_code){
                   if( _code == '0002' ){
                     redirectFl = true;
                   }
                 }

                 // true인 경우
                 if ( redirectFl ){
                    Alert.info(Message.get('common.end.session'));
                    setTimeout(t=>{
                      // 로그인 페이지로 이동
                      window.location.href =  _ctx + 'user/login';
                    }, 3000)

                 }
                 // false인 경우 json return
                 else{

                     // 반환
                     return response.json();
                 }
             }
        }

        // 에러 발생
        throw new Error(response.json().message);

//        // 코드값이 있다면 에러로 간주
//        if( response.json()._code && response.json()._code != '0000' ){
//
//            // 에러 발생
//            throw new Error(response.json()._message);
//        }
//        else{
//
//            // 결과값 리턴
//            return response.json();
//        }
    }

    // 리턴없는 에러 체크
    public errorCheckNoReturn(response: Response) {

        // HTTP Status가 200 ~ 300 미만이라면 성공으로 간주
        if( response.status >= 200 && response.status < 300 ){

            // 결과값 Text
            let responseText: string    = response.text();

            // 결과값이 존재한다면
            if( responseText && responseText != "" ){

                // 반환
                return response.json();
            }

            // 없다면 끝!
            return;
        }

        // 에러 발생
        throw new Error(response.json().message);

//        // 코드값이 있다면 에러로 간주
//        if( response.status == 200 && response.json()._code && response.json()._code != '0000' ){
//
//            // 에러 발생
//            throw new Error(response.json()._message);
//        }
    }

    // 에러 핸들러
    public errorHandler(error: any) {

        let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.info(errMsg);

        if( errMsg == "Server error" ){

            Alert.error(Message.get('common.server.error'));
        }
        else{

            //Alert.warning(errMsg);
        }

        return Promise.reject(error.message || error);
    }
}
