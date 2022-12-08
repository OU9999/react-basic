import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import styles from "./Loading.module.css";
function Loading() {
  return (
    <div className={styles.loading}>
      <span>
        <FontAwesomeIcon icon={faReact} />
      </span>
    </div>
  );
}

export default Loading;
