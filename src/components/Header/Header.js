import React from "react";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import MovieSearch from "../movie-search/MovieSearch";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">MyMovieApp</Link>
      </div>
      <div className={styles.navigation}>
        <nav>
          <ul>
            <li>
              <Link href="/series"></Link>Séries
            </li>
            <li>
              <Link href="/movies"></Link>Films
            </li>
          </ul>
        </nav>
      </div>
      <MovieSearch />
      <div>
        <FontAwesomeIcon icon={faUser} />
      </div>
    </header>
  );
};

export default Header;
