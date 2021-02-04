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
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium saepe quibusdam sint delectus sunt quis odit tempora blanditiis culpa corporis ut, facilis, at debitis quidem provident asperiores, accusantium expedita quod!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium saepe quibusdam sint delectus sunt quis odit tempora blanditiis culpa corporis ut, facilis, at debitis quidem provident asperiores, accusantium expedita quod!
                    </div>
                    <div className="landing__left__authBtn">
                    <button className="landing__left__signupBtn">
                        가입하기
                    </button>
                    <button className="landing__left__signupBtn">
                        로그인하기
                    </button>
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
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, molestiae doloribus laboriosam sit iste ratione eaque ducimus laborum aliquid, vitae repellat modi ad veniam! Quasi molestias tenetur ratione ea praesentium.
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
