import NavBar from './components/NavBar'
import DarkScreenDiv from './components/DarkScreenDiv'
import HomeLanding from './components/HomeLanding'
import HomeAbout from './components/HomeAbout'
import HomeMenu from './components/HomeMenu'
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
    </>
  );
}

export default App;
