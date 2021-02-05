import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { useSelector } from "react-redux";


function Navbar() {

    const [isAuth, setisAuth] = useState(0);
    const userinfo = useSelector(state => state.user.userinfo);

    useEffect(() => {
        if (userinfo) {
            setisAuth(1);
        } else {
            setisAuth(0);
        }
    })

    function noAuthLeft() {
        return (
            <a href="/"><span className="navbar__logo">알바꼼꼼</span></a>
        );
    }

    function AuthLeft() {
        return (
            <>
                <a href="/"><span className="navbar__logo">알바꼼꼼</span></a>
            </>
        );
    }

    function noAuthRight() {
        return (
            <>
                <a href="/#/login"><span>로그인</span></a>
                <a href="/#/signup"><span>회원가입</span></a>
            </>
        );
    }

    function AuthRight() {
        return (
            <>
                {/* <button className = "logoutBtn"> */}<a href="/logout"><span>로그아웃</span></a>{/* </button> */}
                <a href="/mypage"><span>내정보</span></a>
            </>
        );
    }


    return (
        <div className="navbar">
            <div className="navbar__cnt">
                <div className="navbar__left">
                    {isAuth ? AuthLeft() : noAuthLeft()}
                </div>
                <div className="navbar__right">
                    {isAuth ? AuthRight() : noAuthRight()}
                </div>
            </div>
        </div>
    )
}

export default Navbar
