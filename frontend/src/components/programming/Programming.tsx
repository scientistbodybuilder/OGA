// import { useState, useEffect } from 'react'

import SeminarGallery from './seminars/SeminarGallery'
import UpcomingSeminars from './seminars/UpcomingSeminars'
import Programs from './Programs'
import Gallery from './gallery/Gallery'
import Isparc from './Isparc'
const Programming = () => {
    
    return(
        <section className='w-full space-y-16 h-full min-h-screen flex flex-col overflow-y-auto bg-(--background-color) pt-20 pb-10 px-4 sm:px-8 lg:px-10 items-center justify-start'>
            <Programs />
            <Isparc />
            <SeminarGallery />
            <UpcomingSeminars />
            <Gallery />
        </section>
    )
}

export default Programming