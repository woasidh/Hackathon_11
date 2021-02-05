import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useSelector } from "react-redux";
import './_Popup.css'

function _Popup() {


    const [opened, setopened] = useState(false);
    const token = useSelector(state => state.user.userinfo && state.user.userinfo.token);

    function getCode() {

        let result =[];

        const payload = {
            "token": token,
            "workplace_id": "1",
            "employee_id": "test1"
        }

        console.log(payload);

        axios.post('https://alba-api.herokuapp.com/pay', payload).then(response => {
            if (response.request.status === 200) {
                if (response.data.result === 'Success') {
                    result = response.data.data;
                    console.log('success');
                } else {
                    console.log('fail');
                }
            } else {
                console.log('fail1');
                return;
            }
        })

        console.log(result);

        return (
            <>
                <ul className="pay__contents">
                    <li className="pay__content">
                        <div className="pay__content__date">1.18</div>
                        <div className="pay__content__time">9:00 - 13:00 (4시간)</div>
                        <div className="pay__content__cost">35000원</div>
                    </li>
                    <li className="pay__content">
                        <div className="pay__content__date">1.18</div>
                        <div className="pay__content__time">9:00 - 13:00 (4시간)</div>
                        <div className="pay__content__cost">35000원</div>
                    </li>
                    <li className="pay__content">
                        <div className="pay__content__date">1.18</div>
                        <div className="pay__content__time">9:00 - 13:00 (4시간)</div>
                        <div className="pay__content__cost">35000원</div>
                    </li>
                    <li className="pay__content">
                        <div className="pay__content__date">1.18</div>
                        <div className="pay__content__time">9:00 - 13:00 (4시간)</div>
                        <div className="pay__content__cost">35000원</div>
                    </li>
                    <li className="pay__content">
                        <div className="pay__content__date">1.18</div>
                        <div className="pay__content__time">9:00 - 13:00 (4시간)</div>
                        <div className="pay__content__cost">35000원</div>
                    </li>
                    <li className="pay__content">
                        <div className="pay__content__date">1.18</div>
                        <div className="pay__content__time">9:00 - 13:00 (4시간)</div>
                        <div className="pay__content__cost">35000원</div>
                    </li>
                    <li className="pay__content">
                        <div className="pay__content__date">1.18</div>
                        <div className="pay__content__time">9:00 - 13:00 (4시간)</div>
                        <div className="pay__content__cost">35000원</div>
                    </li>
                    <li className="pay__content">
                        <div className="pay__content__date">1.18</div>
                        <div className="pay__content__time">9:00 - 13:00 (4시간)</div>
                        <div className="pay__content__cost">35000원</div>
                    </li>
                    <li className="pay__content">
                        <div className="pay__content__date">1.18</div>
                        <div className="pay__content__time">9:00 - 13:00 (4시간)</div>
                        <div className="pay__content__cost">35000원</div>
                    </li>
                    <li className="pay__content">
                        <div className="pay__content__date">1.18</div>
                        <div className="pay__content__time">9:00 - 13:00 (4시간)</div>
                        <div className="pay__content__cost">35000원</div>
                    </li>
                </ul>
                <div className="pay__all__title">급여</div>
                <div className="pay__all__content">
                    <div className="pay__all__org">시급 8750원 X (근무시간:72시간)</div>
                    <div className="pay__incent">
                        +81070원(인센티브)
                            <div className="pay__all__total">= 월 711070원</div>
                    </div>
                </div>
            </>
        );
    }


    return (
        <div className="popupContainer">
            <div className="popup__title">근무자 프로필</div>
            <div className="popup__profile">
                <div className="popup__avatar"></div>
                <div className="popup__name">리암니슨</div>
            </div>
            <div className="popup__workInfo">
                <span>근무일/시간</span>
                <ul className="popup__workContainer">
                    <li>월) 오전근무 09:00 ~ 13:00</li>
                    <li>월) 오전근무 09:00 ~ 13:00</li>
                    <li>월) 오전근무 09:00 ~ 13:00</li>
                </ul>
            </div>
            <div className="popup__payInfo">
                <span>급여</span>
                <ul className="popup__payContainer">
                    <li>시급 8750원</li>
                    <li>세금x</li>
                </ul>
            </div>
            <div className="popup__buttoncontainer">

                <button onClick={() => {
                    setopened(true)
                }} className="popup__alterBtn">급여 조정</button>
                <Popup
                    open={opened}
                    overlayStyle={{ background: "rgba(0, 0, 0, 0)" }}
                    contentStyle={{ background: "white", width: "400px", height: "500px", border: "1px solid #ddd", padding: "10px 20px", borderRadius: "10px" }}
                    modal>
                    <div className="payContainer">
                        <div className="pay__title">근무 정보</div>
                        <div className="pay__profile">
                            <div className="pay__avatar"></div>
                            <div className="pay__name">리암니슨</div>
                        </div>
                        <div className="pay__desc">근무일/시간</div>
                        <div className="pay_types">
                            <button>시급계산</button>
                            <button>인센티브</button>
                        </div>
                        {getCode()}
                    </div>
                </Popup>

                <button className="popup__alterBtn">급여 정산</button>

            </div>
        </div>
    )
}

export default _Popup
