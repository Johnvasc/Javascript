import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Main from './pages/main';
import SignUp from './pages/signup/SignUp';
import UserProfile from './pages/userProfile/UserProfile';
import Write from './pages/writeText/Write';
import WarningPage from './pages/warningPage/WarningPage';
import SignIn from './pages/signin/SignIn';
import './index.css'
document.title = 'BookApp'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path = '/' element = {<Main/>} ></Route>
        <Route path = '/signup' element = {<SignUp/>} ></Route>
        <Route path = '/profile' element = {<UserProfile userName = 'johnbertson Vasconssauros'/>} ></Route>
        <Route path = '/write' element = {<Write/>} ></Route>
        <Route path = '/accountSucess' element = {<WarningPage text = 'Cadastrado com sucesso!'/>} ></Route>
        <Route path = '/login' element = {<SignIn/>} ></Route>
        
      </Routes>
    </Router>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();