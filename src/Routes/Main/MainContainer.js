import React, { useState } from "react";
import MainPresenter from "./MainPresenter";

export default () => {
    const eventList = [
        {
            title: "일정",
            allDay: false,
            start: new Date(2021, 1, 4, 10, 0),
            end: new Date(2021, 1, 8, 11, 0)
        }
    ];

    const onClickDate = async(date) => {
        console.log(date);
    };

    return <MainPresenter eventList={eventList} onClickDate={onClickDate}/>;
};