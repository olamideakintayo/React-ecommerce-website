import Herosvg from '../styles/Hero-image.css'
const Hero = () => {
    return (
        <div>
             {/*  Hero Section */}
            
       <header className="hero  flex justify-center items-center">
      <div className="banner inline-block text-center animate__animated animate__bounceInLeft">
      <h1 className="banner-title  flex font-body uppercase text-black">Kash Collections</h1>
      <a href="#product">
      <button className="banner-btn uppercase cursor-pointer font-body  bg-brightRed">Shop Now</button> 
  </a>
   </div>
  </header>
   {/* End of Hero Section */}
        </div>
    )
}
export default Hero;