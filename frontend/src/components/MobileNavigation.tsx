import { HashLink } from 'react-router-hash-link'
import { RxHamburgerMenu } from 'react-icons/rx'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import type { NavigationMenuComponentProps } from './NavigationMenu'

const MobileNavigation = ({ componentMap }: NavigationMenuComponentProps) => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden flex items-center justify-center rounded-md p-2 text-(--accent-color) transition hover:text-(--accent-hover) focus-visible:outline-none">
        <RxHamburgerMenu className="h-5 w-5 cursor-pointer" />
        <span className="sr-only">Open navigation menu</span>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[85vw] max-w-sm border-r border-(--accent-color)/10 bg-(--background-color) p-0"
      >
        <SheetHeader className="border-b border-(--accent-color)/10 px-5 pb-4 pt-5">
          <SheetTitle className="text-left text-(--accent-color)">Navigate</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-5 px-4 py-5">
          {Object.entries(componentMap).map(([section, items]) => (
            <div key={section} className="space-y-2">
              <p className="px-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-(--accent-color)/80">
                {section}
              </p>

              <div className="space-y-1">
                {items.map((item) => (
                  <SheetClose
                    key={item.title}
                    render={
                      <HashLink
                        smooth
                        to={item.href}
                        className="block rounded-md px-3 py-2 text-sm text-(--accent-color) transition hover:bg-(--accent-color)/20 focus:bg-(--accent-color)/20"
                      >
                        {item.title}
                      </HashLink>
                    }
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-auto border-t border-(--accent-color)/10 p-4">
          <a
            href="https://chat.whatsapp.com/EY0IqFnaRga8NAyUEFA4bD"
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center justify-center rounded-full bg-(--accent-color) px-4 py-2.5 text-sm font-medium text-white transition hover:bg-(--accent-hover)"
          >
            Join OGA
          </a>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNavigation
