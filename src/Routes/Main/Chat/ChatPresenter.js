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
    border-radius: 50px;
    width: 50px;
    height: 50px;
    margin-right: 10px;
    cursor: pointer;
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

const List = styled.div``;
const Person = styled.div``;

export default ({ type, year, month, day, workers, eventList }) => {

    const [counter, setcounter] = useState(0);

    const capArr = [0.7, 1.6, 1.8, 2.0, 0.3, 0.4, 0.4, 0.5, 1.8];
    const workerArr = [['토마토1', '포도1'], ['토마토2', '포도2'], ['토마토3', '포도3'], ['토마토4', '포도4'], ['토마토5', '포도5'],
    ['토마토6', '포도6'], ['토마토7', '포도7'], ['토마토8', '포도8'], ['토마토9', '포도9']];
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
                                {workers.map(({ name }) => (
                                    <Worker>
                                        <Img>{name[0]}</Img>
                                        <Name>{name}</Name>
                                        <IsChecked>출근</IsChecked>
                                    </Worker>
                                ))}
                            </Bottom>
                            <ButtonContainer>
                                <RoundButton style={{ background: "#e26262" }}>출근</RoundButton>
                                <RoundButton style={{ background: "#50c878" }}>퇴근</RoundButton>
                            </ButtonContainer>
                        </>
                    )}
                    {type === "대타" && (
                        <Bottom>
                            {workers.map(({ name }) => (
                                <Worker>
                                    <Img>{name[0]}</Img>
                                    <Name>{name}</Name>
                                    <IsChecked>출근</IsChecked>
                                    <Button>대타 신청</Button>
                                </Worker>
                            ))}
                        </Bottom>
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