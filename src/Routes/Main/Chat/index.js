import React, {useState} from "react";
import ChatPresenter from "./ChatPresenter";
import axios from "axios";
import { useSelector } from "react-redux";

export default ({ type, year, month, day, workers }) => {
    const [events, setEvents] = useState([]);
    const token = useSelector(state => state.user.userinfo.token);
    const userType = useSelector(state => state.user.userinfo.user_type);
    const payload = {
        token: token,
        year: year,
        month: month,
        day: day
    }
    const workplace_id = "workplace1";

    // 특정 일에 출퇴근 여부 받아오기
    /*axios.post('https://alba-api.herokuapp.com/workplace/' + workplace_id + '/attendance', payload ).then(response =>{
        if(response.data.result == "Success"){
            console.log("hi", response)
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
    });*/
    return <ChatPresenter type={type} year={year} month={month} day={day} workers={workers} events={events} userType={userType}/>
}