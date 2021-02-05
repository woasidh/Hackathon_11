import React, { useEffect, useState } from "react";
import styled from "styled-components";
import './ChatPresenter.css'

const Wrapper = styled.div`
    padding: 15px;
`;

const Title = styled.div`
    padding: 20px;
    font-size: 1.2em;
    text-align: center;
    border-bottom: 1px solid #ddd;
    color: #444444;
`;

const Bottom = styled.div`
    padding: 5px;
    overflow-y: auto;
    min-height: 300px;
`;

const Worker = styled.div`
    display: flex;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    align-items: center;
`;

const Img = styled.div`
    background: #F5D11F;
    border-radius: 70px;
    width: 50px;
    height: 50px;
    margin-right: 10px;
    text-align: center;
    line-height: 3;
    color: white;
    margin-right: 10px;
`;

const Name = styled.div`
    font-weight: 700;
`;

const IsChecked = styled.div`
    font-size: 0.85em;
    color: green;
    padding-left: 5px;
`;

const ButtonContainer = styled.div`
    text-align: right;
    display: flex;
    justify-content: flex-end;
`;

const Time = styled.div`
    font-size: 0.85em;
    padding: 0px 5px;
`;

const RoundButton = styled.div`
    color: white;
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 3.5;
    border-radius: 100px;
    font-size: 0.85em;
    margin-left: 10px;
    cursor: pointer;
`;

const Button = styled.div`
    color: white;
    padding: 10px 20px;
    text-align: center;
    border-radius: 20px;
    font-size: 0.85em;
    cursor: pointer;
    background: #F5D11F;
    margin-left: 80px;
`;

const Graph = styled.div`
    background: green;
    width: 100%;
    height: 200px;
`;

const Working = styled.div``;

const Current = styled.div``;

const Text = styled.div`
    padding: 10px 0px;
`;

const Person = styled.div``;

const Substitute = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding: 10px 5px 10px 5px;
`;

const List = styled.div`

`;


export default ({ type, year, month, day, workers, events, onClickButton, userType, substitute }) => {

    const [counter, setcounter] = useState(0);

    const capArr = [0.7, 1.6, 1.8, 2.0, 0.3, 0.4, 0.4, 0.5, 1.8];
    const workerArr = [['알바생1', '알바생2'], ['알바생1', '알바생2'], ['알바생1', '알바생2'], ['알바생1', '알바생2'], ['알바생1', '알바생3'],
    ['알바생1', '알바생3'], ['알바생1', '알바생3'], ['알바생1', '알바생3'], ['알바생1', '알바생3']];
    const incentArr = [0, 1870, 1970, 2050, 0, 0, 0, 0, 1970];
    const moreArr = [0, 1, 1, 1, 0, 0, 0, 0, 1];


    useEffect(() => {

        const liElm = document.querySelectorAll('li.monitor__clock');
        liElm.forEach((li, index) => {
            li.addEventListener('click', (e) => {
                setcounter(index);
                console.log(index);
            })
        })
    })

    function genSpan() {

        const curArr = workerArr[counter];
        const getCode = [];
        curArr.forEach((name, index)=>{
            getCode.push(<span>{name}</span>);
        })
        return (
            getCode
        ); 
    }
    function generateContent() {

        console.log(counter);

        return (
            <div className="monitoring__desc">
                <div className="monitor__row">
                    <div className="monitor_col1">혼잡도</div>
                    <div className="monitor_col2">{capArr[counter]}</div>
                </div>
                <div className="monitor__row">
                    <div className="monitor_col1">근무중</div>
                    <div className="monitor_col2">
                        {genSpan()}
                    </div>
                </div>
                <div className="monitor__row">
                    <div className="monitor_col1">인센티브</div>
                    <div className="monitor_col2">{incentArr[counter]}원/시간</div>
                </div>
                <div className="monitor__row">
                    <div className="monitor_col1">추가인원</div>
                    <div className="monitor_col2">{moreArr[counter]}명 필요</div>
                </div>
            </div>
        );
    }

    return (
        <>
            {year === "" && (
                <div style={{ fontSize: "1.2em", color: "#aaaaaa", paddingTop: "30px", textAlign: "center" }}>날짜를 선택해 주세요.</div>
            )}
            {year !== "" && (
                <Wrapper>
                    <Title>
                        {month}월 {day}일 {type}
                    </Title>
                    {type === "출근/퇴근" && (
                        <>
                            <Bottom>
                                { events.map(({ name, realName, time, isChecked }) => (
                                    <Worker>
                                        <Img>{realName[0]}</Img>
                                        <Name>{realName}</Name>
                                        <Time>{time}</Time>
                                        {isChecked === 0 && (
                                            <IsChecked style={{color: "lightGray"}}>출근 예정</IsChecked>
                                        )}
                                        {isChecked === 1 && (
                                            <IsChecked style={{color: "green"}}>출근</IsChecked>
                                        )}
                                        {isChecked === 2 && (
                                            <IsChecked style={{color: "red"}}>퇴근</IsChecked>
                                        )}
                                    </Worker>
                                ))}
                            </Bottom>
                            {userType === "employee" && (
                                <ButtonContainer>
                                    <RoundButton onClick={onClickButton} id="출근" style={{ background: "#e26262", boxShadow: "2px 2px 2px #aaa" }}>출근</RoundButton>
                                    <RoundButton onClick={onClickButton} id="퇴근" style={{ background: "#50c878", boxShadow: "2px 2px 2px #aaa" }}>퇴근</RoundButton>
                                </ButtonContainer>
                            )}
                        </>
                    )}
                    {type === "대타" && (
                        <>
                        <Bottom>
                            <List>
                                {substitute.map(({employee_id, name, time, workplace_id, id, is_checked}) => (
                                    <>
                                    {is_checked === 1 && (
                                        <Substitute style={{display: "flex", justifyContent:"space-between"}}>
                                            <div style={{display: "flex", alignItems: "center"}}>
                                                <Img>{name[0]}</Img>
                                                <Name>{name}</Name>
                                                <Time>{time}</Time>
                                            </div>
                                            <div style={{color: "#aaa", fontSize: "0.85em"}}>변경 완료</div>
                                        </Substitute>
                                    )}
                                    {is_checked === 0 && (
                                        <Substitute>
                                            <Img>{name[0]}</Img>
                                            <Name>{name}</Name>
                                            <Time>{time}</Time>
                                            <RoundButton onClick={onClickButton} id={"수락_" + id} style={{ background: "#50c878", marginLeft: "70px", borderRadius: "10px", width: "50px", height: "30px", lineHeight: "2.2" }}>수락</RoundButton>
                                        </Substitute>
                                    )}
                                    </>
                                ))}
                            </List>
                        </Bottom>
                        <ButtonContainer>
                            <RoundButton onClick={onClickButton} id="신청" style={{ background: "#F5D11F", boxShadow: "2px 2px 2px #aaa" }}>신청</RoundButton>
                        </ButtonContainer>
                        </>
                    )}
                    {type === "모니터링" && (
                        <div className="monitoring__cnt">
                            <div className="monitoring__graph">
                                <div className="monitoring__graphImg"></div>
                                <ul className="divideCnt">
                                    <li className="monitor__clock" id="9"><span>09:00</span></li>
                                    <li className="monitor__clock" id="10"><span>10:00</span></li>
                                    <li className="monitor__clock" id="11"><span>11:00</span></li>
                                    <li className="monitor__clock" id="12"><span>12:00</span></li>
                                    <li className="monitor__clock" id="13"><span>13:00</span></li>
                                    <li className="monitor__clock" id="14"><span>14:00</span></li>
                                    <li className="monitor__clock" id="15"><span>15:00</span></li>
                                    <li className="monitor__clock" id="16"><span>16:00</span></li>
                                    <li className="monitor__clock" id="17"><span>17:00</span><span>18:00</span></li>
                                </ul>
                            </div>
                            {generateContent()}
                        </div>
                    )}
                </Wrapper>
            )}
        </>
    );
}