import { Result }       from '../../common/value/common.result';

export class UserVO extends Result {
    id                  : string;
    password            : string;
}


export class UserResultVO extends Result{
  public data   : UserVO;
}
