import React, { useState, useEffect } from "react";
import MainPresenter from "./MainPresenter";

export default ({ user }) => {
    const [type, setType] = useState("출근/퇴근");
    const [workers, setworkers] = useState([{"name": "홍길동"}, {"name": "가나다"}]);
    const [selectYear, setYear] = useState("");
    const [selectMonth, setMonth] = useState("");
    const [selectDay, setDay] = useState("");

    useEffect(() => {
        
    }, []);

    const getEventList = () => {
        if (type === "출근/퇴근") {
            /*const data = {};
            axios.post('https://alba-api.herokuapp.com/workspace/', data).then(response =>{
                if(response.request.status ==200){
                    
                }else{

                }
            });*/
            return (
                [
                    {
                        title: "일정",
                        allDay: false,
                        start: new Date(2021, 1, 4, 10, 0),
                        end: new Date(2021, 1, 4, 11, 0)
                    },
                    {
                        title: "일정2",
                        allDay: false,
                        start: new Date(2021, 1, 11, 10, 0),
                        end: new Date(2021, 1, 11, 11, 0)
                    }
                ]
            )
        } else if (type === "대타") {
            return (
                [
                    {
                        title: "홍길동",
                        allDay: false,
                        start: new Date(2021, 1, 8, 10, 0),
                        end: new Date(2021, 1, 8, 11, 0)
                    },
                    {
                        title: "홍길동2",
                        allDay: false,
                        start: new Date(2021, 1, 16, 10, 0),
                        end: new Date(2021, 1, 16, 11, 0)
                    }
                ]
            )
        } else if (type === "모니터링") {
            return (
                [
                    {
                        title: "홍길동",
                        allDay: false,
                        start: new Date(2021, 1, 8, 10, 0),
                        end: new Date(2021, 1, 8, 11, 0)
                    },
                    {
                        title: "홍길동2",
                        allDay: false,
                        start: new Date(2021, 1, 9, 10, 0),
                        end: new Date(2021, 1, 9, 11, 0)
                    }
                ]
            )
        }
    };

    const eventList = getEventList();

    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const onClickDate = async(date) => {
        const splited = date.toString().split(" ");
        setYear(parseInt(splited[2]));
        setMonth(month.indexOf(splited[1]) + 1);
        setDay(parseInt(splited[3]));
    };

    const onChangeSelect = e => {
        const value = e.target.value;
        setType(value);
    };

    return <MainPresenter type={type} selectYear={selectYear} selectMonth={selectMonth} selectDay={selectDay} workers={workers} eventList={eventList} onClickDate={onClickDate} onChangeSelect={onChangeSelect}/>;
};