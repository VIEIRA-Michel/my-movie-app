import { getMovieByPath } from "@/utils/movieClient";
import React from "react";
import styles from "./SimilarMovies.module.scss";
import MediaCard from "../media-card/MediaCard";

const SimilarMovies = async ({ movieId }) => {
  const { results } = await getMovieByPath(`/movie/${movieId}/similar`);
  return <div className={styles.similar}>
    <div className={styles.list}>
        {results.slice(0, 6).map((movie) => (
            <MediaCard media={movie} key={movie.id} />
        ))}
    </div>
  </div>;
};

export default SimilarMovies;
