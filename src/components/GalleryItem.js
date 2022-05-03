import { Link } from "react-router-dom"


export default function GalleryItem () {
    return (
        <div>
            <h1><Link className='text-link' to='/questions/:id'>Gallery Item</Link></h1>
        </div>
    )
}
