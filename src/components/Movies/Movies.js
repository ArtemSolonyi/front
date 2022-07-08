import {useSelector} from "react-redux";

import '../Selector/BlockSelector/BlockSelector.css'
import MoviePreview from "../MoviePreview/MoviePreview";

function Movies() {
    const movies = useSelector((state)=>state.movieReducer.movies)
    return (<div className={"row background-row-movies"} >
        {movies && movies.map((movie)=><div className={"column"} key={movie.id}>
            <MoviePreview slug={movie.slug} id={movie.id} title={movie.title} description={movie.description} rating={movie.rating}></MoviePreview>
        </div>)}
    </div>)
}


export default Movies;