import { Link } from "react-router-dom"


export default function QuestionItem (props) {

    // const createDiv = () => {
    //     return (
    //         <div>
    //             <h2>{props.item.question_text}</h2>
    //         </div>
    //     )
    // }

    return (
        <li>
                {props.item.question_text}
        </li>
    )
}
