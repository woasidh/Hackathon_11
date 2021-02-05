import React, { useState, useEffect } from "react";
import MainPresenter from "./MainPresenter";
import axios from "axios";
import { useSelector } from "react-redux";

export default () => {
    const [type, setType] = useState("출근/퇴근");
    const [workers, setworkers] = useState([{"name": "홍길동"}, {"name": "가나다"}]);
    const [selectYear, setYear] = useState("");
    const [selectMonth, setMonth] = useState("");
    const [selectDay, setDay] = useState("");
    const [events, setEvents] = useState([]);
    const token = useSelector(state => state.user.userinfo.token);
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const today = new Date().toString().split(" ");
    const payload = {
        token: token,
        year: today[3],
        month: month.indexOf(today[1]) + 1
    }
    const workplace_id = "workplace1";
    axios.post('https://alba-api.herokuapp.com/calendar/' + workplace_id, payload ).then(response =>{
        if(response.data.result == "Success"){
            response.data.data.map(({date, employer_id, start_time, end_time, id, is_checked, name}) => {
                setEvents(current => {
                    const tmp = current;
                    tmp.push({
                        title: employer_id,
                        allDay: false,
                        start: new Date(date.split("-")[0], date.split("-")[1], date.split("-")[2], start_time.split(":")[0], start_time.split(":")[1]),
                        end: new Date(date.split("-")[0], date.split("-")[1], date.split("-")[2], end_time.split(":")[0], end_time.split(":")[1])
                    });
                    return tmp;
                });
            });
        }else{
            console.log(response)
            alert("다시 시도해 주세요.");
        }
    });

    const getEventList = () => {
        console.log(events)
        if (type === "출근/퇴근") {
            return events;
        } else if (type === "대타") {
            return events;
        } else if (type === "모니터링") {
            return events;
        }
    };

    const eventList = getEventList();

    const onClickDate = async(date) => {
        const splited = date.toString().split(" ");
        setYear(parseInt(splited[3]));
        setMonth(month.indexOf(splited[1]) + 1);
        setDay(parseInt(splited[2]));
    };

    const onChangeSelect = e => {
        const value = e.target.value;
        setType(value);
    };

    return <MainPresenter type={type} selectYear={selectYear} selectMonth={selectMonth} selectDay={selectDay} workers={workers} eventList={eventList} onClickDate={onClickDate} onChangeSelect={onChangeSelect}/>;
};