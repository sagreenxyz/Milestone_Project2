import Button from 'react-bootstrap/Button'
import Gallery from './Gallery'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
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

    let [search, setSearch] = useState('')
    let [data, setData] = useState([])
  
    const API_URL = 'http://localhost:5000/questions/email?email='
  
    useEffect(() => {
        if(search) {
            const fetchData = async () => {
                const response = await fetch(API_URL + search)
                const resData = await response.json()
                console.log(resData)
                if (resData.length > 0) {
                    return setData(resData.results)
                } else {
                    return setMessage('Not Found.')
                }
            }
            fetchData()
        }
    }, [search])
  
    const handleSearch = (e, term) => {
        e.preventDefault()
        setSearch(term)
    }

    return (
        <div> 
            <Button variant='dark' size='lg'>
                <Link className='button-link' to='/questions/new' >Create Question</Link>
            </Button>
            <SearchBar handleSearch={handleSearch}/>
            <Gallery data={data}/>
        </div>
    )
}


  
  