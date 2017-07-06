import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { CommonView }                         from '../../common/view/common.view';
import { NumberUtil }                         from '../../common/util/number.util';
import { Router }                             from '@angular/router';
import {Validate} from "../../common/util/validate.util";
import {UserVO} from "../value/user.value";



@Component({
  selector    : 'front-login',
  templateUrl : 'front.login.view.html'
})
export class FrontLoginView extends CommonView implements OnInit, OnDestroy{

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
   | public Variables
   |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

    public userVO:UserVO = new UserVO();
    public isRemember:boolean = false;

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
   | Constructor
   |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  // 생성자
  constructor(
    public router: Router,
    public element: ElementRef ) {

    // CommonComponent 상속시 반드시 넣을것!
    super(element);

    this.userVO.id= "admin";
    this.userVO.password = "test1234";

  }

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
   | Override Method
   |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  // Init
  public ngOnInit() {

    this.loadingHide();
  }

  // Destory
  public ngOnDestroy() {

  }

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
   | Public Method
   |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  // 로그인
  public login(){


    //1.validate
    if(Validate.isEmpty(this.userVO.id)){
      this.alert.info(this.message.get('login.id.empty'));
      return false;
    }
    if(Validate.isEmpty(this.userVO.password)){
      this.alert.info(this.message.get('login.password.empty'));
      return false;
    }


    // 로딩
    this.loadingShow();

    setTimeout(t =>{
      this.loadingHide();
      this.router.navigate(['main']);
    },1500);


  }


  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
   | public Method
   |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
   | public Method
   |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/
}
