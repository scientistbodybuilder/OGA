import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import { Button } from "@/components/ui/button"
import { HashLink } from "react-router-hash-link"

const Photos = () => {
    const { albumId } = useParams()
    console.log('album Id:', albumId)
    const [albumTitle, setAlbumTitle] = useState('')

    useEffect(() => {
        const getAlbumData = async (albumId: string) => {
            console.log('fetching album data for album:', albumId)
            setAlbumTitle('ISPARC')
        }
        if (albumId) {
            getAlbumData(albumId)
        }
    },[albumId])

    //fetch the album data from the Id

    return(
        <section className='w-full space-y-16 h-full min-h-screen flex flex-col overflow-y-auto bg-(--background-color) pt-20 pb-10 px-4 sm:px-8 lg:px-10 items-center justify-start'>
            <div className="w-full relative max-w-[1100px] scroll-mt-20 flex flex-col items-center justify-start">
                <div className="mt-2 mb-11 flex flex-col items-center">
                    <h3 className="font-heading text-3xl font-medium text-black md:text-[34px]">{ albumTitle ? `${albumTitle} Album` : 'Loading...' }</h3>
                    <div className="mt-2 h-0.5 w-44 bg-(--accent-color)" />
                    <h4 className="mt-4 max-w-[330px] text-center font-body text-sm leading-[1.4] text-[#5f554f]">View photos from the {albumTitle} album.</h4>
 
                </div>
                <HashLink smooth to="/programming#gallery" className="bg-(--accent-color) text-xs rounded-2xl px-3 py-2 text-white hover:bg-(--accent-color)/90 absolute top-0 left-4 cursor-pointer">Back</HashLink>
            </div>
            


        </section>
    )
}

export default Photos