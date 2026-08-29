import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { HashLink } from 'react-router-hash-link'

export interface NavigationMenuComponentProps {
    componentMap: Record<string,NavMenuComponent[]>
}

interface NavMenuComponent {
    title: string
    href: string
}


const NavigationMenuComponent = ({ componentMap }: NavigationMenuComponentProps) => {
    return (
        <NavigationMenu className="">
            <NavigationMenuList>
                {Object.entries(componentMap).map(([key, components]) => (
                    <NavigationMenuItem className="rounded-sm!" key={key}>
                        <NavigationMenuTrigger className="text-(--accent-color) hover:text-(--accent-hover) hover:bg-(--accent-color)/20! focus:bg-(--accent-color)/20! data-popup-open:bg-(--accent-color)/20! data-popup-open:hover:bg-(--accent-color)/20! data-open:bg-muted/50 data-open:hover:bg-muted data-open:focus:bg-muted cursor-pointer">
                            {key}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="bg-(--background-color)!">
                            <ul className="grid grid-cols-1 w-[300px] gap-2">
                                {components.map((comp, index) => (
                                    <li className="" key={index}>
                                        <NavigationMenuLink className="hover:bg-(--accent-color)/20 focus:bg-(--accent-color)/20" render={<HashLink className="text-(--accent-color) hover:text-(--accent-hover)" smooth to={comp.href}>{comp.title}</HashLink>} />
                                    </li>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default NavigationMenuComponent