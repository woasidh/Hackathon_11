import React, {useEffect, useState} from "react";
import ChatPresenter from "./ChatPresenter";
import axios from "axios";
import { useSelector } from "react-redux";

export default ({ type, year, month, day, workers }) => {
    const [events, setEvents] = useState([]);
    const [works, setWorks] = useState([]);
    const [substitute, setSubstitute] = useState([]);
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

    useEffect(() => {
        // 특정 일에 출퇴근 여부 받아오기
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
        // 특정일에 대타 목록 받아오기
        axios.post('https://alba-api.herokuapp.com/substitute/' + workplace_id, payload ).then(response =>{
            if(response.data.result == "Success"){
                setSubstitute(curr => {
                    const tmp = [];
                    response.data.data.map(({employee_id, start_time, end_time, name, workplace_id}) => {
                        tmp.push({
                            employee_id: employee_id,
                            name: name,
                            time: start_time.split(":")[0] + ":" + start_time.split(":")[1] + " ~ " + end_time.split(":")[0] + ":" + end_time.split(":")[1],
                            workplace_id: workplace_id
                        });
                    });
                    return tmp;
                });
            }else{
                console.log(response)
                alert("다시 시도해 주세요.");
        }})
        //특정일에 스케줄 목록 받아오기
        axios.post('https://alba-api.herokuapp.com/calendar/' + workplace_id, payload).then(response => {
            if(response.data.result === "Success") {
                setWorks(curr => {
                    const tmp = [];
                    response.data.data.map(({employee_id, id, start_time, end_time}) => {
                        tmp.push({
                            employee_id: employee_id,
                            id: id,
                            start_time: start_time,
                            end_time: end_time
                        });
                    });
                    return tmp;
                });
            } else {
                console.log(response)
                alert("다시 시도해주세요");
            }
        });
    }, [type, month, day]);

    // 출퇴근 버튼 누르면 출퇴근 처리
    // 대타 신청 수락 버튼 누르면 처리
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
        })} else if(id === "수락") {

        } else if(id === "신청") {
            const work = works.filter(element => element.employee_id === userId)[0]
            const payload = {
                token: token,
                workplace_schedule_id: work.id
            }
            axios.post('https://alba-api.herokuapp.com/substitute/' + workplace_id +'/add', payload ).then(response =>{
                if(response.data.result == "success"){
                    console.log(response)
                    setSubstitute(curr => {
                        const tmp = curr.concat({
                            employee_id: work.employee_id,
                            name: work.employee_id,
                            time: work.start_time.split(":")[0] + ":" + work.start_time.split(":")[1] + " ~ " + work.end_time.split(":")[0] + ":" + work.end_time.split(":")[1],
                            workplace_id: workplace_id
                        });
                        console.log(tmp);
                        return tmp;
                    });
                }else{
                    console.log(response)
                    alert("다시 시도해 주세요.");
            }
        })}
    }
    return <ChatPresenter type={type} year={year} month={month} day={day} workers={workers} events={events} userType={userType} onClickButton={onClickButton} substitute={substitute} />
}