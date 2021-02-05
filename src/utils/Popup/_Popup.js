import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './_Popup.css'

function _Popup() {
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
                <button className="popup__alterBtn">급여 정산</button>
            </div>
        </div>
    )
}

export default _Popup
