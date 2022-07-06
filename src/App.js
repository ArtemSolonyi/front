import './App.css';
import FormLogin from "./pages/formLogin";
import FormRegister from "./pages/FormRegister";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useDispatch, } from "react-redux";

import {getCookie} from "./cookie";
import {loginSuccess, logoutCreater, logoutSuccess} from "./users/users.reducer";
import {useEffect} from "react";
import MainPage from "./pages/MainPage";

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
                </Routes>
            </div>
        </Router>
    );
}

export default App;

