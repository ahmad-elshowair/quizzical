
import React from 'react';
export const Question = (props) =>{


    const allAnswers = props.responses.map((response) => {
        
        const selected = response === props.userAnswer && "selected";
        const revealed = props.isRevealed && response !== props.correctAnswer && response !== props.userAnswer && "revealed";
        const incorrect = response !== props.correctAnswer && response === props.userAnswer && "incorrect";
        const correct = response === props.correctAnswer && props.isRevealed && "correct";

        return (
            <p
                key={response}
                className={`option ${selected} ${revealed} ${incorrect} ${correct}`}
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