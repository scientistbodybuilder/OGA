import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookSquare, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { useForm } from 'react-hook-form'
import { HashLink } from 'react-router-hash-link';
const Footer = () => {  

    const { register, handleSubmit } = useForm()
    // const [openPrivacyPolicy, setOpenPrivacyPolicy] = useState(false);
    // const [openTermsAndConditions, setOpenTermsAndConditions] = useState(false);
    const [loading, setLoading] = useState(false);
    // const [messageSentSuccess, setMessageSentSuccess] = useState<boolean | null>(null);

    const sendMessage = async (data: any) => {
        console.log('Sending message: ',data)
        setLoading(true)
        try {
        // const result = await sendMessageContactForm(data)
        // if (result.success) {
        //     setMessageSentSuccess(true)
        // } else {
        //     setMessageSentSuccess(false)
        // }
        // } catch (e) {
        // console.error('Failed to send contact message ', e)
        // setMessageSentSuccess(false)
        } finally {
        setLoading(false)
        }
    }

    return(
        <footer className="bg-(--background-dark) text-(--text) py-6 px-4 w-full h-auto">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img src='/oga-logo.png' alt="OGA Logo" className="h-12 rounded-full mr-3" />
              <h3 className="font-heading text-2xl font-medium text-(--accent)">Our Golden Age</h3>
            </div>
            <p className="font-body text-sm mb-4 text-(--accent)">
              Copyright © 2026 Our Golden Age.
            </p>
            <p className='font-body text-sm text-(--accent)'>All Rights Reserved</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-body text-(--neutral) text-base font-medium lg:text-lg mb-4">NAVIGATION</h3>
            <ul className="space-y-2 text-sm text-(--accent)">
              <li>
                <HashLink smooth to="/#about" className="font-body hover:text-(--accent-hover) transition-colors">About</HashLink>
              </li>
              <li>
                <HashLink smooth to="/#community" className="font-body hover:text-(--accent-hover) transition-colors">Community</HashLink>
              </li>
              <li>
                <HashLink smooth to="/#news" className="font-body hover:text-(--accent-hover) transition-colors">News</HashLink>
              </li>
              <li>
                <HashLink smooth to="/#membership" className="font-body hover:text-(--accent-hover) transition-colors">Membership</HashLink>
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit(sendMessage)}>
            <h3 className="text-(--neutral) font-body font-medium text-base lg:text-lg mb-4">CONTACT</h3>
            
            <div className='font-inter grid grid-cols-2 gap-4 w-full'>
              <input {...register("firstName")} type='text' name='firstName' placeholder='First Name' className='font-body border rounded-sm border-(--accent) px-3 py-1 text-(--accent) text-xs lg:text-sm placeholder:text-(--accent) focus:outline-none' />
              <input {...register("lastName")} type='text' name='lastName' placeholder='Last Name' className='font-body border rounded-sm border-(--accent) px-3 py-1 text-(--accent) text-xs lg:text-sm placeholder:text-(--accent) focus:outline-none' />
              <input {...register("email")} type='text' name='email' placeholder='Email' className='font-body border rounded-sm border-(--accent) px-3 py-1 text-(--accent) text-xs lg:text-sm placeholder:text-(--accent) focus:outline-none' />
              <input {...register("phoneNumber")} type='text' name='phoneNumber' placeholder='Phone Number' className='font-body border rounded-sm border-(--accent) px-3 py-1 text-(--accent) text-xs lg:text-sm placeholder:text-(--accent) focus:outline-none' />
            </div>

            <input {...register("message")} type='text' name='message' placeholder='Message' className='font-body w-full border rounded-sm border-(--accent) px-3 py-2 font-normal text-(--accent) text-xs lg:text-sm mt-4 placeholder:text-(--accent) focus:outline-none' />

            <button type='submit' className='flex items-center justify-center bg-(--accent) hover:bg-(--accent-hover) text-white py-1 cursor-pointer px-4 rounded-full mt-2 transition-colors'>
              {loading ? <img src='/gray_spinner.svg' className='h-6 w-6' /> : 'Send'}
            </button>
            {/* {messageSentSuccess && <p className='text-xs md:text-sm text-(--accent)'>Message sent successfully</p>}
            {messageSentSuccess === false && <p className='text-xs md:text-sm text-(--accent)'>Message did not send</p>} */}
          </form>

        </div>

        
      </div>
            
            <div className="font-body w-full">
                <div className="font-body w-full py-2 flex items-center justify-center gap-4">
                <div className="font-body w-full border-t-2 border-(--accent)"></div>
                <div className="font-body flex items-center justify-center w-auto">
                    <ul className="font-body flex justify-center items-center space-x-6 text-sm">
                        <li className="font-body p-2 rounded-full bg-(--accent) flex items-center justify-center">
                        <Link to={'https://www.instagram.com/our_golden_age'}><RiInstagramFill className="font-body inline-block h-5 w-5 text-white" /></Link>
                        </li>
                        <li className="font-body p-2 rounded-full bg-(--accent) flex items-center justify-center">
                        <Link to={'https://www.facebook.com/OurGoldenAge123'}><FaFacebookSquare className="font-body inline-block h-5 w-5 text-white" /></Link>
                        </li>
                        <li className="font-body p-2 rounded-full bg-(--accent) flex items-center justify-center">
                        <Link to={'https://www.youtube.com/@OurGoldenAge1'}><FaYoutube className="font-body inline-block h-5 w-5 text-white" /></Link>
                        </li>
                        <li className="font-body p-2 rounded-full bg-(--accent) flex items-center justify-center">
                        <Link to={'https://www.linkedin.com/company/our-golden-age/'}><FaLinkedin className="font-body inline-block h-5 w-5 text-white" /></Link>
                        </li>
                        <li className="font-body p-2 rounded-full bg-(--accent) flex items-center justify-center">
                        <Link to={'https://chat.whatsapp.com/EY0IqFnaRga8NAyUEFA4bD'}><FaWhatsapp className="font-body inline-block h-5 w-5 text-white" /></Link>
                        </li>
                    </ul>
                </div>
                <div className="font-body w-full border-t-2 border-(--accent)"></div>

                </div>
            </div>
        </footer>
    )
}

export default Footer