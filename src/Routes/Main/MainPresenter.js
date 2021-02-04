import React from "react";
import styled from "styled-components";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from "moment";

const Wrapper = styled.div`
    
`;

const Top = styled.div`
    height: 62px;
    padding: 0px 139px;
    border-bottom: 1px solid gray;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    display: flex;
    padding: 20px 0px;
`;

const Logo = styled.div`
    width: 139px;
    text-align: center;
    font-family: CookieRunBold;
`;

const Select = styled.div`

`;

const Right = styled.div`
    display: flex;
    padding: 20px 0px;
`;

const Sub = styled.div`

`;

const Img = styled.div`
    border-radius: 50px;
    background: gray;
    height: 30px;
    width: 30px;
    margin-top: -7px;
`;

const Bottom = styled.div`

`;

const CalendarContainer = styled.div`
    height: 600px;
    width: 100%;
`;

const Chat = styled.div`

`;

const calendarStyle = {};


export default () => {
    const localizer = momentLocalizer(moment);
    return (
        <Wrapper>
            <Top>
                <Left>
                    <Logo>알바꼼꼼</Logo>
                    <Select>캘린더</Select>
                    <Select>매장 모니터링</Select>
                </Left>
                <Right>
                    <Sub>새 소식</Sub>
                    <Sub>내 정보</Sub>
                    <Img></Img>
                </Right>
            </Top>
            <Bottom>
                <CalendarContainer>
                <Calendar
                    localizer={localizer}
                    startAccessor="start"
                    endAccessor="end"
                    style={calendarStyle}
                />
                </CalendarContainer>
                <Chat>

                </Chat>
            </Bottom>
        </Wrapper>
    )
}