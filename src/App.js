import { BrowserRouter as Router, Route } from 'react-router-dom'
  // https://www.youtube.com/watch?v=yQf1KbGiwiI
  // https://www.youtube.com/watch?v=w7ejDZ8SWv8&t=621s
import { AnimatePresence } from "framer-motion";
  // https://dev.to/joserfelix/page-transitions-in-react-1c8g
  // https://www.youtube.com/watch?v=qJt-FtzJ5fo
import ScrollToTop from './components/ScrollToTop'

import Home from './components/Home/Home'
import About from './components/About'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

import './vhFix.js';

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <Router>      
        <ScrollToTop />        
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/menu" component={Menu} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />        
      </Router>
    </AnimatePresence>      
  );
}

export default App;
