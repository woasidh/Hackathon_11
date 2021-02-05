import React from 'react'
import './index.css'
import LandingImg from '../../img/LandingImg.jpg'
import LandingS1 from "../../img/LandingS1.png";
import LandingS2 from "../../img/LandingS2.png";
import LandingS3 from "../../img/LandingS3.png";

function index() {
    return (
        <div>
            <div className="landing__content">
                <div className="landing__left">
                    <div className="landing__left__title">
                        알바꼼꼼
                    </div>
                    <div className="landing__left__desc">
                    알바꼼꼼은 직원/알바 급여 정산 및 일정관리를 도와주는 플랫폼입니다. 
                    출퇴근 확인, 근무 시간 조정, 매장 관리 및 급여 정산 등의 기능을 직관적인 캘린더 UI를 통해 편리하게 이용할 수 있습니다.                    
                    </div>
                    <div className="landing__left__authBtn">
                    <a href = "/#/signup"className="landing__left__signupBtn">
                        가입하기
                    </a>
                    <a href = "/#/login"className="landing__left__loginBtn">
                        로그인하기
                    </a>
                    </div>
                    <div className="landing__left__circleCnt">
                        <div className="landing__left__c1">
                            <img src= {LandingS1} alt="landingSmall1"/>
                        </div>
                        <div className="landing__left__c2">
                            <img src= {LandingS2} alt="landingSmall2"/>
                        </div>
                        <div className="landing__left__c3">
                            <img src= {LandingS3} alt="landingSmall3"/>
                        </div>
                    </div>
                    <div className="landing__left__moreInfo">
                        직원들과 원활한 소통이<br/> 가능합니다
                    </div>
                </div>
                <div className="landing__right">
                </div>
            </div>
        </div>
    )
}

export default index
