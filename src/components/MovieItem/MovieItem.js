import {useDispatch, useSelector} from "react-redux";
import StarRating from "../StarRating/StarRating";
import {useState} from "react";
import {setRating} from "../../models/Movie/movie.reducer";



function MovieItem() {
    const movieState = useSelector((state) => state.movieReducer.movie)
    const dispatch = useDispatch()

    const setRatingMovie = (event) => {
        dispatch(setRating({movieId:movieState.id,rating:Number(event.target.value)}))

    }
    return (<div>
        <div className={'movie-item'}>
        <img
            width={300}
            height={400}
            src={'https://m.media-amazon.com/images/I/81Mahls3HnL._SL1500_.jpg'}
            alt={'s'}></img>
        </div>
        {movieState.title} {movieState.description} {movieState.rating}/5
        <StarRating
            valueStars={5}
            setRating={movieState.rating}
            onChangeRating={setRatingMovie}/>
    </div>)
}


export default MovieItem;

