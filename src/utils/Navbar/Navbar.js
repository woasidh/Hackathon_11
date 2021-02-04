import React from 'react'
import './Navbar.css'

function Navbar() {

    function noAuthLeft() {
        return (
            <a href="/"><span className = "navbar__logo">알바꼼꼼</span></a>
        );
    }

    function AuthLeft() {
        return (
            <>
                <a href="/"><span className = "navbar__logo">알바꼼꼼</span></a>
                <a href="/"><span>캘린더</span></a>
                <a href="/"><span>매장 모니터링</span></a>
            </>
        );
    }

    function noAuthRight() {
        return (
            <>
                <a href="/login"><span>로그인</span></a>
                <a href="/signup"><span>회원가입</span></a>
            </>
        );
    }

    function AuthRight() {
        return (
            <>
                <a href="/mynews"><span>새소식</span></a>
                <a href="/mypage"><span>내정보</span></a>
            </>
        );
    }


    return (
        <div className="navbar">
            <div className="navbar__cnt">
                <div className="navbar__left">
                    {AuthLeft()}
                </div>
                <div className="navbar__right">
                    {AuthRight()}
                </div>
            </div>
        </div>
    )
}

export default Navbar
