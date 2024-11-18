import { features } from "@/constants"
import { useInView } from "react-intersection-observer"


function FeatureSection() {
    const { ref, inView } = useInView()
  return (
    <div ref={ref} className={`relative mt-20 border-b border-neutral-800 min-h-800 ${inView && " animate-fade-left animate-twice duration-300 ease-in-out"}`}>
     <div className='text-center'>
        <span className=' bg-neutral-800 text-orange-500 rounded-full h-6  text-sm font-medium px-2 py-1 uppercase'>
            Feature
        </span>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl  mt-10 lg:mt-20 tracking-wide'>Easily build  <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text ">your code</span></h2>
     </div>

     <div className="flex flex-wrap mt-10 lg:mt-20 justify-center ">
      {features.map((feature)=>(
        <div key={feature.text} className="w-full sm:w-1/2 lg:w-1/3">
          <div className="flex ">
            <div className="flex  justify-center items-center bg-neutral-900 text-orange-700 rounded-full h-10 w-10 p-2 mx-6">
              {feature.icon}
            </div>
            <div>
              <h5 className="mt-1 mb-6 text-base  lg:text-xl">{feature.text}</h5>
              <p className="text-md  text-neutral-500  mb-20 p-2">{feature.description}</p>
            </div>

          </div>

        </div>

      ))}

     </div>
      
    </div>
  )
}

export default FeatureSection
