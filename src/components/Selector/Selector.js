import './BlockSelector/BlockSelector.css'
import './Selector.css'
import {useDispatch, useSelector} from "react-redux";
import {getMoviesOfCategory} from "../../models/Movie/movie.reducer";


function Selector(props) {
    const categories = useSelector((state) => state.movieReducer.categories)
    const dispatch = useDispatch()
    const sendingCategoryMovie = (event) => {
        dispatch(getMoviesOfCategory(event.target.id))
    }
    return (<span onMouseLeave={props.onMouseLeave} className={"selector"}>
        <div className={'row'}>
            {categories && categories.map((movie) =>
                <span key={movie.id} id={movie.id} onClick={sendingCategoryMovie} className={'block-selector column'}>
                    <b>{movie.category}</b>
                </span>)}
        </div>
            </span>)
}

export default Selector;
