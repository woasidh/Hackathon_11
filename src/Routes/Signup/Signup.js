import React, { useState } from 'react'
import './Signup.css'
import Navbar from '../../utils/Navbar/Navbar'
import axios from 'axios';

function Signup(props) {


    const [usrType, setusrType] = useState('employer');

    function employeeBtn() {
        const employeeBtn = document.querySelector('.signup__usrType#employee');
        const employerBtn = document.querySelector('.signup__usrType#employer');
        employerBtn.classList.remove('active');
        employeeBtn.classList.add('active');
        setusrType('employee')
    }

    function employerBtn() {
        const employeeBtn = document.querySelector('.signup__usrType#employee');
        const employerBtn = document.querySelector('.signup__usrType#employer');
        employerBtn.classList.add('active');
        employeeBtn.classList.remove('active');
        setusrType('employer')
    }

    //submit to Server
    function onSgnBtn() {
        const id = document.querySelector('input#id').value;
        const pwd = document.querySelector('input#pwd').value;
        const pwdRe = document.querySelector('input#pwdRe').value;
        const name = document.querySelector('input#name').value;

        if (!id || !pwd || !name) {
            alert('모든 양식을 입력해주세요!');
            return;
        } else {
            if (pwd !== pwdRe) {
                alert('비밀번호가 일치하는 지 확인해주세요!');
                return;
            } else {
                const payload = {
                    "user_id": id,
                    "user_password": pwd,
                    "user_name": name,
                    "user_type": usrType
                }
                console.log(payload);
                axios.post('https://alba-api.herokuapp.com/register', payload).then(
                    response => {
                        if (response.request.status == 200) {
                            if (response.data.result === 'success') {
                                alert('회원가입에 성공하였습니다!');
                                props.history.push("/");
                            } else {
                                alert('회원가입에 실패하였습니다!');
                                console.log('failed');
                            }
                        } else {
                            alert('중복확인을 해주세요!');
                        }
                    }
                )
            }
        }
    }

    function checkIdBtn() {
        const id = document.querySelector('input#id').value;
        if (!id) {
            alert('아이디를 입력해주세요!');
        } else {

            const data = {
                "user_id": id,
                "user_type": usrType
            }
            console.log(data);
            axios.post('https://alba-api.herokuapp.com/register/check', data).then(response => {
                if (response.request.status == 200) {
                    if (response.data.result === 'yes') {
                        alert('사용가능한 아이디입니다!');
                    } else {
                        alert('사용불가능한 아이디입니다!');
                    }
                } else {
                    alert('오류가 발생하였습니다');
                }
                console.log(response.data.result);
            })
        }
    }

    return (
        <div>
            <Navbar />
            <div className="signup__content">
                <div className="signup__title">알바꼼꼼</div>
                <div className="signup__desc">필수 정보를 입력해주세요</div>
                <div className="signup__idCtn">
                    <input type="text" id="id" name="id" placeholder="아이디" required></input>
                    <button onClick={checkIdBtn}>중복확인</button>
                </div>
                <input type="password" id="pwd" name="pwd" placeholder="비밀번호" required></input>
                <input type="password" id="pwdRe" name="pwdRe" placeholder="비밀번호 재확인" required></input>
                <input type="text" id="name" name="name" placeholder="이름" required></input>
                <div className="signup__usrTypeCnt">
                    <button onClick={employerBtn} className="signup__usrType active" id="employer">고용주</button>
                    <button onClick={employeeBtn} className="signup__usrType" id="employee">직원</button>
                </div>
                <button onClick={onSgnBtn} className="signupBtn">가입하기</button>
            </div>
        </div>
    )
}

export default Signup
