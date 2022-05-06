import { useState, useEffect } from 'react'

export default function Game() {
    const [gameStart, startGame] = useState(false)
    const [category, setCategory] = useState('')
    const [questions, setQuestions] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    useEffect(() => {
        fetch('http://localhost:5000/questions', {
            mode: 'no-cors'
        })
        .then(res => {
            return res;
            console.log(res)
        })
        .then(data => {
            setQuestions(data)
        })
        
    }, []) 

    /*const handleAnswerOptionClick = () => {
        
        setScore(score + 1);
        

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    }*/

    return (
        <div className='app'>
            <h1>Game</h1>
            {/* {showScore ? (
                <div className='score-section'>
                    You scored {score} out of {questions.length}
                </div>
            ) : (
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className='question-text'>{questions[currentQuestion].questionText}</div>
                    </div>
                    <div className='answer-section'>
                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <button onClick={() => handleAnswerOptionClick()}>Answer</button>
                        ))}
                    </div>
                </>
            )} */}
        </div>
    )
}