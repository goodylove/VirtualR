import { CheckCircle2 } from "lucide-react"
import codeImg from "@/assets/code.jpg"
import { checklistItems } from "@/constants"
import { useInView } from "react-intersection-observer"

function WorkFlow() {
      const { ref, inView } = useInView()

  return (
    <div className="mt-20">
    
      <h2 className="text-3xl lg:text-6xl sm:text-5xl text-center tracking-wide  mb-10 mt-6 lg:mt-20">Accelerate your <span  className="bg-gradient-to-r from-orange-500 text-transparent bg-clip-text to-orange-800">coding work flow</span> .</h2>
 
 <div className="flex flex-wrap justify-center" ref={ref}>
    <div className={`p-2 w-full lg:w-1/2 ${inView && "animate-fade-left animate-twice" }`}>
    <img src={codeImg} alt="Code"/>

    </div>
    <div className={`pt-12 w-full lg:w-1/2 ${inView && "animate-fade-right animate-twice"}`} >
    {checklistItems.map((items)=>(
        <div className="flex mb-12" key={items.title}>
            <div className="text-green-400 mx-6 bg-neutral-900 flex h-10 w-10 justify-center items-center rounded-full">
                <CheckCircle2/>
            </div>
            <div>
                <h2 className="mt-1 mb-2 text-xl">
                    {items.title}
                </h2>
                <p className="text-md text-neutral-500">{items.description}</p>

            </div>

        </div>

    ))}

    </div>
 </div>
 
    </div>
  )
}

export default WorkFlow
