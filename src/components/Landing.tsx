import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


import landingPhoto from '../assets/images/landing_img.png'
import landingPhoto2 from '../assets/images/landing_img_2.png'
//about icons
import { GrMapLocation } from "react-icons/gr";
import { TbTargetArrow } from "react-icons/tb";
import { PiFlowerLotus } from "react-icons/pi";
import { FaHandsPraying } from "react-icons/fa6";


//community icons
import { IoChatbubblesOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { FaRegNewspaper } from "react-icons/fa6";

//news images
import isparc_2024 from '../assets/images/isparc-2024.png'
import isparc_2026 from '../assets/images/isparc-2026.png'

//membership images
import { BiDonateHeart } from "react-icons/bi";
import { IoShareSocialOutline } from "react-icons/io5";
import { PiHandsPraying } from "react-icons/pi";
//partner images
import msa_logo from '../assets/images/msa-logo.png'
import { HashLink } from 'react-router-hash-link';

const partners = [
        msa_logo
    ]

const landingPhotos = [
    landingPhoto,
    landingPhoto2
]

const news = [
        {
            image:isparc_2024,
            hook: "ISPARC 2024",
            body:"🌍 A Week of Impact and Innovation for CO-LAB! 🚀\n\nLast week, we had the incredible opportunity to participate in the Africa HealthTech Summit - #AHTS25, where we explored the evolving health tech landscape across the continent — diving deep into the opportunities, challenges, and future potential of digital health in Africa. 💡\n\nWe also joined the Inspire Africa Conference, focusing on product development and refinement, and pitched our solution at the Annual Health Convening organized by the Africa Health Collaborative. 🎤\n\nA huge thank you to the African Impact Initiative for making these transformative experiences possible. Your support continues to empower startups like ours to build a healthier, more connected Africa. 💙"
        },
        {
            image:isparc_2026,
            hook: "ISPARC 2026 Coming Soon!",
            body:"We’re excited to be part of the Africa Impact Initiative Bootcamp, joining 11 innovative health tech startups in the Africa Impact Challenge Program, proudly organized by the University of Toronto, Canada.\n\nThis milestone is not just a recognition of our efforts, but also an incredible opportunity to gain knowledge, mentorship, and collaboration with some of the brightest innovators across Africa.\n\nBeing part of this prestigious program strengthens our commitment to building impactful solutions that address critical challenges in healthcare and improve lives across the continent."
        },
        // {
        //     image:acubed_regional_finalist,
        //     hook: "ACUBED has been selected as a Regional Finalist for East Africa in the prestigious Global Startup Awards Africa, competing in two major categories: Best Newcomer and Health Tech Startup of the Year.",
        //     body:"ACUBED has been selected as a Regional Finalist for East Africa in the prestigious Global Startup Awards Africa, competing in two major categories: Best Newcomer and Health Tech Startup of the Year. This recognition highlights our innovative work in transforming diagnostic access through technology, community-centered design, and last-mile healthcare logistics. Being chosen among top startups across the continent is a powerful validation of our mission to make diagnostic services accessible, reliable, and affordable for underserved populations. We are honored by this achievement and remain committed to scaling our impact across Africa."
        // },
        // {
        //     image: africa_tech_festival,
        //     hook: "Last week, ACUBED had the exciting opportunity to participate in the Africa Tech Festival in Cape Town, where we showcased our digital diagnostics platform CO-LAB and engaged with leaders shaping the future of Africa’s tech ecosystem.",
        //     body: "ACUBED at Africa Tech Festival 2025 – Cape Town Highlights 🚀\n\nLast week, ACUBED had the exciting opportunity to participate in the Africa Tech Festival in Cape Town, where we showcased our digital diagnostics platform CO-LAB and engaged with leaders shaping the future of Africa’s tech ecosystem.\n\nThroughout the event, we connected with investors, innovators, and industry experts across the continent — exploring new perspectives and collaboration opportunities to strengthen digital health infrastructure in Africa. 🤝✨\n\nWe also took part in the African Impact Initiative Alumni Event, where we shared more about ACUBED’s mission: democratizing access to diagnostics and improving health outcomes through technology and smart logistics.\n\nThis experience reaffirmed the importance of innovation, strategic partnerships, and community in driving impactful health solutions across Africa. 🌱💡\n\nA huge thank you to the African Impact Initiative for their continued support and for making this journey possible. 🙌\n\nWe’re energized, inspired, and ready for what’s next! 🚀💉📲\n\nStay tuned — the best is yet to come."
        // }
    ]

const LandingPage = () => {
    const navigate = useNavigate()

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

    return (
        <section className='w-full h-full min-h-screen flex flex-col overflow-y-auto bg-(--background) items-center justify-start'>
           
            <div id='home' className='w-full lg:w-11/12 h-auto flex items-center justify-center mt-16 py-12 px-4 xl:px-16'>
                <div className='w-full h-full grid lg:grid-cols-2 gap-12 place-items-center'>
                    <div className='w-full h-full flex flex-col items-start justify-center gap-4 p-4'>
                        <h3 className='font-heading font-medium text-black text-4xl sm:text-5xl mb-2 sm:mb-0 md:text-4xl lg:text-5xl 2xl:text-7xl text-left max-h-[200px] md:max-h-[300px]  xl:max-h-full'>Awaken The Excellence Within. Forge the Future</h3>

                        <h4 className='font-body xs:text-xs sm:text-base md:text-lg text-left text-(--accent)'> Our Golden Age is a sanctuary for high-achieving professionals seeking to harmonize their pursuit of modern excellence with the profound intellectual heritage of the Islamic tradition. Connect, grow, and lead. </h4>

                        <div className="flex items-center gap-4">
                            <HashLink smooth to="/#membership" className="bg-(--accent) text-white font-body cursor-pointer py-2 px-4 transition duration-300 hover:bg-opacity-80">
                                Become a Member
                            </HashLink>

                            <HashLink smooth to="/#about" className="border border-color-(--accent) text-(--accent) font-body cursor-pointer py-2 px-4 transition duration-300">
                                Read the Constitution
                            </HashLink>
                        </div>

                    </div>

                    <div className='w-full h-full flex flex-col items-center justify-center gap-3 mr-6'>
                        <div className='w-auto h-96 lg:h-[450px] xl:h-[550px] flex items-center justify-center'>
                            <img className='h-full w-fit object-contain rounded-full' src={landingPhotos[landingIndex]} alt="landing" />
                        </div>


                        <div className='flex w-full items-center justify-center gap-4'>
                            {landingPhotos.map((photo, index) => (
                                <div className={`rounded-full h-3 w-3 ${index == landingIndex ? 'bg-(--accent)' : 'bg-(--accent-hover)'}`}
                                    key={index}>
                                </div>
                           ))}
                        </div>

                    </div>
                </div>
                
            </div>

            <div id='about' className='w-full flex items-center justify-center bg-(--background-dark) h-auto px-4 xl:px-16 py-12'>
                <div className='w-full lg:w-11/12 flex flex-col items-center justify-center gap-6'>
                    <div className='grid md:grid-cols-[400px_1fr] w-full gap-6'>
                        <div className='h-auto flex flex-col items-start justify-center gap-2'>
                            <h4 className='text-base xl:text-lg font-medium text-(--neutral) tracking-widest font-body'>ABOUT US</h4>
                            <h3 className='text-black font-medium text-5xl xl:text-6xl font-heading'>Who We Are</h3>
                        </div>

                        <div className='h-auto md:mt-12'>
                            <p className='text-(--accent) text-sm xl:text-base text-wrap text-left font-body'>Our Golden Age (OGA for short) is a Fi-ridha-tillah (for the Pleasure of Allah) organization aiming to provide Islamic, intellectual, and professional development opportunities for students and seekers to become our next generation of Islamic scholars, scientists, and specialists across fields and disciplines!

Inspired from the Qur’an and Sunnah, OGA seeks to inspire all Muslims to reclaim the integrative excellence of Islam through Ihsaani empowerment, Intellectual enrichment, and Industry/Professional engagement to reach Our Golden Age, In sha Allahu ta’ala!

In sha Allahu ta’ala, with Allah’s Permission, together: we can SPARC Our Golden Age to reach Allah’s Pleasure and Perfection, forever!</p>
                        </div>
                    </div>

                    <div id='about_elements' className='grid md:grid-cols-3 w-full gap-10'>
                        <div className='relative flex flex-col items-start justify-start gap-6 bg-(--background) p-5 box-border rounded-md border border-[#ccc] hover:border-(--accent) duration-300'>
                            <h3 className='font-heading text-black font-medium text-lg xl:text-2xl'>Our Location</h3>
                            <GrMapLocation className='font-body h-10 w-10 absolute top-4 right-4 text-(--bg-accent)' />
                            <p className='font-body text-(--neutral) text-sm xl:text-base text-wrap text-left'>Although centralized in Canada, OGA operates as an organization globally.</p>

                        </div>

                         <div className='relative flex flex-col items-start justify-start gap-6 bg-(--background) p-5 box-border rounded-md border border-[#ccc] hover:border-(--accent) duration-300'>
                            <h3 className='font-heading text-black font-medium text-lg xl:text-2xl'>Our Mission</h3>
                            <TbTargetArrow className='h-10 w-10 absolute top-4 right-4 text-(--bg-accent)' />
                            <p className='font-body text-(--neutral) text-sm xl:text-base text-wrap text-left'>To seek Our Golden Age by supporting the next generation of Islamic scholars, scientists, and specialists across fields and disciplines.</p>

                        </div>

                         <div className='relative flex flex-col items-start justify-center gap-6 bg-(--background) p-5 box-border rounded-md border border-[#ccc] hover:border-(--accent) duration-300'>
                            <h3 className='font-heading text-black font-medium text-lg xl:text-2xl'>Our Vision</h3>
                            <FaHandsPraying className='h-10 w-10 absolute top-4 right-4 text-(--bg-accent)' />
                            <p className='font-body text-(--neutral) text-sm xl:text-base text-wrap text-left'>To reach Our Golden Age, In sha Allahu ta’ala, where Muslims reclaim the integrative excellence of Islam.</p>

                        </div>
                    </div>

                    <a href="http://bit.ly/oga-constitution" target="_blank" className="bg-(--accent) mt-4 text-white text-sm md:text-base rounded-full font-body cursor-pointer py-2 px-4 transition duration-300 hover:bg-(--accent-hover)">
                        Our Constitution
                    </a>


                </div>
            </div>

            <div id='community' className='w-full flex flex-col items-center justify-center bg-(--background) h-auto px-4 xl:px-16 gap-6 py-12'>
                <div className='font-body w-full lg:w-11/12 flex flex-col items-center justify-center gap-2'>
                    <h3 className='font-body text-lg md:text-xl text-(--neutral) font-medium tracking-widest '>COMMUNITY</h3>
                    <p className='font-body text-(--accent) text-sm md:text-base mb-8'>The OGA community strives to provide all the following for our fellow Muslims</p>

                    <div id='feature_elements' className='grid md:grid-cols-3 w-full gap-6 xl:gap-12'>
                        
                        <div className='font-body bg-(--background-dark) rounded-xl shadow-md px-8 pt-4 pb-8 flex flex-col items-center justify-start hover:translate-y-[-20px] transition-transform hover:shadow-lg'>
                            <div className='font-body flex items-center justify-center h-12 w-12 rounded-lg mb-3 bg-green-200'>
                                <IoChatbubblesOutline className='font-body h-8 w-8 text-green-600' />
                            </div>

                            <h3 className='font-body font-semibold text-xl lg:text-xl xl:text-2xl text-center'>Group Chats for 20+ Professions</h3>

                            <p className='font-body font-medium text-(--accent) text-wrap text-center text-base xl:text-lg'>
                                OGA provides and monitors 20+ active group chats for a variety of professionals, inclduing Computer Science, Medicine, and Acadamia
                            </p>

                        </div>

                        <div className='font-body bg-(--background-dark) rounded-xl shadow-md px-8 py-4 flex flex-col items-center justify-start hover:translate-y-[-20px] transition-transform hover:shadow-lg'>
                            <div className='font-body flex items-center justify-center h-12 w-12 rounded-lg mb-3 bg-yellow-100'>
                                <GoPeople className='font-body h-8 w-8 text-yellow-600' />
                            </div>

                            <h3 className='font-body font-semibold text-lg lg:text-xl xl:text-2xl text-center'>ISPARC</h3>

                            <p className='font-body font-medium text-(--accent) text-wrap text-center text-base xl:text-lg'>
                                The 'Islamic Symposium of Professionals in Academia, Research and across Careers', is an event hosted by OGA to bring together scholars and professionals from various fields.
                            </p>

                        </div>

                        <div className='font-body bg-(--background-dark) rounded-xl shadow-md px-8 py-4 flex flex-col items-center justify-start hover:translate-y-[-20px] transition-transform hover:shadow-lg'>
                            <div className='font-body flex items-center justify-center h-12 w-12 rounded-lg mb-3 bg-red-200'>
                                <FaRegNewspaper className='font-body h-8 w-8 text-red-600' />
                            </div>

                            <h3 className='font-body font-semibold text-lg lg:text-xl xl:text-2xl text-center'>OGA Newsletter</h3>

                            <p className='font-body font-medium text-(--accent) text-wrap text-center text-base xl:text-lg'>
                                A free newsletter keeping you updated on the latest news and events from OGA, and other professional opportunities.
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
            
            {/* <div id='testimonials' className='font-body w-full flex flex-col items-center justify-center bg-white h-auto py-12'>
                
                    <div className='font-body w-full h-auto flex flex-col lg:flex-row gap-12 md:gap-2 items-center justify-start relative'>
                        <div className='flex flex-col items-center justify-center lg:absolute lg:left-[50%] lg:-translate-x-1/2 lg:top-1 '>
                            <h3 className='font-body text-lg md:text-xl font-semibold tracking-widest mb-1'>TESTIMONIALS</h3>
                            <p className='font-body text-sm xl:text-base text-center mb-6 md:mb-0'>Hear what our customers say about us</p>
                        </div>

                        <div className='font-body flex flex-col gap-2 items-center justify-center h-auto w-full lg:w-2/5 mb-6 md:mb-0 relative'>
                            <div className='font-body flex flex-col items-start justify-center h-auto mb-8'>
                                <img className='font-body h-96 md:h-[410px] lg:h-[400px] xl:h-[420px] object-cover w-80 md:w-[410px] lg:w-80 2xl:w-96 z-10 mt-16 mb-1' src={testimonials[testimonialIndex].image} />

                                <p className='font-body text-white font-medium text-2xl md:text-xl xl:text-2xl z-10'>{testimonials
                                    [testimonialIndex].name}</p>

                                <p className='font-body text-white text-lg z-10'>{testimonials
                                    [testimonialIndex]?.country}</p>
                            </div>
                            

                            <div className='font-body h-full w-7/12 lg:w-2/3 self-start bg-gradient-to-b absolute top-0 from-[#1a7071] to-[#32E1E5] min-h-[550px]'>

                            </div>
                        </div>

                        <div className='w-10/12 lg:w-1/2 xl:w-2/5 h-auto flex flex-col items-center justify-center mb-1 relative md:mt-8'>
                            <div className='w-full flex flex-col items-center justify-center relative h-auto py-10'>
                                <BiSolidQuoteLeft className="text-[var(--secondary-color)] h-16 w-16 absolute top-2 left-2" />
                                <h3 className='font-body text-[var(--secondary-color)] font-bold text-4xl md:text-5xl mt-8 text-center'>{testimonials[testimonialIndex].header}</h3>
                                <h4 className='font-body text-gray-500 font-medium text-base md:text-lg xl:text-xl mb-8 text-center'>{testimonials[testimonialIndex].content}</h4>
                                <BiSolidQuoteRight className="text-[var(--secondary-color)] h-16 w-16 absolute right-2 bottom-2" />
                            </div>
                            <TestimonialPagination 
                                testimonialIndex={testimonialIndex}
                                onIndexChange={setTestimonialIndex}
                                />
                        </div>      
                    </div>
            </div> */}

            {/* <div id='how-it-works' className='font-body w-full h-auto lg:h-screen flex flex-col items-center bg-[var(--medium-gray)] px-4 xl:px-16 py-12'>
                <div className="font-body w-full h-auto lg:w-11/12 flex flex-col items-center justify-start">    
                        <h3 className='font-body text-lg md:text-xl font-semibold tracking-widest self-start'>HOW IT WORKS</h3>
                        <p className='font-body  text-lg text-gray-500 lg:text-xl text-center self-start'>Getting the tests you need should be effortless. Here is the simple process:</p>
                        <button onClick={()=>navigate('/dashboard/All')} className='font-body text-white bg-[var(--secondary-color)] px-6 py-2 rounded-full mt-4 mb-8 self-start text-xl lg:text-2xl font-medium'>Get Started</button>
                </div>                  
                <div className='w-full h-full lg:w-11/12 flex flex-col lg:flex-row lg:justify-between gap-1 lg:gap-12 relative'>

                                    <svg
                                    className="hidden 2xl:block absolute top-[-100px] left-0 w-full h-full pobody-events-none"
                                    viewBox="0 0 800 500"
                                    preserveAspectRatio="none"
                                    >
                                        <defs>
                                            <filter id="shadow-2xl" x="-50%" y="-50%" width="200%" height="200%">
                                            <feDropShadow dx="2" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.3"/>
                                            </filter>
                                        </defs>
                                    <path
                                        className="stroke-cyan-500"
                                        d="M 0 350 Q 150 350 200 300 Q 300 200 450 250 Q 550 300 650 50 "
                                        strokeWidth="4"
                                        fill="none"
                                        filter="url(#shadow-2xl)"
                                        strokeLinecap="round"
                                    />
                                    </svg>

                                    <svg
                                    className="hidden lg:block 2xl:hidden absolute top-[-100px] left-0 w-full h-full pobody-events-none"
                                    viewBox="0 0 800 500"
                                    preserveAspectRatio="none"
                                    >
                                        <defs>
                                            <filter id="shadow-lg" x="-50%" y="-50%" width="200%" height="200%">
                                            <feDropShadow dx="2" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.3"/>
                                            </filter>
                                        </defs>
                                    <path
                                        stroke="#06b6d4"
                                        d="M 0 300 Q 150 350 200 300 Q 300 200 450 250 Q 550 300 650 50"
                                        strokeWidth="4"
                                        fill="none"
                                        filter="url(#shadow-lg)"
                                        strokeLinecap="round"
                                    />
                                    </svg>


                                <svg 
                                    className="lg:hidden absolute top-0 left-3 h-full pobody-events-none"
                                    style={{ zIndex: 0 }}
                                    preserveAspectRatio="none"
                                    viewBox="0 0 100 600"
                                >
                                    <defs>
                                        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                                        <feDropShadow dx="2" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.3"/>
                                        </filter>
                                    </defs>
                                    <path
                                    d="M 25 40 Q 40 150, 25 280 T 25 450"
                                    stroke="#06b6d4"
                                    strokeWidth="4"
                                    fill="none"
                                    strokeLinecap="round"
                                    filter="url(#shadow)"
                                    />
                                </svg>
                        
                        <div className='w-auto lg:w-1/4 lg:self-end flex flex-col items-start justify-center md:gap-4 h-auto p-4 relative'>
                            <h4 className='absolute text-gray-200 font-extrabold text-[130px] lg:text-[150px] xl:text-[180px] top-[-10px] lg:top-[-70px] xl:top-[-50px] right-2 lg:right-12 xl:right-20 z-0'>1</h4>
                            <div className='bg-white rounded-xl w-12 lg:w-16 h-12 lg:h-16 flex items-center justify-center z-0 shadow-lg'><div className='bg-gray-300 rounded-full w-6 lg:w-8 h-6 lg:h-8 z-10'></div></div>
                            <h3 className='font-body font-bold text-lg md:text-xl xl:text-2xl mb-1 z-10'>Order & Select</h3>

                            <p className='font-body text-gray-500 text-base xl:text-lg text-left z-10'>
                                You have control. Easily access our platform 24/7 to browse, select, and order your diagnostic tests from
                                the facility of your choice. Book online or on-call from your location—wherever and whenever is convenient
                                for you.
                            </p>
                        </div>

                        <div className='w-auto lg:w-1/4 lg:self-center flex flex-col items-start justify-center gap-1 h-auto p-4 relative'>
                            <h4 className='absolute text-gray-200 font-extrabold text-[130px] lg:text-[150px] xl:text-[180px] top-[-15px] lg:top-[-100px] xl:top-[-70px] right-2 lg:right-6 xl:right-8 2xl:right-4 z-0'>2</h4>
                            <div className='bg-white rounded-xl w-12 lg:w-16 h-12 lg:h-16 flex items-center justify-center z-0 shadow-lg'><div className='bg-gray-300 rounded-full w-6 lg:w-8 h-6 lg:h-8 z-10'></div></div>
                            <h3 className='font-body font-bold text-lg md:text-xl xl:text-2xl mb-1 z-10'>Collect & Transport</h3>
                            <p className='font-body text-gray-500 text-base xl:text-lg text-left z-10'>
                                We come to you. A qualified, certified professional will collect your sample at your preferred location
                                (health facility, home, office, etc.) at the scheduled time and ensure its secure and prompt transport to the lab.
                            </p>
                        </div>

                        <div className='w-auto lg:w-1/4 lg:self-start flex flex-col items-start justify-center gap-1 h-auto p-4 relative'>
                            <h4 className='absolute text-gray-200 font-extrabold text-[130px] lg:text-[150px] xl:text-[180px] top-[-15px] lg:top-[-110px] xl:top-[-70px] right-2 z-0'>3</h4>
                            <div className='bg-white rounded-xl w-12 lg:w-16 h-12 lg:h-16 flex items-center justify-center z-0 shadow-lg'><div className='bg-gray-300 rounded-full w-6 lg:w-8 h-6 lg:h-8 z-10'></div></div>
                            <h3 className='font-body font-bold text-lg md:text-xl xl:text-2xl mb-1 z-10'>Receive Results</h3>

                            <p className='font-body text-gray-500 text-base xl:text-lg text-left z-10'>
                                Results, fast. Receive your lab results quickly and securely through the CO-LAB platforms on your device.
                                You'll get instant notification the moment they are available.
                            </p>
                        </div>
                
                </div>

                

            </div> */}

            <div id='our_team' className='font-body w-full flex flex-col items-center justify-center bg-(--background-dark) h-auto px-4 xl:px-16 py-12'>
                
            </div>


            <div id='news' className='font-body w-full flex flex-col items-center justify-center bg-(--background) h-auto px-4 xl:px-16 py-12'>
                <div className='font-body w-full lg:w-11/12 flex flex-col items-center justify-center'>
                                    <h3 className='font-body text-lg md:text-xl font-medium text-(--neutral) tracking-widest'>LATEST NEWS</h3>
                                    <p className='font-body  text-sm text-(--accent) lg:text-base text-center'>Read more about what's been going on!</p>
                                    
                                    <div className='font-body flex overflow-x-auto w-full h-auto no-scrollbar relative wrapper justify-start items-center'>
                                        {/* <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[var(--medium-gray)] to-transparent pobody-events-none z-10"></div> */}

                                        <div className='font-body flex animate-scroll'>
                                            <div className='font-body h-auto flex items-center justify-center gap-6 mt-4 pr-6 py-10'>
                                                {news?.map((item, index) => {
                                                    return (
                                                        <div key={`${index}.1`} className='font-body flex flex-col items-center justify-start h-auto w-80 border border-[#ccc] rounded-[4px]'>
                                                            <div className='w-full h-52'>
                                                                <img src={item.image} className='font-body h-full w-full object-cover rounded-t-[4px]' />
                                                            </div>
                                                            
                                                            <div className='font-body bg-(--background-light) h-28 w-full flex flex-col gap-1 py-1 px-4 items-start justify-center rounded-b-[4px]'>
                                                                <h3 className='font-heading text-center text-xs md:text-base xl:text-lg text-black'>{item.hook}</h3>
                                                                <p className='font-body text-center font-medium cursor-pointer text-xs md:text-sm text-(--accent)'>Read More</p>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>

                                            <div className='font-body h-auto flex items-center justify-center gap-6 mt-4 pr-6 py-10'>
                                                {news?.map((item, index) => {
                                                    return (
                                                        <div key={`${index}.1`} className='font-body flex flex-col items-center justify-start h-auto w-80 border border-[#ccc] rounded-[4px]'>
                                                            <div className='w-full h-52'>
                                                                <img src={item.image} className='font-body h-full w-full object-cover rounded-t-[4px]' />
                                                            </div>
                                                            
                                                            <div className='font-body bg-(--background-light) h-28 w-full flex flex-col gap-1 py-1 px-4 items-start justify-center rounded-b-[4px]'>
                                                                <h3 className='font-heading text-center text-xs md:text-base xl:text-lg text-black'>{item.hook}</h3>
                                                                <p className='font-body text-center font-medium cursor-pointer text-xs md:text-sm text-(--accent)'>Read More</p>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>

                                        
                                        </div>
                                        {/* <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[var(--medium-gray)] to-transparent pointer-events-none z-10"></div> */}

                                    </div>

                </div>

            </div>

            <div id='membership' className='font-body w-full flex flex-col items-center justify-center bg-(--background-dark) h-auto px-4 xl:px-16 py-12'>
                    <div className='font-body w-full lg:w-11/12 flex flex-col items-center justify-center gap-2'>
                                <h3 className='font-body text-lg md:text-xl font-medium tracking-widest text-(--neutral)'>SUPPORT US</h3>
                                <p className='font-body  text-sm text-(--accent) lg:text-base text-center'>Alhamdulillah, there are many ways you can support OGA including</p>

                                <div className='grid md:grid-cols-3 w-full gap-10 mt-8'>
                                    <div className='relative flex flex-col items-start justify-start gap-2 bg-(--background) p-5 box-border rounded-md border border-[#ccc] hover:border-(--accent) duration-300'>
                                        <div className='w-full flex items-end justify-between mb-2'>
                                            <h3 className='font-heading text-black font-medium text-lg xl:text-2xl m-0'>Become a Member</h3>
                                            <BiDonateHeart className='font-body h-16 w-16 text-(--bg-accent)' />
                                        </div>
                                        
                                        <p className='font-body text-(--neutral) text-xs lg:text-sm text-wrap text-left'>By joining our Membership ($10/year) OR donating any amount to support our community’s ongoing Programming through this link/our email below!</p>
                                    </div>

                                    <div className='relative flex flex-col items-start justify-start gap-2 bg-(--background) p-5 box-border rounded-md border border-[#ccc] hover:border-(--accent) duration-300'>
                                        <div className='w-full flex items-end justify-between mb-2'>
                                            <h3 className='font-heading text-black font-medium text-lg xl:text-2xl m-0'>Engage Socials</h3>
                                            <IoShareSocialOutline className='font-body h-16 w-16 text-(--bg-accent)' />
                                        </div>
                                        
                                        <p className='font-body text-(--neutral) text-xs lg:text-sm text-wrap text-left'>By following, engaging and sharing our socials and posts across your feed on Facebook, Instagram, LinkedIn and WhatsApp via our Linktr.ee here!</p>
                                    </div>

                                    <div className='relative flex flex-col items-start justify-start gap-2 bg-(--background) p-5 box-border rounded-md border border-[#ccc] hover:border-(--accent) duration-300'>
                                        <div className='w-full flex items-end justify-between mb-2'>
                                            <h3 className='font-heading text-black font-medium text-lg xl:text-2xl m-0'>Join a Chapter</h3>
                                            <PiHandsPraying className='font-body h-16 w-16 text-(--bg-accent)' />
                                        </div>
                                        
                                        <p className='font-body text-(--neutral) text-xs lg:text-sm text-wrap text-left'>By starting or joining an OGA Chapter in your Community to amplify OGA’s Vision through ongoing programming in your locality through the link here!</p>
                                    </div>
                            </div>

                            <button className="bg-(--accent) mt-4 text-white text-sm md:text-base rounded-full font-body cursor-pointer py-2 px-4 transition duration-300 hover:bg-(--accent-hover)">
                                Become a Member
                            </button>
                    </div>
            </div>

            <div id='partners' className='font-body w-full flex flex-col items-center justify-center bg-(--background) h-auto px-4 xl:px-16 py-12'>
                <div className='font-body w-full lg:w-11/12 flex flex-col items-center justify-center'>
                                <h3 className='font-body text-lg md:text-xl font-medium tracking-widest text-(--neutral)'>OUR PARTNERS</h3>
                                <p className='font-body  text-sm text-(--accent) lg:text-base text-center'>See below a list of our trusted partners.</p>

                                <div className='font-body w-full h-auto flex flex-col md:flex-row items-center justify-evenly gap-4 mt-8 flex-wrap'>
                                    {partners.map((partner, index) => (
                                        <div key={index} className='font-body w-20 lg:w-24 h-auto flex items-center justify-center'>
                                            <img className='font-body h-full object-contain rounded-full' src={partner} alt={`Partner ${index + 1}`} />
                                        </div>
                                    ))}
                                </div>
                </div>

            </div>

            {/* <div id='contact' className='font-body w-full flex flex-col items-center justify-center bg-white h-auto px-4 xl:px-16 pt-12'>
                <div className='font-body w-full lg:w-11/12 xl:w-10/12 grid md:grid-cols-2 gap-8'>
                    <div className='font-body flex flex-col items-start justify-center gap-4'>
                        <h3 className='font-body text-lg md:text-xl font-semibold tracking-widest'>Join OGA Today</h3>
                        <h3 className='font-body text-[var(--secondary-color)] font-bold text-3xl xl:text-4xl 2xl:text-5xl'>ACCESS CO-LAB ANYWHERE</h3>

                        <div className='font-body w-auto flex items-center justify-center gap-4 mt-4'>
                            <a target='_blank' href="https://play.google.com/store/apps/details?id=acubbed.colab.app">
                                
                            </a>

                            <a target='_blank' href="https://apps.apple.com/us/app/co-lab-health/id6747808897">
                                
                            </a>
                        </div>  
                    </div>

                    <div className='font-body flex items-center justify-center h-96 w-auto'>
                        <img className='font-body h-full object-contain' src={subscribe_bro} alt="Subscribe" />
                    </div>
                                    
                </div>
            </div> */}

        </section>
    )
}

export default LandingPage