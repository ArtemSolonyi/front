import {useSelector} from "react-redux";
import StarRating from "../StarRating/StarRating";
import {useState} from "react";


function MovieItem() {
    const movieState = useSelector((state) => state.movieReducer.movie)
    const [rating,setRating] = useState(movieState.rating)

    const setRatingMovie = (event) => {

        setRating(event.target.value)
    }
    return (<div>
        <div className={'movie-item'}>
        <img
            width={300}
            height={400}
            src={'https://m.media-amazon.com/images/I/81Mahls3HnL._SL1500_.jpg'}
            alt={'s'}></img>
        </div>
        {movieState.title} {movieState.description} {movieState.rating}/10
        <StarRating
            valueStars={5}
            setRating={rating}
            onChangeRating={setRatingMovie}/>
    </div>)
}


export default MovieItem;

