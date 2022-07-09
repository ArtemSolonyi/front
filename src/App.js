import './App.css';
import FormLogin from "./pages/FormLogin/formLogin";
import FormRegister from "./pages/FormRegister/FormRegister";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useDispatch, useSelector,} from "react-redux";
import {getCookie} from "./cookie";
import {checkAuthCreator, loginSuccess, logoutCreater, logoutSuccess, usersReducer} from "./users/users.reducer";
import {useEffect} from "react";
import MainPage from "./pages/MainPage/MainPage";
import MoviePage from "./pages/Movie/MoviePage";
import AdminPage from "./pages/AdminPage/AdminPage";

function App() {
    const refreshToken = getCookie('refreshToken')
    const dispatch = useDispatch()
    const user = useSelector((state)=>state.usersReducer)
    console.log(user,'user')
    const isAuth = user.isAuth
    useEffect(() => {
        if (refreshToken && !isAuth) {
            dispatch(checkAuthCreator(refreshToken))
        } else {
            dispatch(logoutSuccess())
        }

    },[])

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path={'/'} element={<MainPage/>}/>
                    <Route path="/login" element={<FormLogin/>}/>
                    <Route path="/registration" element={<FormRegister/>}/>
                    <Route path="/movie/*" element={<MoviePage/>}/>
                    {user.user.role==='admin' && <Route path="/admin" element={<AdminPage/>}/>}
                </Routes>
            </div>
        </Router>
    );
}

export default App;

