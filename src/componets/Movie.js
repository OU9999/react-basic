import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div className={styles.content}>
      <div className={styles.content__column}>
        <Link to={`/movie/${id}`}>
          <img src={coverImg} alt={title} />
        </Link>
      </div>
      <div className={styles.content__column}>
        <h2 className={styles.content__column__title}>
          <Link
            className={styles.content__column__title__link}
            to={`/movie/${id}`}
          >
            {title}
          </Link>
        </h2>
        <p className={styles.content__column__summary}>{summary}</p>
        <div className={styles.content__column__genres}>
          {genres &&
            genres.map((g) => (
              <span className={styles.content__column__g} key={g}>
                {g}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  coverImg: propTypes.string,
  title: propTypes.string,
  summary: propTypes.string,
  genres: propTypes.arrayOf(propTypes.string),
};

export default Movie;
