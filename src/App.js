import './App.css';
import FormLogin from "./pages/formLogin";
import FormRegister from "./pages/FormRegister";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/login" element={<FormLogin/>}/>
                    <Route path="/registration" element={<FormRegister/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;

