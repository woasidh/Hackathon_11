import React, { useState } from 'react'
import './Login.css'
import Navbar from '../../utils/Navbar/Navbar'
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { loginUser } from '../../_actions/user_actions'
import  { Redirect } from 'react-router-dom'

function Login(props) {

    const dispatch = useDispatch();

    const [usrType, setusrType] = useState('employer');

    function setYeeBtn() {
        const employer = document.querySelector('button#employer');
        const employee = document.querySelector('button#employee');

        employee.classList.add('active');
        employer.classList.remove('active');
        setusrType('employee');
    }

    function setYerBtn() {
        const employer = document.querySelector('button#employer');
        const employee = document.querySelector('button#employee');

        employee.classList.remove('active');
        employer.classList.add('active');
        setusrType('employer');
    }


    function onloginBtn() {
        const id = document.querySelector('input#id').value;
        const pwd = document.querySelector('input#pwd').value;

        if (!id || !pwd) {
            alert('아이디와 비밀번호를 입력해주세요!');
        } else {

            const loginData = {
                "user_id": id,
                "user_password": pwd,
                "user_type": usrType
            }

            console.log(loginData);
            axios.post('https://alba-api.herokuapp.com//login', loginData).then(response => {
                console.log(response.data);
                if (response.data.result === 'Success') {
                    const userData = {
                        "user_id": id,
                        "user_type": usrType,
                        "token": response.data.token
                    }
                    dispatch(loginUser(userData))/* 
                    axios.get("https://alba-api.herokuapp.com/workspace/") */
                    window.location.href = "/#/main";
                } else {
                    alert('아이디와 비밀번호를 확인해주세요!');
                }
            })
        }
    }

    return (
        <div>
            <Navbar />
            <div className="login__content">
                <div className="login__title">알바꼼꼼</div>
                <div className="login__usrType">
                    <button onClick={setYerBtn} className='active' id="employer">고용주</button>
                    <button onClick={setYeeBtn} id="employee">직원</button>
                </div>
                <input type="text" id="id" name="id" placeholder="아이디" required></input>
                <input type="password" id="pwd" name="pwd" placeholder="비밀번호" required></input>
                <div className="login__help__container">
                    <div className="login__help__left">
                        <label><input type="checkbox" name="color" value="blue" /> 아이디저장</label>
                    </div>
                    <div className="login__help__right">
                        <a href="/findId">아이디</a><a href="/findPwd">/비밀번호</a>찾기
                    </div>
                </div>
                <button onClick={onloginBtn} className="loginBtn">로그인</button>
            </div>
        </div>
    )
}

export default Login
