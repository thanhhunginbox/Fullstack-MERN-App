/* eslint-disable jsx-a11y/anchor-is-valid */
// import logo from './logo.svg';
import './App.css';
import './Landing.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './components/Shop/Shop';
import Item from './components/Item/Item';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LoginForm from './auth/LoginForm';
import RegisterForm from './auth/RegisterForm'
import AuthContextProvider from './contexts/AuthContext'


function App() {
    // const [user, setUser] = useState(null);
    return (
        <AuthContextProvider>
            <BrowserRouter>
                <div className="App">
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Shop />} />
                        <Route path="/:name" element={<Item />} />
                        <Route path='/register' element={<RegisterForm />} />
                        <Route path='/login' element={<LoginForm />} />
                    </Routes>
                    <Footer/>
                </div>
            </BrowserRouter>
        </AuthContextProvider>
    );
}

export default App;
