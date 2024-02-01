async function getMovies(id:string) {
    const response = await fetch(`https://nomad-movies.nomadcoders.workers.dev/movies/${id}`);
    const json = await response.json();
    return json;
}

export default async function MovieInfo({id}:{id:string}) {
    const movie = await getMovies(id);
    return (
        <h6>{JSON.stringify(movie)}</h6>
    )
}