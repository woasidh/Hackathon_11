import React from "react";
import styled from "styled-components";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from "moment";
import "./BigCalendar.css";
import Navbar from "../../utils/Navbar/Navbar.js";

const Wrapper = styled.div`
    background: #eeeeee;
    height: 100vh;
`;

const Bottom = styled.div`
    padding-top: 100px;
    padding-left: 139px;
    padding-right: 139px;
    display: flex;
`;

const CalendarContainer = styled.div`
    height: 580px;
    width: 800px;
`;

const Chat = styled.div`
    margin-left: 30px;
    border: 1px solid black;
    width: 400px;
`;

const calendarStyle = {};


export default ({ eventList, onClickDate }) => {
    const localizer = momentLocalizer(moment);
    return (
        <Wrapper>
            <Navbar></Navbar>
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
                </CalendarContainer>
                <Chat>

                </Chat>
            </Bottom>
        </Wrapper>
    )
}