import { api } from "@/lib/api";
import { getConfiguration } from "@/lib/server-apis";
import { getImageUrl } from "@/lib/utils";
import { unstable_cacheLife as cacheLife } from "next/cache";
import { z } from "zod";
import MovieCarousel from "./movie-carousel";

const Home = async () => {
  const [configuration, { results: popularMovies }] = await Promise.all([
    getConfiguration(),
    getPopularMovies(),
  ]);

  return (
    <div>
      <MovieCarousel
        movies={popularMovies.map((movie) => ({
          id: movie.id,
          title: movie.title,
          posterPath: getImageUrl(
            configuration,
            movie.poster_path,
            "poster",
            "w500",
          ),
          backdropPath: getImageUrl(
            configuration,
            movie.backdrop_path,
            "backdrop",
            "w1280",
          ),
          voteAverage: movie.vote_average,
          releaseDate: movie.release_date,
          overview: movie.overview,
        }))}
      />
    </div>
  );
};

export default Home;

const getPopularMovies = async () => {
  "use cache";
  cacheLife("hours");

  const response = await api.get("movie/popular").json();

  return await z
    .object({
      page: z.number(),
      results: z.array(
        z.object({
          adult: z.boolean(),
          backdrop_path: z.string(),
          genre_ids: z.array(z.number()),
          id: z.number(),
          original_language: z.string(),
          original_title: z.string(),
          overview: z.string(),
          popularity: z.number(),
          poster_path: z.string(),
          release_date: z.string(),
          title: z.string(),
          video: z.boolean(),
          vote_average: z.number(),
          vote_count: z.number(),
        }),
      ),
      total_pages: z.number(),
      total_results: z.number(),
    })
    .parseAsync(response);
};
