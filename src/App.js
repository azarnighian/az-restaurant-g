import NavBar from './components/NavBar'
import DarkScreenDiv from './components/DarkScreenDiv'
import HomeLanding from './components/HomeLanding'
import HomeAbout from './components/HomeAbout'
import HomeMenu from './components/HomeMenu'
import HomeGallery from './components/HomeGallery'
import HomeInfo from './components/HomeInfo'
import './vhFix.js';
import './navBarStuff.js';

function App() {
  return (
    <>
      <NavBar />
      <DarkScreenDiv />
      <HomeLanding />
      <HomeAbout />
      <HomeMenu />
      <HomeGallery />
      <HomeInfo />
    </>
  );
}

export default App;
