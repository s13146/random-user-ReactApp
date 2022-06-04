import React, {useEffect, useState} from "react";
import "./style.css";

export default function DisplayData({data}) {
    return (
        <>
            <div className='main-context'>
                <img className='picture' src={data.results[0].picture.large}/>
                <div className='person-data'>First name: {data.results[0].name.first}</div>
                <div className='person-data'>Last name: {data.results[0].name.last}</div>

                <div className='person-data'>
                    Username: <span>{data.results[0].login.username}</span>
                </div>
                <div className='person-data'>
                    Email: <span>{data.results[0].email}</span>
                </div>
                <div className='person-data'>
                    Live in: <span>{data.results[0].location.city}</span>
                </div>
            </div>
        </>
    )
}