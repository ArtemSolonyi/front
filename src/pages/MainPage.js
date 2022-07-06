import Header from "../components/Header/Header";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCategories, getMovies} from "../models/Movie/movie.reducer";
import Movies from "../components/Movies/Movies";


function  MainPage() {
    const dispatch = useDispatch()
    const categories = useSelector((state)=>state.movieReducer.categories)

    useEffect(() => {
        if(!categories){
            dispatch(getMovies())
            dispatch(getCategories())
        }
    }, [])
    return (
        <div className={'container'}>
            <Header/>
            <Movies/>
        </div>
    );
}

export default MainPage;

