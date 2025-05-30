import MovieDetails from "@/components/movie-details/MovieDetails";
import SimilarMovies from "@/components/similar-movies/SimilarMovies";
import { getMovieByPath } from "@/utils/movieClient";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export const dynamic = "force-static";
export const revalidate = 3600;

const MovieIdPage = async ({ params }) => {
  const movie = await getMovieByPath(`/movie/${params.id}`);

  if (!movie.original_title) {
    return notFound();
  }
  return (
    <div>
      <MovieDetails movie={movie} />
      <Suspense fallback={<p>Chargement ...</p>}>
        <SimilarMovies movieId={movie.id} />
      </Suspense>
    </div>
  );
};

export default MovieIdPage;
