import DarkScreenDiv from './components/DarkScreenDiv'
import NavBar from './components/NavBar'
import HomeLanding from './components/HomeLanding'
import HomeAbout from './components/HomeAbout'
import './vhFix.js';
import './changeNavBar.js';
import './navSlide.js';

function App() {
  return (
    <>
      <DarkScreenDiv />
      <NavBar />
      <HomeLanding />
      <HomeAbout />
    </>
  );
}

export default App;
