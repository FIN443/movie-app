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
        style={{
          backgroundImage: `url(${backgroundImage})`,
          opacity: 0.4,
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: "100vw",
          zIndex: "-1",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className={styles.content}>
        <img src={coverImg} alt={title} />
        <h1>{title}</h1>
        <h3>{rating} / 10</h3>
        <h4>{runtime} min</h4>
        <h4>Genres</h4>
        <ul>
          {genres ? genres.map((g, index) => <li key={index}>{g}</li>) : genre}
        </ul>
        <p>{description}</p>

        {trailerCode ? (
          <div>
            <h4>Trailer</h4>
            <iframe
              width="720"
              height="480"
              src={`https://www.youtube.com/embed/${trailerCode}?playlist=${trailerCode}`}
              frameBorder="0"
            ></iframe>
          </div>
        ) : null}
      </div>
    </div>
  );
}

MovieDetail.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
  genre: PropTypes.string,
  description: PropTypes.string.isRequired,
};

export default MovieDetail;
