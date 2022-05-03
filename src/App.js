import logo from './logo.svg';
import './App.css';
import jsimages from 'https://code.iconify.design/2/2.2.1/iconify.min.js';
import Header from './containers/Header/Header.js';
import Footer from './containers/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Suggestion from './containers/Suggestion/Suggestion';
import Conversation from './containers/Conversation/Conversation';


function App() {
  return (
    <div className="contentAll">
      <BrowserRouter>
        <Header/>
        <Conversation/>
        <Suggestion/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
