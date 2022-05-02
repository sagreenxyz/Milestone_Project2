import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import './App.css';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

import Home from './components/Home'
import Play from './components/Play'
import Start from './components/Start'
import Game from './components/Game';
import Questions from './components/Questions'
import NewQuestion from './components/NewQuestion'
import QuestionDetails from './components/QuestionDetails';

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
                  <Link className='text-link' to="/">Home</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as='li'>
                <Nav.Link eventKey={"playPage"}>
                  <Link className='text-link' to="/play">Play</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as='li'>
                <Nav.Link eventKey={"questionsPage"}>
                  <Link className='text-link' to="/questions">Questions</Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>

        </header>

        <div className='display'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/questions/new' element={<NewQuestion />} />
            <Route path='/questions' element={<Questions />} />
            <Route path='/questions/:id' element={<QuestionDetails />} />
             {/*
            <Route path='/questions/:id/edit' element={<EditQuestion/>} /> */}
            <Route path='/play' element={<Play />} />
            <Route path='/play/start' element={<Start />}/>
            <Route path='/play/start/*' element={<Game />}/>
          </Routes>
        </div>

      </Router>

    </div>
  );
}

export default App;
