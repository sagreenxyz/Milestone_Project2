import { Dropdown, DropdownButton } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useState } from 'react'

export default function Start() {
    return (
        <div>
            <h2 className="title">Difficulty</h2>
            <Dropdown>
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                    Category
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                    <Dropdown.Item active>
                        All
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-2">easy</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">medium</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">hard</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            
            <h2 className="title">Category</h2>
            <Dropdown>
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                    <Dropdown.Item active>
                        All
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-2">Animals</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Art</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Celebrities</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Entertainment: Board Games</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Entertainment: Books</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Entertainment: Cartoon and Animations</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Entertainment: Comics</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Entertainment: Film</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Entertainment: Japenese Anime and Manga</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Entertainment: Music</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Entertainment: Musicals and Theatres</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Entertainment: Television</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Entertainment: Video Games</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">General Knowledge</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Geography</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">History</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Mythology</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Politics</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Science: Computers</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Science: Gadgets</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Science: Mathematics</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Science and Nature</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Sports</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Vehicles</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <DropdownButton variant='dark' size='lg'>
                <Link className='button-link' to='game' >Start Game</Link>
            </DropdownButton>
        </div>
    )
}