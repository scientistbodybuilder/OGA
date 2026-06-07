import { HashLink } from 'react-router-hash-link';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
    return(
        <header className="bg-(--background) h-14 py-2 px-6 shadow-md w-full flex items-center justify-between fixed z-50">
            <div className="flex items-center gap-3">
                <img src='/oga-logo.png' alt="OGA Logo" className="h-10 w-10 rounded-full cursor-pointer" onClick={()=> navigate('/')} />
                <h1 className="text-xl font-heading text-(--accent) hidden md:block">Our Golden Age</h1>
            </div>
            
            <nav>
                <ul className="flex space-x-4 font-body">
                    <li><HashLink smooth to="/#about" className="text-(--accent) hover:text-(--accent-hover) text-sm md:text-base">About</HashLink></li>
                    <li><HashLink smooth to="/#community" className="text-(--accent) hover:text-(--accent-hover) text-sm md:text-base">Community</HashLink></li>
                    <li><HashLink smooth to="/#news" className="text-(--accent) hover:text-(--accent-hover) text-sm md:text-base">News</HashLink></li>
                    <li><HashLink smooth to="/#membership" className="text-(--accent) hover:text-(--accent-hover) text-sm md:text-base">Membership</HashLink></li>
                </ul>
            </nav>
            <a href="https://chat.whatsapp.com/EY0IqFnaRga8NAyUEFA4bD" target="_blank" className="bg-(--accent) text-white text-sm md:text-base rounded-full font-body cursor-pointer py-2 px-4 transition duration-300 hover:bg-(--accent-hover)">
                Join OGA
            </a>
        </header>
    )
}
export default Header