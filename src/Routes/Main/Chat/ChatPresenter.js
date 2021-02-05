import React from "react";
import styled from "styled-components";

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

const Graph = styled.div``;

const Working = styled.div``;

const Current = styled.div``;

export default ({type, year, month, day, workers, eventList}) => (
    <>
    {year === "" && (
        <div style={{fontSize: "1.2em", color:"#aaaaaa", paddingTop: "30px", textAlign:"center"}}>날짜를 선택해 주세요.</div>
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
                    <RoundButton style={{background: "#e26262"}}>출근</RoundButton>
                    <RoundButton style={{background: "#50c878"}}>퇴근</RoundButton>
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
                <Bottom>
                    <Graph>그래프</Graph>
                    <Working></Working>
                    <Current></Current>
                </Bottom>
            )}
        </Wrapper>
    )}
    </>
)