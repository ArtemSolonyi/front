import './App.css';
import FormLogin from "./pages/formLogin";
import FormRegister from "./pages/FormRegister";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Provider} from "react-redux";
import store from "./core/store";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Routes>
                        <Route path={'/'} element={<MainPage/>}
                        <Route path="/login" element={<FormLogin/>}/>
                        <Route path="/registration" element={<FormRegister/>}/>
                    </Routes>
                </div>
            </Router>
        </Provider>
    );
}

export default App;

