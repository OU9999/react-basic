import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../componets/Loading";
import styles from "./Detail.module.css";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.container}>
          <img
            className={styles.container__background}
            src={movie.background_image}
          />
          <div className={styles.content}>
            <div className={styles.content__column}>
              <img
                className={styles.content__column__img}
                src={movie.large_cover_image}
              />
            </div>
            <div className={styles.content__column}>
              <h1>{movie.title}</h1>
              <p>{movie.description_full}</p>
              <div className={styles.content__column__genres}>
                {movie.genres &&
                  movie.genres.map((g) => (
                    <span className={styles.content__column__g} key={g}>
                      {g}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
