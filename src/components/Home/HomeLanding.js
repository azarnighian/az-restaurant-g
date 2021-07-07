import image from './homeImages/pexels-emre-can-acer-2079438.jpg';

const HomeLanding = () => {
  return (
    <div className="landingContainer">                
      <img src={image} alt="landing"></img>
      <h1>Welcome to Restaurant</h1>
      <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
    </div>
  )
}

export default HomeLanding