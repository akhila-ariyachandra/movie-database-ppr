import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto flex items-center px-4 py-4">
        <Link href="/" className="mr-8 text-2xl font-bold">
          MovieDB
        </Link>
        <nav className="flex space-x-6">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center hover:text-gray-300">
              Movies <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/movies/popular">Popular</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/movies/now-playing">Now Playing</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/movies/upcoming">Upcoming</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/movies/top-rated">Top Rated</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center hover:text-gray-300">
              TV Shows <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/tv-shows/popular">Popular</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/tv-shows/airing-today">Airing Today</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/tv-shows/on-tv">On TV</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/tv-shows/top-rated">Top Rated</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center hover:text-gray-300">
              People <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/people/popular">Popular People</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  );
};

export default Header;
