import { useState, useEffect } from 'react'
import { questions as db } from '../data'


export default function Game() {
    const [gameStart, startGame] = useState(false)
    const [category, setCategory] = useState('')
    const [data, setQuestions] = useState(null)
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    /*async function loadQuestions() {
        const response = await fetch('http://localhost:5000/questions', {
            mode: 'cors',
            headers: {
                'Content-Type': 'applications/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        const data = await response.json()
        console.log(data)
    }

    loadQuestions()*/

    /*useEffect(() => {
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
        
    }, []) */

    function ShuffleQuestions(array) {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        console.log(currentIndex)
        return array;
    }

    const questions = ShuffleQuestions(db)

    const handleAnswerOptionClick = () => {

        setScore(score + 1);


        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    }

    return (
        <div className='app'>
            {showScore ? (
                <div className='score-section'>
                    You scored {score} out of {questions.length}
                </div>
            ) : (
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <h4 className='question-text'>{questions[currentQuestion].questionText}</h4>
                    </div>
                    <div className='answer-section'>
                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <button classname="answer-button" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}