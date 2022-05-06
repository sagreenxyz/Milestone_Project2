import { Form, Button } from "react-bootstrap"

export default function NewQuestion() {
    return (
        <>
        <div><h1>Create a question!</h1></div>
        <div class="d-flex justify-content-center">
        <div class="col-sm-6">
            {/* <Form>
                <Form.Group action="http://localhost:5000/questions" method="POST" className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form> */}
            <form action="http://localhost:5000/questions" method="POST">
                <label htmlFor="category_id">Choose a Category</label>
                <br/>
                <select class="form-select form-select-sm"  id="category" name="category_id">
                        <option value="1">Animals</option>
                        <option value="2">Art</option>
                        <option value="3">Celebrities</option>
                        <option value="4">Entertainment: Board Games</option>
                        <option value="5">Entertainment: Books</option>
                        <option value="6">Entertainment: Cartoon & Animations</option>
                        <option value="7">Entertainment: Comics</option>
                        <option value="8">Entertainment: Film</option>
                        <option value="9">Entertainment: Japanese Anime & Manga</option>
                        <option value="10">Entertainment: Music</option>
                        <option value="11">Entertainment: Musicals & Theatres</option>
                        <option value="12">Entertainment: Television</option>
                        <option value="13">Entertainment: Video Games</option>
                        <option value="14">General Knowledge</option>
                        <option value="15">Geography</option>
                        <option value="16">History</option>
                        <option value="17">Mythology</option>
                        <option value="18">Politics</option>
                        <option value="19">Science: Computers</option>
                        <option value="20">Science: Gadgets</option>
                        <option value="21">Science: Mathematics</option>
                        <option value="22">Science & Nature</option>
                        <option value="23">Sports</option>
                        <option value="24">Vehicles</option>
                </select>
                <label htmlFor="difficulty_id">Choose a Difficulty</label>
                <br/>
                <select class="form-select form-select-sm"  id="difficulty" name="difficulty_id">
                        <option value="1">Easy</option>
                        <option value="2">Medium</option>
                        <option value="3">Hard</option>
                </select>
                <label htmlFor="question_type_id">Choose a Question Type</label>
                <br/>
                <select class="form-select form-select-sm"  id="difficulty" name="question_type_id">
                        <option value="1">True / False</option>
                        <option value="2">Multiple Choice</option>
                </select>
                <br/>
                <label htmlFor="question_text">Enter your question!</label>
                <br/>
                <input type="text" class="form-control" name="question_text" id="question"/>
                <br/>
                <label htmlFor="email">Enter your email</label>
                <br/>
                <input type="email" class="form-control" name="email" id="email"/>
                <br/>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </form>
        </div>
        </div>
        </>
    )
}