import { useState, useEffect } from 'react'
import { HashLink } from 'react-router-hash-link'

import landingPhoto from '../../assets/images/landing_img.png'
import landingPhoto2 from '../../assets/images/landing_img_2.png'

const landingPhotos = [
    landingPhoto,
    landingPhoto2
]

const ActionSection = () => {
    const [landingIndex, setLandingIndex] = useState(0)
    
        useEffect(() => {
            setTimeout(() => {
                if (landingIndex == landingPhotos.length - 1) {
                    setLandingIndex(0);
                } else {
                    setLandingIndex(landingIndex + 1);
                }
            }, 5000);
        },[landingIndex]);
    return(
        <div className='w-full max-w-[1100px] scroll-mt-20 flex flex-col items-center justify-start'>
            <div className='w-full h-full grid md:grid-cols-2 gap-12 place-items-center'>
                <div className='w-full h-full flex flex-col items-start justify-center gap-4 p-4'>
                    <h3 className='font-heading font-medium text-black text-4xl sm:text-5xl mb-2 sm:mb-0 md:text-3xl lg:text-4xl 2xl:text-5xl text-left max-h-[200px] md:max-h-[300px] leading-[1.2] xl:max-h-full'>Igniting Our Next Generation of Muslim Leaders</h3>

                    <h4 className='font-body text-xs sm:text-sm xl:text-base text-left text-(--accent-color)'> Our Golden Age is a sanctuary for high-achieving professionals seeking to harmonize their pursuit of modern excellence with the profound intellectual heritage of the Islamic tradition. Connect, grow, and lead. </h4>

                    <div className="flex items-center gap-4">
                        <HashLink smooth to="/#support" className="bg-(--accent-color) text-white font-body cursor-pointer py-2 px-4 transition duration-300 hover:bg-(--accent-hover)">
                            Become a Member
                        </HashLink>

                        <a target="_blank" href="https://docs.google.com/document/d/1DNXZ_K3PUVbo4hfmdMlq9XCJHr1vVqJZlhd0BJFhDko/edit?tab=t.0" className="border border-color-(--accent-color) text-(--accent-color) font-body cursor-pointer py-2 px-4 hover:bg-[#f3ede7] transition duration-300">
                            Read the Constitution
                        </a>
                    </div>

                </div>

                <div className='w-full h-full flex flex-col items-center justify-center gap-3 mr-6'>
                    <div className='w-auto h-96 lg:h-[450px] xl:h-[550px] flex items-center justify-center'>
                        <img className='h-full w-fit object-contain rounded-full' src={landingPhotos[landingIndex]} alt="landing" />
                    </div>

                    <div className='flex w-full items-center justify-center gap-4'>
                        {landingPhotos.map((_, index) => (
                            <div className={`rounded-full h-3 w-3 ${index == landingIndex ? 'bg-(--accent-color)' : 'bg-(--accent-color)/60'}`}
                                key={index}>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            
        </div>
    )
}


export default ActionSection