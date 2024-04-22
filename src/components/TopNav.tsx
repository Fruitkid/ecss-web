import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

interface NavLink {
  title: string;
  href: string;
}

interface Props {
  links: NavLink[];
  currentPage?: string;
}

export function TopNav({ links, currentPage }: Props) {
  return (
    <NavigationMenu className="fixed top-0 left-0 right-0 z-50 bg-background">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            ECSS
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <p>Helloo, not styled properly yet</p>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {links.map((link) => (
          <NavigationMenuItem key={link.href}>
            <NavigationMenuLink
              href={link.href}
              className={cn(
                "flex items-center px-4 py-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700",
                link.href === currentPage
                  ? "text-primary font-semibold"
                  : "text-gray-600 dark:text-gray-400"
              )}
            >
              {link.title}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
