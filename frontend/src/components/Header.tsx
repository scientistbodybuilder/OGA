import { useNavigate } from 'react-router-dom'
import type { NavigationMenuComponentProps } from './NavigationMenu'
import MobileNavigation from './MobileNavigation'
import NavigationMenuComponent from './NavigationMenu'

const navigationMenuProps: NavigationMenuComponentProps = {
    componentMap: {
        "Home": [
            { title: "About", href: "/#about" },
            { title: "History", href: "/#history" },
            { title: "Impact", href: "/#impact" },
            { title: "Upcoming Events", href: "/#upcoming-events" },
            { title: "Partners", href: "/#partners" }
        ],
        "Programming": [
            { title: "Programs", href: "/programming#programs" },
            { title: "ISPARC", href: "/programming#isparc" },
            { title: "Seminar Library", href: "/programming#seminar-library" },
            { title: "Upcoming Seminars", href: "/programming#upcoming-seminars" },
            { title: "Gallery", href: "/programming#gallery" }
        ],
        "Team": [
            { title: "Organizational Structure", href: "/team#organizational-structure" },
            { title: "Present Team", href: "/team#present-team" },
            { title: "Past Members", href: "/team#past-members" }
        ]
    }
}

const Header = () => {
    const navigate = useNavigate()
    return(
        <header className="bg-(--background-color) h-14 py-2 px-6 shadow-md w-full flex items-center justify-between fixed z-50">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
                <img src='/oga-logo.png' alt="OGA Logo" className="h-10 w-10 rounded-full cursor-pointer" />
                <h3 className="text-xl font-heading text-(--accent-color) hidden md:block">Our Golden Age</h3>
            </div>
            
            <nav className="hidden md:block">
                <NavigationMenuComponent componentMap={navigationMenuProps.componentMap} />
            </nav>
            <MobileNavigation componentMap={navigationMenuProps.componentMap} />
            <a href="https://chat.whatsapp.com/EY0IqFnaRga8NAyUEFA4bD" target="_blank" className="bg-(--accent-color) hidden md:block text-white text-xs md:text-sm rounded-full font-body cursor-pointer py-2 px-4 transition duration-300 hover:bg-(--accent-hover)">
                Join OGA
            </a>
        </header>
    )
}
export default Header