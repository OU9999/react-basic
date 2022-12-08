import { useState, useEffect } from "react";
import Movie from "../componets/Movie";
import Loading from "../componets/Loading";
import styles from "./Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovie = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(movies);
  return (
    <div className="container">
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.main}>
          <div className={styles.title}>
            {/* <FontAwesomeIcon icon="fa-brands fa-react" /> */}
            <FontAwesomeIcon icon={faReact} />
            <span> React Basic</span>
          </div>
          {movies.map((movie) => (
            <Movie
              id={movie.id}
              key={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
