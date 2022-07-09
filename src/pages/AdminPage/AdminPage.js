import CreateMovie from "./components/CreateMovie";
import {useDispatch, useSelector} from "react-redux";

import {getCategories, getMovies} from "../../models/Movie/movie.reducer";
import {useEffect} from "react";

function AdminPage() {
    const dispatch = useDispatch()
    useEffect(() => {
            dispatch(getMovies())
            dispatch(getCategories())

    }, [])
    return (<div>
       <CreateMovie></CreateMovie>
    </div>)
}

export default AdminPage;

