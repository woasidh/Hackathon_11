import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './_Popup.css'

function _Popup() {
    return (
        <div className="popupContainer">
            <div className="popup__title">
                근무자 프로필
            </div>
            <div className="popup__content">
                <div className="popup__left">
                    <div className="popup__left__profile">
                        <div className="popup__leftcircle"></div>
                        <div className="popup__centerec"></div>
                        <div className="popup__rightcircle"></div>
                        <div className="popup__profile__avatar"></div>
                        <div className="popup__profile__content">
                            <div className="popup__profile__name">알바1</div>
                            <div className="popup__profile__desc">24세 (여) 근무시작일 20.08.17</div>
                        </div>
                    </div>
                    <div className="popup__left__badjes">
                        <div className="popup__badjes__bar">
                            <span>배지</span>
                            <div className="popup__badjes__more">
                                <span>더보기</span>
                                <i className="fas fa-angle-right"></i>
                            </div>
                        </div>
                        <div className="popup__badjes__content">
                            <div className="popup__badje">
                                <div className="popup__badge__img"></div>
                                <div className="popup__badge__name">개근상</div>
                            </div>
                            <div className="popup__badje">
                                <div className="popup__badge__img"></div>
                                <div className="popup__badge__name">개근상</div>
                            </div>
                            <div className="popup__badje">
                                <div className="popup__badge__img"></div>
                                <div className="popup__badge__name">개근상</div>
                            </div>
                        </div>
                    </div>
                    <div className="popup__evals">
                        <div className="popup__evals__bar">
                            <span>동료평가</span>
                            <div className="popup__evals__more">
                                <span>더보기</span>
                                <i className="fas fa-angle-right"></i>
                            </div>
                        </div>
                        <div className="popup__evals__content">
                            <div className="popup__eval">
                                <div className="popup__evalFrom"></div>
                                <div className="popup__evalDesc">같이 일하면 즐겁습니다.</div>
                            </div>
                            <div className="popup__eval">
                                <div className="popup__evalFrom"></div>
                                <div className="popup__evalDesc">같이 일하면 즐겁습니다.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="popup__right">
                    <span>근무일/시간</span>
                    <div className="popup__workday__contents">
                        <div className="popup__workday__content">월) 오전근무_09:00 ~ 13:00</div>
                        <div className="popup__workday__content">월) 오전근무_09:00 ~ 13:00</div>
                        <div className="popup__workday__content">월) 오전근무_09:00 ~ 13:00</div>
                    </div>
                    <div className="popup__incentive">
                        <span>쌓인 인센티브</span>
                        <div className="popup__incentive__contents">
                            <div className="popup__incentive__content">1.27)13:00 ~ 14:30 +3400원</div>
                            <div className="popup__incentive__content">1.27)13:00 ~ 14:30 +3400원</div>
                        </div>
                    </div>
                    <div className="popup__Btns">
                        <button>칭찬하기</button>
                        <button>급여 조정</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default _Popup
