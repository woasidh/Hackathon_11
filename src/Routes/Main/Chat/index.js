import React, {useEffect, useState} from "react";
import ChatPresenter from "./ChatPresenter";
import axios from "axios";
import { useSelector } from "react-redux";

export default ({ type, year, month, day, workers }) => {
    const [events, setEvents] = useState([]);
    const token = useSelector(state => state.user.userinfo.token);
    const userType = useSelector(state => state.user.userinfo.user_type);
    const userId = useSelector(state => state.user.userinfo.user_id);
    const today = new Date().toString().split(" ");
    const payload = {
        token: token,
        year: year,
        month: month,
        day: day
    }
    const workplace_id = "1";

    // 특정 일에 출퇴근 여부 받아오기
    useEffect(() => {
        axios.post('https://alba-api.herokuapp.com/calendar/' + workplace_id, payload ).then(response =>{
            if(response.data.result == "Success"){
                setEvents(curr => {
                    const tmp = [];
                    response.data.data.map(({employee_id, start_time, end_time, is_checked}) => {
                        tmp.push({
                            name: employee_id,
                            time: start_time.split(":")[0] + ":" + start_time.split(":")[1] + " ~ " + end_time.split(":")[0] + ":" + end_time.split(":")[1],
                            isChecked: is_checked
                        });
                    });
                    return tmp;
                });
            }else{
                console.log(response)
                alert("다시 시도해 주세요.");
        }
    });
    }, [month, day]);

    // 출퇴근 버튼 누르면 출퇴근 처리
    const onClickButton = e => {
        const id = e.target.id;
        if (id === "출근") {
            axios.patch('https://alba-api.herokuapp.com/workplace/' + workplace_id +'/attendance', payload ).then(response =>{
            if(response.data.result == "Success"){
                setEvents(curr => {
                    const tmp = curr.map(element => {
                        if(element.name === userId) {
                            return {
                                name: element.name,
                                time: element.time,
                                isChecked: 1
                            }
                        } else return element;
                    });
                    return tmp;
                });
            }else{
                console.log(response)
                alert("다시 시도해 주세요.");
        }})} else if(id === "퇴근"){
            axios.patch('https://alba-api.herokuapp.com/workplace/' + workplace_id +'/leave', payload ).then(response =>{
                if(response.data.result == "Success"){
                    setEvents(curr => {
                        const tmp = curr.map(element => {
                            if(element.name === userId) {
                                return {
                                    name: element.name,
                                    time: element.time,
                                    isChecked: 2
                                }
                            } else return element;
                        });
                        return tmp;
                    });
                }else{
                    console.log(response)
                    alert("다시 시도해 주세요.");
            }
        })}
    }
    return <ChatPresenter type={type} year={year} month={month} day={day} workers={workers} events={events} userType={userType} onClickButton={onClickButton}/>
}