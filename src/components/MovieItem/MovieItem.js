import {useDispatch, useSelector} from "react-redux";
import StarRating from "../StarRating/StarRating";
import {setRating} from "../../models/Movie/movie.reducer";
import {useState} from "react";
import Modal from "../Modals/ModalSignIn/Modal";
import SignInForm from "../SignInForm/SignInForm";


function MovieItem() {
    const movieState = useSelector((state) => state.movieReducer.movie)
    const dispatch = useDispatch()
    const user = useSelector((state) => state.usersReducer)
    const [modal, setModal] = useState(false)
    const setRatingMovie = (event) => {
        user.isAuth ? dispatch(setRating({movieId: movieState.id, rating: event.target.value})) : setModal(true)
    }
    return (
        <div>

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
            {modal && <Modal active={modal} setActive={setModal} insideComponent={<SignInForm/>}/>}
    </div>)
}


export default MovieItem;

