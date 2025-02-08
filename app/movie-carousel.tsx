"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { slugify } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const MovieCarousel = ({
  movies,
}: {
  movies: {
    id: number;
    title: string;
    posterPath: string;
    backdropPath: string;
    voteAverage: number;
    releaseDate: string;
    overview: string;
  }[];
}) => {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <Carousel className="relative mx-auto w-full max-w-7xl" setApi={setApi}>
      <CarouselContent>
        {movies.map((movie, index) => (
          <CarouselItem key={movie.id}>
            <Link href={`/movie/${movie.id}/${slugify(movie.title)}`}>
              <Card className="cursor-pointer border-0">
                <CardContent className="relative aspect-video overflow-hidden p-0">
                  <Image
                    src={movie.backdropPath}
                    alt={movie.title}
                    fill
                    className="object-cover"
                    unoptimized={index !== 0} // Only optimize the first image
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="mb-2 text-2xl font-bold">{movie.title}</h3>

                    <div className="mb-2 flex items-center">
                      <Star className="mr-1 h-5 w-5 text-yellow-400" />

                      <span className="mr-2">
                        {movie.voteAverage.toFixed(1)}
                      </span>
                      <span>{new Date(movie.releaseDate).getFullYear()}</span>
                    </div>

                    <p className="line-clamp-2 text-sm">{movie.overview}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-between p-4">
        <Button
          variant="outline"
          size="icon"
          className="pointer-events-auto h-8 w-8 rounded-full bg-black/50 text-white hover:bg-black/70"
          onClick={(e) => {
            e.preventDefault();
            api?.scrollPrev();
          }}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous slide</span>
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="pointer-events-auto h-8 w-8 rounded-full bg-black/50 text-white hover:bg-black/70"
          onClick={(e) => {
            e.preventDefault();
            api?.scrollNext();
          }}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>
    </Carousel>
  );
};

export default MovieCarousel;
