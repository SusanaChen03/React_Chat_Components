import logo from './logo.svg';
import './App.css';
import jsimages from 'https://code.iconify.design/2/2.2.1/iconify.min.js';
import './flicker.css';
import Header from './containers/Header/Header.js';
import Footer from './containers/Footer/Footer';
import Suggestion from './containers/Suggestion/Suggestion';
import Conversation from './containers/Conversation/Conversation';
import Carousel from './containers/Carousel/Carousel';


function App() {
  return (
    <div className="contentAll">
          <Header/>
          <Conversation/>
          <Suggestion/>
          <Carousel/>
          <Footer/>
    </div>
  );
}

export default App;
