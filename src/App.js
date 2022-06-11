import React from "react";
import "./App.css"
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import {Quiz} from './components/Quiz'
export const App = ()=>{

    const [showQuestions, setShowQuestions] = React.useState(false);

    const handleShowQuestions = (event) =>{
        event.preventDefault();
        setShowQuestions(true)
    }
    const styleLowerBlob= {
        left: showQuestions ? '-165px':  "-100px",
        bottom : showQuestions ? "-130px" : "0"
    };
    return(
        <main className="main">
            <img 
                className="main--blob upper-blob"  
                src="./images/blobs-upper.png" 
                alt="blob"
            />
            <img 
                className="main--blob lower-blob"  
                src="./images/blobs-lower.png" 
                alt="blob"
                style={styleLowerBlob} 
            />
            {
                showQuestions === false ? 
                (
                    <Home showQuestions={handleShowQuestions}/>
                ): (
                    <Quiz />
                )
            }
            <Footer/>
        </main>
    );
}