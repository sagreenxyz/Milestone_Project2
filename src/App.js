import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import './App.css';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

import Play from './components/Play'

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <h1 className="title">Trivia</h1>
          <Container>
            <Nav className="justify-content-center" defaultActiveKey="/" variant="tabs" fill>
              <Nav.Item as='li'>
                <Nav.Link href="/">
                  <Link to="/">Home</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as='li'>
                <Nav.Link eventKey={"playPage"}>
                  <Link to="/play">Play</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as='li'>
                <Nav.Link eventKey={"questionsPage"}>
                  <Link to="/questions">Questions</Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>

        </header>

        <div className='display'>
          <Routes>
            {/*<Route path='/' element={<Home />} />
            
            <Route path='/questions' element={<Create />} />
            <Route path='/questions/new' element={<NewQuestion />} />
            <Route path='/questions/:id' element={<QuestionDetails />} />
            <Route path='/questions/:id/edit' element={<EditQuestion/>} /> */}
            <Route path='/play' element={<Play />} />
          </Routes>
        </div>

      </Router>

    </div>
  );
}

export default App;
