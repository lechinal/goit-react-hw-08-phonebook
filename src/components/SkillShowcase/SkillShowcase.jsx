import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './SkillShowcase.module.css';

export default function SkillShowcase() {
  return (
    <div className={styles.buttons}>
      <Link
        to="https://www.linkedin.com/in/alin-lechintan-2582b181/"
        target="_blank"
      >
        <button className={styles.button}>
          <FaLinkedin className={styles.icon} />
        </button>
      </Link>
      <Link to="https://github.com/lechinal" target="_blank">
        <button className={styles.button}>
          <FaGithub className={styles.icon} />
        </button>
      </Link>
    </div>
  );
}
