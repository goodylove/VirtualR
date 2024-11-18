import FeatureSection from "./components/FeatureSection"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import NavBar from "./components/Navbar"
import Pricing from "./components/Pricing"
import Testimonial from "./components/Testimonial"
import WorkFlow from "./components/WorkFlow"


function App() {

  return (
   
  <>
      <NavBar/>
   <div className="mx-auto max-w-7xl pt-20 px-6">
     <HeroSection/>
     <FeatureSection/>
     <WorkFlow/>
     <Pricing/>
     <Testimonial/>
     <Footer/>
   </div>
  </>
  )
}

export default App
