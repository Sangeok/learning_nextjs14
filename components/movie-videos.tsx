
async function getVideos(id:string) {
    const response = await fetch(`https://nomad-movies.nomadcoders.workers.dev/movies/${id}/videos`);
    const json = await response.json();
    return json;
}

export default async function MovieVideos({id}:{id:string}) {
    const videos = await getVideos(id);
    return (
        <h6>{JSON.stringify(videos)}</h6>
    )
}