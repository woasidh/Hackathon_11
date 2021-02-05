import React, { useState, useEffect } from "react";
import MainPresenter from "./MainPresenter";
import axios from "axios";
import { useSelector } from "react-redux";

export default () => {
    const token = useSelector(state => state.user.userinfo && state.user.userinfo.token);
    const month = ["","Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const today = new Date().toString().split(" ");
    const [type, setType] = useState("출근/퇴근");
    const [workers, setworkers] = useState([]);
    const [selectYear, setYear] = useState(parseInt(today[3]));
    const [selectMonth, setMonth] = useState(parseInt(month.indexOf(today[1])));
    const [selectDay, setDay] = useState(parseInt(today[2]));
    const [events, setEvents] = useState([]);
    const userType = useSelector(state => state.user.userinfo.user_type);
    const payload = {
        token: token,
        year: selectYear,
        month: selectMonth
    }
    const workplace_id = "1";
    
    // 해당 달에 있는 일정들 모두 가져오기
    useEffect(() => {
        getWorkDay()
        if(userType === "employer") getWorkers()
    }, []);

    async function getWorkDay() {
        await axios.post('https://alba-api.herokuapp.com/calendar/' + workplace_id, payload).then(response => {
            if(response.data.result === "Success") {
                setEvents(curr => {
                    const tmp = [];
                    response.data.data.map(({date, employee_id, name, start_time, end_time}) => {
                        tmp.push({
                            title: name,
                            allDay: false,
                            start: new Date(date.split("-")[0], date.split("-")[1] - 1, date.split("-")[2], start_time.split(":")[0], start_time.split(":")[1]),
                            end: new Date(date.split("-")[0], date.split("-")[1] - 1, date.split("-")[2], end_time.split(":")[0], end_time.split(":")[1])
                        });
                    });
                    console.log(tmp);
                    return tmp;
                });
            } else {
                console.log(response)
                alert("다시 시도해주세요");
            }
        });
    }

    // 해당 매장의 모든 직원 정보 가져오기
    async function getWorkers() {
        await axios.get('https://alba-api.herokuapp.com/workplace/' + workplace_id, {
            headers: {
                Auth: token
            }
        }).then(response => {
            if(response.data.result === "Success") {
                setworkers(curr => {
                    const tmp = [];
                    response.data.data.map((element) => {
                        tmp.push(element);
                    });
                    return tmp;
                })
            } else {
                console.log(response)
                alert("다시 시도해 주세요.");
            }
        });
    }

    const onClickDate = async(date) => {
        const splited = date.toString().split(" ");
        setYear(parseInt(splited[3]));
        setMonth(month.indexOf(splited[1]));
        setDay(parseInt(splited[2]));
    };

    const onChangeSelect = e => {
        const value = e.target.value;
        setType(value);
    };

    return <MainPresenter type={type} selectYear={selectYear} selectMonth={selectMonth} selectDay={selectDay} workers={workers} userType={userType} events={events} onClickDate={onClickDate} onChangeSelect={onChangeSelect}/>;
};