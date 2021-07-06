import { BrowserRouter as Router, Route } from 'react-router-dom'
  // https://www.youtube.com/watch?v=yQf1KbGiwiI
  // https://www.youtube.com/watch?v=w7ejDZ8SWv8&t=621s

import ScrollToTop from './components/ScrollToTop'
import NavBar from './components/NavBar'
import DarkScreenDiv from './components/DarkScreenDiv'
import Home from './components/Home/Home'
import About from './components/About'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

import './vhFix.js';
import './navBarStuff.js';

function App() {
  return (
    <Router>
      <>
        <ScrollToTop />
        <NavBar />
        <DarkScreenDiv />
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/menu" exact component={Menu} />
        <Route path="/gallery" exact component={Gallery} />
        <Route path="/contact" exact component={Contact} />
        <Footer />
      </>
    </Router>
  );
}

export default App;
