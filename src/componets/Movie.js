import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div className={styles.content}>
      <div className={styles.content__column}>
        <img src={coverImg} alt={title} />
      </div>
      <div className={styles.content__column}>
        <h2>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p className={styles.content__column__summary}>{summary}</p>
        <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul>
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
