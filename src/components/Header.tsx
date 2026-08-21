// import { HashLink } from 'react-router-hash-link';
// import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate, Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const Header = () => {
    const navigate = useNavigate()
    return(
        <header className="bg-(--background-color) h-14 py-2 px-6 shadow-md w-full flex items-center justify-between fixed z-50">
            <div className="flex items-center gap-3">
                <img src='/oga-logo.png' alt="OGA Logo" className="h-10 w-10 rounded-full cursor-pointer" onClick={()=> navigate('/')} />
                <h1 className="text-xl font-heading text-(--accent-color) hidden md:block">Our Golden Age</h1>
            </div>
            
            <nav>
                <ul className="flex space-x-4 font-body">
                    <li><Link to="/" className="text-(--accent-color) hover:text-(--accent-hover) text-sm md:text-base">Home</Link></li>
                    <li>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center gap-1 font-body text-sm text-(--accent-color) outline-none hover:text-(--accent-hover) md:text-base">
                                Programming
                                <ChevronDown aria-hidden="true" className="h-3.5 w-3.5" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="min-w-44 rounded-none border border-[#e5ddd7] bg-(--background-color) font-body">
                                <DropdownMenuItem onClick={() => navigate('/programming#programs')} className="cursor-pointer text-(--accent-color)">
                                    Programs
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => navigate('/programming#seminar-library')} className="cursor-pointer text-(--accent-color)">
                                    Seminar Library
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => navigate('/programming#upcoming-seminars')} className="cursor-pointer text-(--accent-color)">
                                    Upcoming Seminars
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => navigate('/programming#gallery')} className="cursor-pointer text-(--accent-color)">
                                    Gallery
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </li>
                    <li><Link to="/team" className="text-(--accent-color) hover:text-(--accent-hover) text-sm md:text-base">Team</Link></li>
                    {/* <li><HashLink smooth to="/#news" className="text-(--accent-color) hover:text-(--accent-hover) text-sm md:text-base">News</HashLink></li>
                    <li><HashLink smooth to="/#membership" className="text-(--accent-color) hover:text-(--accent-hover) text-sm md:text-base">Membership</HashLink></li> */}
                </ul>
            </nav>
            <a href="https://chat.whatsapp.com/EY0IqFnaRga8NAyUEFA4bD" target="_blank" className="bg-(--accent-color) text-white text-xs md:text-sm rounded-full font-body cursor-pointer py-2 px-4 transition duration-300 hover:bg-(--accent-hover)">
                Join OGA
            </a>
        </header>
    )
}
export default Header