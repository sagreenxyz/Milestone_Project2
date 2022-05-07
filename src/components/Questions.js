import Button from 'react-bootstrap/Button'
import Gallery from './Gallery'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

export default function Questions () {
    // const url="http://localhost:5000/"
    // const [data, setData] = useState({
    //     email:""
    // })

    // function handle(e){
    //     const newData = {...data}
    //     newData[e.target.id] = e.target.value
    //     setData(newData)
    //     console.log(newData)
    // }

    // function submit(e){
    //     e.preventDefault();
    //     axios.get(url, {
    //         email: data.email
    //     })
    //     .then(res=>{
    //         console.log(res.data)
    //     })
    // }

    return (
        <div> 
            <Button variant='dark' size='lg'>
                <Link className='button-link' to='/questions/new' >Create Question</Link>
            </Button>
            <form>
                <label>Search your questions:</label>
                <br/>
                <input id="email" placeholder="example@domain.com" type="email"></input>
                <br/>
                <button type="submit">Submit</button>
            </form>
            <Gallery />
        </div>
    )
}


  
  