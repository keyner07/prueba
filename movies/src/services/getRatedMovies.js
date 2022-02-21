import {API_KEY, API_URL} from './settings'

const fromApiResponseToMovies = apiResponse => {
  const {results, total_results } = apiResponse;
  if (Array.isArray(results)) {
    const movies = results.map(movie => {
      const {title: name, original_language: language, release_date: date, poster_path: image, vote_average: vote, id, rating} = movie;
      return { name, id, language, date, image, vote, rating }
    })
    return {movies, total_results}
  }
  return { movies: [], total_pages: 1 }
}

export default async function getNowPlaying(page = 1) {
  const apiURL = `${API_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&sort_by=created_at.asc&page=${page}`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then(fromApiResponseToMovies)
    .catch(err => console.error(err))
}