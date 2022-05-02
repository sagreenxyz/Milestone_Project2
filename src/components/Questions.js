import Button from 'react-bootstrap/Button'
import Gallery from './Gallery'
import { Link } from 'react-router-dom'

export default function Questions () {
    return (
        <div> 
            <Button variant='dark' size='lg'>
                <Link className='button-link' to='/questions/new' >Create Question</Link>
            </Button>
            <Gallery />
        </div>
    )
}


  
  