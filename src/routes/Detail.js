import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieDetail from "../components/MovieDetail";
import styles from "./Detail.module.css";

function Detail() {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const getMovie = async (movieId) => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}`
    );
    const json = await response.json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie(params.id);
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {loading ? (
        <div className={styles.loader}>
          <h1>Loading...</h1>
        </div>
      ) : (
        <MovieDetail
          backgroundImage={movie.background_image}
          coverImg={movie.large_cover_image}
          title={movie.title}
          rating={movie.rating}
          runtime={movie.runtime}
          genres={movie.genres}
          genre={movie.genre}
          description={movie.description_full}
          trailerCode={movie.yt_trailer_code}
        />
      )}
    </div>
  );
}

export default Detail;
