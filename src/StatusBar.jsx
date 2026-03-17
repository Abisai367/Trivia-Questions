import React from 'react'
import './StatusBar.css'
import MyTimer from './timer'

function StatusBar({currentQuestion, totalQuestions}){

    const progressPercentage = (currentQuestion / totalQuestions) * 100;
    return(
        <div>
            <MyTimer/>
            <p className='myP'>Question {currentQuestion} of {totalQuestions}</p> 
            <div className="status">
                <div
                className = "currentStatus"
                style={{width:`${progressPercentage}%`}}>
                </div>
            </div>      
        </div>

    );

}
export default StatusBar 