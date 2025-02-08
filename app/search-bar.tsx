import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <form className="flex items-center">
          <Input
            type="search"
            placeholder="Search for a movie, tv show, person..."
            className="mr-2 flex-grow"
          />

          <Button type="submit" variant="secondary">
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
