import Link from "next/link";

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  const response = await fetch(URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();

  return (
    <div>
      {
        movies.map((movie) => (
          <div key={movie.id}>
            <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
          </div>
        ))
      }
    </div>
  );
}