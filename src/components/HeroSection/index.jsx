import Video1 from "@/assets/video1.mp4";
import Video2 from "@/assets/video2.mp4";
import { useInView } from "react-intersection-observer";

function HeroSection() {
    const { ref, inView } = useInView()
    return (
        <div className={`flex items-center mt-6 lg:mt-20 flex-col ${inView &&  "animate-fade-right animate-twice  animate-duration-800 animate-delay-75"  }`} ref={ref} >
            <h1 className="lg:text-7xl sm:text-6xl text-4xl   text-center  ">
                VirtualR build tools <span className="bg-gradient-to-r from-orange-500 text-transparent bg-clip-text to-orange-800"> {""} for developers</span>
            </h1>
            <p className="text-neutral-400 text-center mt-10 text-lg max-w-4xl animate-pulse animate-delay-0">
                Empowre your creativity and bring your VR app ideas in to
                life with our intuitive development tools
                Get started today and turn your imagination in to immersive reality
            </p>

            <div className="my-10 space-x-6">
                <button className="bg-gradient-to-r from-orange-400 to-orange-800 py-3 px-2 rounded-md  text-base  hover:bg-gradient-to-r hover:from-black  hover:to-black hover:border hover:border-white">
                    Start for free
                </button>
                <button className="border border-white text-white text-base py-3 px-2 rounded hover:bg-gradient-to-r from-orange-500 to-orange-800  hover:duration-300 hover:ease-in hover:transition-all ">
                    Documentation
                </button>
            </div>



            <div className="flex mt-10 justify-center items-center">
                <video
                    autoPlay
                    loop
                    muted
                    className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
                    <source src={Video1} type="video/mp4" />
                    Your browser does not support video tag
                </video>

                <video
                    autoPlay
                    loop
                    muted


                    className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
                    <source src={Video2} type="video/mp4" />
                    Your browser does not support video tag
                </video>

            </div>


        </div>
    )
}

export default HeroSection
