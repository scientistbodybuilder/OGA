// import { HashLink } from 'react-router-hash-link';
// import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate, Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
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
                <a className="text-xl font-heading text-(--accent-color) hidden md:block" href="/">Our Golden Age</a>
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
                                <DropdownMenuItem className="cursor-pointer text-(--accent-color)"
                                    render={<HashLink smooth to="/programming#programs">Programs</HashLink>} >
                                </DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer text-(--accent-color)"
                                    render={<HashLink smooth to="/programming#seminar-library">Seminar Library</HashLink>} >
                                </DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer text-(--accent-color)"
                                    render={<HashLink smooth to="/programming#upcoming-seminars">Upcoming Seminars</HashLink>} >
                                </DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer text-(--accent-color)"
                                    render={<HashLink smooth to="/programming#gallery">Gallery</HashLink>} >
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </li>
                    <li>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center gap-1 font-body text-sm text-(--accent-color) outline-none hover:text-(--accent-hover) md:text-base">
                                Team
                                <ChevronDown aria-hidden="true" className="h-3.5 w-3.5" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="min-w-44 rounded-none border border-[#e5ddd7] bg-(--background-color) font-body">
                                <DropdownMenuItem className="cursor-pointer text-(--accent-color)"
                                    render={<HashLink smooth to="/team#organizational-structure">Organizational Structure</HashLink>} >
                                </DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer text-(--accent-color)"
                                    render={<HashLink smooth to="/team#present-team">Present Team</HashLink>} >
                                </DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer text-(--accent-color)"
                                    render={<HashLink smooth to="/team#past-members">Past Members</HashLink>} >
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </li>
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