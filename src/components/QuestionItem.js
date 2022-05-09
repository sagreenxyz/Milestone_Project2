import { Link } from 'react-router-dom'
import axios from 'axios'
import { Button } from 'react-bootstrap';


export default function QuestionItem (props) {
    const handleDelete = async (event) => {
        event.preventDefault();
        // setMessage("")
        const question_text = document.getElementById("question_text");
    
        await axios
          .delete("http://localhost:5000/questions/question_text", {
            question_text: question_text.value,
          })
          .then((data) => {
            console.log(data);
            if (data.data.success) {
              console.log("question deleted");
            }
          })
          .catch((error) => {
            console.log(error)
            console.log("question was not deleted");
          });
        //   event.target.reset();
        //   setMessage("Successfully added new question.")
      }

    // const createDiv = () => {
    //     return (
    //         <div>
    //             <h2>{props.item.question_text}</h2>
    //         </div>
    //     )
    // }

    // <Link to={`/${props.item.question_id}`}>
    //             {props.item.question_text}
    //         </Link>

    return (
        <li>
                
            {/* <form onSubmit={handleDelete}>
                <br/>
            <input defaultValue={props.item.question_text} type="text" class="form-control" name="question_text" id="question_text"/>
                <Button variant="danger" size='lg' type="submit">
                    Delete
                </Button>
                <br/>
            </form> */}
            <form action={`http://localhost:5000/questions/${props.item.question_id}?_method=DELETE`} method="POST">
              <input type='text' defaultValue={props.item.question_text} size="100"/>
              <button type="submit">Delete</button>
            </form>
        </li>
    )
}
