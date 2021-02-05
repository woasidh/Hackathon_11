import React from 'react'
import styled from "styled-components";
import './index.css'
import LandingImg from '../../img/LandingImg.jpg'
import LandingS1 from "../../img/LandingS1.png";
import LandingS2 from "../../img/LandingS2.png";
import LandingS3 from "../../img/LandingS3.png";
import Navbar from '../../utils/Navbar/Navbar'

function index() {
    return (
        <div>
            <Navbar/>
            <div className="landing__content">
                <div className="landing__left">
                    <div className="landing__left__title">
                        알바꼼꼼
                    </div>
                    <div className="landing__left__desc">
                    직원/알바 급여 자동 정산 및 매장 일정 관리 플랫폼
                    <br/>
                    고용주는 알바생들의 급여 및 매장 현재 상황을 한눈에 확인할 수 있습니다.
                    알바생들은 손쉽게 대타를 구하고, 자신의 아르바이트 스케줄을 관리할 수 있습니다.
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
                    <img src= {LandingImg} alt="landingImg"/>
                </div>
            </div>
        </div>
    )
}

export default index
