"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const SearchBar = () => {
  return (
    <Suspense fallback={<SearchBarBase />}>
      <SearchBarWithQuery />
    </Suspense>
  );
};

export default SearchBar;

const SearchBarBase = ({ value }: { value?: string }) => {
  return (
    <div className="bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <form className="flex items-center" action="/search">
          <Input
            type="search"
            name="query"
            placeholder="Search for a movie, tv show, person..."
            className="mr-2 flex-grow text-white"
            defaultValue={value}
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

const SearchBarWithQuery = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  return <SearchBarBase value={query ?? undefined} />;
};
