/* eslint-disable jsx-a11y/iframe-has-title */
import PropTypes from "prop-types";
import styles from "./MovieDetail.module.css";

function MovieDetail({
  backgroundImage,
  coverImg,
  title,
  rating,
  runtime,
  genres,
  genre,
  description,
  trailerCode,
}) {
  return (
    <div>
      <div
        className={styles.movie__background}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>
      <div className={styles.container}>
        <div className={styles.movie__info}>
          <img className={styles.movie__image} src={coverImg} alt={title} />
          <div>
            <h1 className={styles.movie__title}>{title}</h1>
            <h3 className={styles.movie__rating}>{rating} / 10</h3>
            <h4 className={styles.movie__runtime}>{runtime} min</h4>
            <h4 className={styles.movie__genre}>Genres</h4>
            <ul className={styles.movie__genres}>
              {genres
                ? genres.map((g, index) => <li key={index}>{g}</li>)
                : genre}
            </ul>
          </div>
        </div>
        <p className={styles.movie__description}>{description}</p>
        {trailerCode ? (
          <div>
            <h4>Trailer</h4>
            <iframe
              width="720"
              height="480"
              src={`https://www.youtube.com/embed/${trailerCode}`}
              frameBorder="0"
            ></iframe>
          </div>
        ) : null}
      </div>
    </div>
  );
}

MovieDetail.propTypes = {
  backgroundImage: PropTypes.string,
  coverImg: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number,
  genres: PropTypes.arrayOf(PropTypes.string),
  genre: PropTypes.string,
  description: PropTypes.string.isRequired,
  trailerCode: PropTypes.string,
};

export default MovieDetail;
