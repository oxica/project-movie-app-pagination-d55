import './sass/main.scss';
import { getPopularMovies } from './js/api/movieApi';
import movieCardTemplate from './js/components/movieCard.hbs';
import { generateImgPath } from './js/utils';

const moviesListRef = document.querySelector('.movies');

const renderMovieList = movies => {
  const moviesList = movies.map(movie => {
    const { original_title, poster_path } = movie;
    return movieCardTemplate({ original_title, poster: generateImgPath(poster_path) });
  });
  //   console.log(data);
  //   const firstMovie = movies[0];
  //   firstMovie.poster = generateImgPath(firstMovie.poster_path);
  //   const firstMovieTemplate = movieCardTemplate(firstMovie);
  //   console.log(firstMovieTemplate);

  const movieListTemplate = moviesList.join('');
  moviesListRef.innerHTML = movieListTemplate;
};

getPopularMovies().then(({ data }) => {
  const { results: movies } = data;
  renderMovieList(movies);
});
