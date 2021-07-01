import { Link } from 'react-router-dom'

const HomeAbout = () => {
  return (
    <div className="container">        
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu augue ut lectus arcu bibendum. Sed turpis tincidunt id aliquet risus feugiat in ante metus. Ut venenatis tellus in metus vulputate eu scelerisque felis. Quis auctor elit sed vulputate mi sit amet mauris commodo. Feugiat pretium nibh ipsum consequat nisl vel. Leo vel fringilla est ullamcorper eget. Imperdiet massa tincidunt nunc pulvinar sapien et ligula. Interdum velit laoreet id donec ultrices tincidunt arcu non. Suspendisse interdum consectetur libero id faucibus nisl tincidunt.</p>
        <Link to="/about" className="linkButton">LEARN MORE</Link>
    </div>
  )
}

export default HomeAbout