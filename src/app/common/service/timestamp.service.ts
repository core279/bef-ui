import { Injectable }                   from '@angular/core';
import { Http, Headers, Response }      from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { CommonService }                from './common.service';

// API 경로
declare var _api:string;

@Injectable()
export class TimestampService extends CommonService {

    // 생성자
    constructor (http: Http) {

        super(http);
    }

    // favorite 관련 서비스 URL
    public URL_TIMESTAMP: string         = this.API +'timestamp';

    public getTimestamp(){
        return this.get( this.URL_TIMESTAMP );
    }

}
