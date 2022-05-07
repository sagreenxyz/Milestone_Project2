import { useContext } from "react"
import GalleryItem from './GalleryItem'


 function Gallery () {
    // const data = useContext(GalleryItem).result.read()

    // const display = data.map((item,index) => {
    //     return (
    //         <GalleryItem item={item} key={index} />
    //     )
    // })
    return (
        <div>
            <GalleryItem/>
        </div>
    )
}

export default Gallery