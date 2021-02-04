import React from "react";
import styled from "styled-components";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from "moment";
import "./BigCalendar.css";
import Navbar from "../../utils/Navbar/Navbar.js";
import Popup from "reactjs-popup";
import ChatContainer from "./Chat";
import _Popup from '../../utils/Popup/_Popup'

const Wrapper = styled.div`
    height: 100vh;
    margin: 0;
`;

const About = styled.div`
    border: 1px solid #ddd;
    border-radius: 10px;
    background: #f9f9f9;
    height: 80px;
    position: relative;
    top: 100px;
    margin: 0px 139px 0px 139px;
    display: flex;
`;

const Info = styled.div`
    width: 200px;
    padding: 14px;
    text-align: center;
    border-right: 1px solid #ddd;
`;

const Text = styled.div`
    font-size: 0.85em;
    color: gray;
    padding: 5px;
`;

const WorkerList = styled.div`
    padding: 15px 20px;
    display: flex;
`;

const List = styled.div`
    padding: 5px;
    display: flex;
`;

const Worker = styled.div`
    background: #F5D11F;
    border-radius: 50px;
    width: 40px;
    height: 40px;
    margin-right: 10px;
    cursor: pointer;
    text-align: center;
    line-height: 2.5;
    color: white;
`;

const Bottom = styled.div`
    padding-top: 120px;
    padding-left: 139px;
    padding-right: 139px;
    display: flex;
`;

const CalendarContainer = styled.div`
    height: 450px;
    width: 850px;
    position: relative;
`;

const Chat = styled.div`
    margin-left: 25px;
    border: 1px solid #ddd;
    border-radius: 10px;
    background: #f9f9f9;
    width: 400px;
`;

const SelectContainer = styled.div`
    position: absolute;
    top: 20px;
    right: 40px;
`;

const Selector = styled.select`
    padding: 5px 10px;
    cursor: pointer;
`;

const X = styled.div`
    cursor: pointer;
    position: absolute;
    right: -30px;
    top: -8px;
    font-size: 2.5em;
    color: gray;
`;

const Option = styled.option``;

const calendarStyle = {};


export default ({ type, selectYear, selectMonth, selectDay, workers, eventList, onClickDate, onChangeSelect }) => {
    const localizer = momentLocalizer(moment);
    return (
        <Wrapper>
            <Navbar></Navbar>
            <About>
                <Info>
                    <Text>영업일: Mon - Sat</Text>
                    <Text>영업시간: 09:00 ~ 18:00</Text>
                </Info>
                <WorkerList>
                    <Text style={{lineHeight: "2.7"}}>근무자 목록</Text>
                    <List>
                        {workers.map(worker => (
                            <Popup
                                trigger={<Worker>{worker.name[0]}</Worker>}
                                modal
                                contentStyle={{ background: "white", width: "800px", height: "450px", border: "1px solid #ddd", padding: "10px 20px", borderRadius: "10px" }}
                            >
                                <_Popup/>
                                {close => (
                                    <>
                                        <X onClick={close}>&times; </X>
                                        <div></div>
                                    </>
                                )}
                            </Popup>
                        ))}
                    </List>
                </WorkerList>
            </About>
            <Bottom>
                <CalendarContainer>
                <Calendar
                    localizer={localizer}
                    events={eventList}
                    view="month"
                    views={["month"]}
                    startAccessor="start"
                    endAccessor="end"
                    style={calendarStyle}
                    onNavigate={date => onClickDate(date) }
                />
                <SelectContainer>
                    <Selector name="select" id="select-option" onChange={onChangeSelect}>
                        <Option value="출근/퇴근">출근/퇴근</Option>
                        <Option value="대타">대타</Option>
                        <Option value="모니터링">모니터링</Option>
                    </Selector>
                </SelectContainer>
                </CalendarContainer>
                <Chat>
                    <ChatContainer type={type} year={selectYear} month={selectMonth} day={selectDay}>
                    </ChatContainer>
                </Chat>
            </Bottom>
        </Wrapper>
    )
}