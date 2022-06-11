
import React from 'react';
export const Question = (props) =>{


    const allAnswers = props.responses.map((response) => {
        
        const selected = response === props.userAnswer && "selected";

        return (
            <p
                key={response}
                className={`option ${selected}`}
                onClick={()=>props.handlePickAnswer(props.id, response)}
            >
                {response}
            </p>
        )
    });
    return (
        <>
            <h2 className="question">{props.question}</h2>
            <div className="question--options">
                {allAnswers}
            </div>
            <hr/>
        </>
    );
};