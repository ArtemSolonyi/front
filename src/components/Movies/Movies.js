import {useDispatch, useSelector} from "react-redux";


function Movies() {
    const movies = useSelector((state)=>state.movieReducer.movies)
    return (<div>
        {movies && movies.map((movie)=><div key={movie._id}>{movie.title}{movie.description}</div>)}
    </div>)
}

export default Movies;