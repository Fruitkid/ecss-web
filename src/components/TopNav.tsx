import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { ModeToggle } from '@/components/ModeToggle';

export function TopNav() {
    return (
        <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
            <a className="mr-6 hidden lg:flex" href="#">
                <MountainIcon className="h-6 w-6" />
                <span className="sr-only">ECSS</span>
            </a>
            <div className="flex-1 flex justify-center">
                <NavigationMenu className="hidden lg:flex">
                    <NavigationMenuList className="flex justify-between w-full mr-4">
                        <NavigationMenuLink asChild>
                            <a
                                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                                href="/Community"
                            >
                                Community
                            </a>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                            <a
                                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                                href="/"
                            >
                                Opportunities
                            </a>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                            <a
                                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                                href="/Projects"
                            >
                                Projects
                            </a>
                        </NavigationMenuLink>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className="flex justify-end">
                <NavigationMenu className="hidden lg:flex">
                    <NavigationMenuList className="flex justify-end w-full mr-4">
                        <NavigationMenuLink asChild>
                            <a
                                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                                href="/Join"
                            >
                                Join
                            </a>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                            <ModeToggle />
                        </NavigationMenuLink>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <Sheet>
                <SheetTrigger asChild>
                    <Button className="lg:hidden" size="icon" variant="outline">
                        <MenuIcon className="h-6 w-6" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <div className="flex flex-row justify-between">
                    <a href="#">
                        <MountainIcon className="h-10 w-10" />
                    </a>
                    <div className="pr-6">
                    <ModeToggle/>
                    </div>
                    </div>
                        <div className="grid gap-2 py-6">
                            <a className="flex w-full items-center py-2 text-lg font-semibold" href="/Community/">
                                Community
                    </a>
                            <a className="flex w-full items-center py-2 text-lg font-semibold" href="/Opportunities/">
                                Opportunities
                                
                    </a>
                            <a className="flex w-full items-center py-2 text-lg font-semibold" href="/Projects/">
                                Projects
                                
                    </a>
                            <a className="flex w-full items-center py-2 text-lg font-semibold" href="/Join">
                                Join
                                
                    </a>
                    
                      </div>
                </SheetContent>
            </Sheet>
        </header>
    );
}

function MenuIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}


function MountainIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}
