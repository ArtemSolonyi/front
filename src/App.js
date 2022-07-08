import './App.css';
import FormLogin from "./pages/FormLogin/formLogin";
import FormRegister from "./pages/FormRegister/FormRegister";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useDispatch, useSelector,} from "react-redux";
import {getCookie} from "./cookie";
import {loginSuccess, logoutCreater, logoutSuccess, usersReducer} from "./users/users.reducer";
import {useEffect} from "react";
import MainPage from "./pages/MainPage/MainPage";
import MoviePage from "./pages/Movie/MoviePage";

function App() {
    const refreshToken = getCookie('refreshToken')
    const dispatch = useDispatch()
    useEffect(() => {
        if (refreshToken) {
            dispatch(loginSuccess())
        } else {
            dispatch(logoutSuccess())
        }

    })

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path={'/'} element={<MainPage/>}/>
                    <Route path="/login" element={<FormLogin/>}/>
                    <Route path="/registration" element={<FormRegister/>}/>
                    <Route path="/movie/*" element={<MoviePage/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;

