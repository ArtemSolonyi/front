import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getMovie} from "../../models/Movie/movie.reducer";
import MovieItem from "../../components/MovieItem/MovieItem";

function MoviePage() {
    const dispatch = useDispatch()
    const movieState = useSelector((state) => state.movieReducer.movie)
    useEffect(() => {
        dispatch(getMovie(window.location.href.split('/').at(-1)))
    }, [])

    return (
        <div>{movieState && <MovieItem/>}</div>
    )
}

export default MoviePage;

