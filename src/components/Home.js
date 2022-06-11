export const Home = ({showQuestions}) => {
    return(
        <section className="main--home">
            <h1 className="home--heading">Quizzical</h1>
            <p className="home--description">
                Have Fun with Quizzical Game 🙂 
            </p>
            <button 
                className="btn"
                onClick={(event) =>showQuestions(event)}
            >
                Start quiz
            </button>
        </section>
    );
};