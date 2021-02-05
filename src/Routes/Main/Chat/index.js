import React from "react";
import ChatPresenter from "./ChatPresenter";

export default ({ type, year, month, day, workers, eventList }) => {
    
    return <ChatPresenter type={type} year={year} month={month} day={day} workers={workers} eventList={eventList}/>
}