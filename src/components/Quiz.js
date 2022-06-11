import { nanoid } from "nanoid";
import React from "react"
import { Question } from "./Question";
export const Quiz = () => {
    const [quizzes, setQuizzes] = React.useState([]);
    const [score, setScore] = React.useState(0);
    const [gameOver, setGameOver] = React.useState(false);

    const shuffle = (array) =>{
        return array.sort(()=> Math.random() -0.5).map(answer => answer);
    }

    const createObjArray = (array) =>{
        return(
            array &&
            array.map((data)=>{
                return{
                    id: nanoid(),
                    question: data.question,
                    answers: shuffle([...data.incorrect_answers, data.correct_answer]),
                    correctAnswer: data.correct_answer,
                    isRevealed: false,
                    isCorrect: false,
                    userAnswer: ""
                };
            })
        );
    };

    const fetchData= () =>{
        fetch('https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple')
        .then((response) => response.json())
        .then((response) => createObjArray(response.results))
        .then((data) =>{
            setQuizzes(data)
        }).catch((error)=>{
            throw new Error(error.message)
        })
    };

    React.useEffect(() => {
        fetchData();
    },[]);

    const pickAnswer=(questionId, answer) =>{
        console.log("clicked")
        setQuizzes((prevQuestions)=>{
            return prevQuestions.map((question)=>{
                if(question.id === questionId){
                    return{
                        ...question,
                        userAnswer: answer
                    }
                }else{
                    return question;
                }
            })
        });
    };

    const allQuizzes = quizzes.map((quiz) => {
         return <Question 
                    key={quiz.id}
                    id={quiz.id}
                    question={quiz.question}
                    responses={quiz.answers}
                    isRevealed={quiz.isRevealed}
                    userAnswer={quiz.userAnswer}
                    correctAnswer={quiz.correctAnswer}
                    handlePickAnswer={pickAnswer}
                />
    });

    
   return (
    <section className="questions">
        {allQuizzes}
        <button className="btn">Check answers</button>
    </section>
   );
};