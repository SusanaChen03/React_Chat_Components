import logo from './logo.svg';
import './App.css';
import jsimages from 'https://code.iconify.design/2/2.2.1/iconify.min.js';
import Header from './containers/Header/Header.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className="contentAll">
         <BrowserRouter>
      <Header/>
     

        <div className="conversation">
            <div className="admin">
                <div className="avatar"></div>
                <div className="triangle"></div>
                <div className="bubble1">¿Estás trabajando actualmente?</div>
            </div>
            <div className="user">
                <div className="bubble2">Actualmente no</div>
                <div className="triangle2"></div>        
                <div className="avatarUser"></div>
            </div>
            <div className="admin">
                <div className="avatar"></div>
                <div className="triangle"></div>
                <div className="bubble1">¿Qué tecnologías dominas?</div>
            </div>
        
        </div>
        <div className="buttons">
            <div className="yes">Sí, estoy trabajando </div>
            <div className="no">Actualmente no</div>
        </div>
       
        <Routes>
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
