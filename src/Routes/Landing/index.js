import React from 'react'
import styled from "styled-components";
import './index.css'
import LandingImg from '../../img/LandingImg.jpg'
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
                        </div>
                        <div className="landing__left__c2">
                        </div>
                        <div className="landing__left__c3">
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
