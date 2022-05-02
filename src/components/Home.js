import React from 'react'
import TriviaLogo from '/Users/bzhao/Desktop/Module8/Milestone_Project2/src/Images/TriviaLogo.png';

export default function Home () {
    return (
        <div className="home">
        <img src={TriviaLogo} alt="TriviaLogo"/>
            <p>This is a trivia game for all ages!</p>
            <h2>How to play?</h2>
     <li>click in the play tab</li>
     <li>click in the play button</li>
     <li>choose the difficult level</li>
     <li>Each questions would have multiple answer</li>
     <li>click and submit the best answer</li>
     <li>Level up or down depending on how many points you get</li>
     <h2>To submit your own Trivia Question</h2>
     <li>Show your knowledge by creating trivia questions!</li>
     <li>click in the Question tab</li>
     <li>enter your email</li>
     <li>Write your question</li>
    <li>Select the difficulty level</li>
     <li>Submit</li>
    </div>
    )
       
}