import ky from "ky";

const token = process.env.MOVIE_DATABASE_READ_TOKEN;

if (!token) {
  throw new Error("No token provided");
}

export const api = ky.create({
  prefixUrl: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
