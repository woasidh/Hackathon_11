import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useSelector } from "react-redux";
import './_Popup.css'
import styled from "styled-components";
import avatar1 from '../../img/person1.jpg'
import avatar2 from '../../img/person2.jpg'
import avatar3 from '../../img/person3.jpg'

const X = styled.div`
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 2.5em;
    color: lightgray;
`;

function _Popup(props) {

    const [opened, setopened] = useState(false);
    const [arr, setarr] = useState([]);

    const token = useSelector(state => state.user.userinfo && state.user.userinfo.token);

    useEffect(() => {

        const payload = {
            "token": token,
            "workplace_id": "1",
            "employee_id": props.workerId.employee_id,
            "year": "2021",
            "month": "2"
        }

        axios.post('https://alba-api.herokuapp.com/pay', payload).then(response => {
            if (response.request.status === 200) {
                if (response.data.result === 'Success') {
                    console.log(response.data.data);
                    setarr(response.data.data);
                } else {
                    console.log('fail');
                }
            } else {
                console.log('fail');
            }
        })
    }, [])

    const getCode = () => {


        let resultCode = [];
        arr.forEach((data, index) => {

            const date = data.date;
            const dateArr = date.split('-');

            const end = data.end_time;
            const endArr = end.split(':');

            const start = data.start_time;
            const startArr = start.split(':');

            resultCode.push(
                <li className="pay__content">
                    <div className="pay__content__date">{dateArr[1]}.{dateArr[2]}</div>
                    <div className="pay__content__time">{startArr[0]}:00 - {endArr[0]}:00 ({endArr[0] - startArr[0]}시간)</div>
                    <div className="pay__content__cost">{8720 * (endArr[0] - startArr[0])}원</div>
                </li>
            )
        })
        return (resultCode);
    }

    const getCode2 = () => {

        let resultCode = [];
        let hour = 0;
        arr.forEach((data, index) => {
            const end = data.end_time;
            const endArr = end.split(':');

            const start = data.start_time;
            const startArr = start.split(':');
            const plusHour = endArr[0] - startArr[0];
            hour = hour + plusHour
        })
        return (
            <>
                <div className="pay__all__org">시급 8750원 X (근무시간:{hour}시간) = {8750 * hour}원</div>
                <div className="pay__incent">
                    +12000원(인센티브)
            <div className="pay__all__total">= 월 {8750 * hour + 12000}원</div>
                </div>
            </>
        );
    }

    const getAvatar = () => {
        console.log(props.workerId);
        if (props.workerId.employee_id == 'test1') {
            return (
                <>
                    <div style={{ backgroundImage: `url(${avatar1})` }}
                        className="popup__avatar"></div>
                    <div className="popup__name">{props.workerId.name}</div>
                </>
            );
        } else if (props.workerId.employee_id == 'test2') {
            return (
                <>
                    <div style={{ backgroundImage: `url(${avatar2})` }}
                        className="popup__avatar"></div>
                    <div className="popup__name">{props.workerId.name}</div>
                </>
            );
        } else {
            return (
                <>
                    <div style={{ backgroundImage: `url(${avatar3})` }}
                        className="popup__avatar"></div>
                    <div className="popup__name">{props.workerId.name}</div>
                </>
            );
        }
    }

    const getAvatar2 = () => {
        if (props.workerId.employee_id == 'test1') {
            return (
                <>
                    <div style={{ backgroundImage: `url(${avatar1})` }}
                        className="pay__avatar"></div>
                    <div className="pay__name">{props.workerId.name}</div>
                </>
            );
        } else if (props.workerId.employee_id == 'test2') {
            return (
                <>
                    <div style={{ backgroundImage: `url(${avatar2})` }}
                        className="pay__avatar"></div>
                    <div className="pay__name">{props.workerId.name}</div>
                </>
            );
        } else {
            return (
                <>
                    <div style={{ backgroundImage: `url(${avatar3})` }}
                        className="pay__avatar"></div>
                    <div className="pay__name">{props.workerId.name}</div>
                </>
            );
        }
    }

    const getSchedule = () => {
        if (props.workerId.employee_id == 'test1') {
            return (
                <>
                    <li>- 월 오전근무 09:00 ~ 13:00</li>
                    <li>- 수 오전근무 09:00 ~ 13:00</li>
                    <li>- 금 오전근무 09:00 ~ 13:00</li>
                </>
            );
        } else if (props.workerId.employee_id == 'test2') {
            return (
                <>
                    <li>- 화 오전근무 09:00 ~ 13:00</li>
                    <li>- 목 오전근무 09:00 ~ 13:00</li>
                </>
            );
        } else {
            return (
                <>
                    <li>- 토 오전근무 09:00 ~ 13:00</li>
                    <li>- 일 오전근무 09:00 ~ 13:00</li>
                </>
            );
        }
    }



    return (
        <div className="popupContainer">
            <div className="popup__title">근무자 프로필</div>
            <div className="popup__profile">
                {getAvatar()}
            </div>
            <div className="popup__workInfo">
                <span>근무일/시간</span>
                <ul className="popup__workContainer">
                    {getSchedule()}
                </ul>
            </div>
            <div className="popup__payInfo">
                <span>급여</span>
                <ul className="popup__payContainer">
                    <li>- 시급 8750원</li>
                    <li>- 세금x</li>
                </ul>
            </div>
            <div className="popup__buttoncontainer">

                <button onClick={() => {
                    setopened(true)
                }} className="popup__alterBtn">급여 정산</button>
                <Popup
                    open={opened}
                    overlayStyle={{ background: "rgba(0, 0, 0, 0)" }}
                    contentStyle={{ background: "white", width: "400px", height: "500px", border: "1px solid #ddd", padding: "10px 20px", borderRadius: "10px" }}
                    modal={true}>
                    {close => (
                        <>
                            <X onClick={close}>&times; </X>
                            <div className="payContainer">
                                <div className="pay__title">근무 정보</div>
                                <div className="pay__profile">
                                    {getAvatar2()}
                                </div>
                                <div className="pay__desc">근무일/시간</div>
                                <div className="pay_types">
                                    <button>시급계산</button>
                                    <button>인센티브</button>
                                </div>
                                <ul className="pay__contents">
                                    {getCode()}
                                </ul>
                                <div className="pay__all__title">급여</div>
                                <div className="pay__all__content">
                                    {getCode2()}
                                </div>
                            </div>
                        </>
                    )}
                </Popup>

            </div>
        </div>
    )
}

export default _Popup
