import { pricingOptions } from '@/constants'
import { CheckCircle2 } from 'lucide-react'
import { useInView } from 'react-intersection-observer'


function Pricing() {
          const { ref, inView } = useInView()

  return (
    <div className='mt-20' ref={ref}>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider '>Pricing</h2>

        <div className='flex flex-wrap'>

            {pricingOptions.map((items)=>( 
                <div key={items.title} className={`w-full sm:w-1/2 lg:w-1/3 p-2  ${inView && "animate-fade-up animate-twice transition duration-300 "}`} >
                    <div className='p-10 border border-neutral-700 rounded-xl'>
                        <p className='text-4xl mb-8'>{items.title}
                            {items.title ==="Pro"&& (
                                <span className='bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent text-xl mb-4 ml-2 '>Most Popular</span>
                            )}
                        </p>
                        <p className='mb-8'>
                            <span className='text-5xl mt-6 mr-2'>{items.price}</span>
                            <span className='text-neutral-400 tracking-tight'> /Month</span>
                        </p>
                        <ul>{items.features.map((item)=>(
                            <li className='flex items-center mt-8' key={item}>
                                <CheckCircle2/>
                                <span className='ml-2'>{item}</span>
                            </li>
                        ))}</ul>
                        <a href="" className='inline-flex justify-center items-center text-center w-full h-12  p-5 mt-20 tracking-tight text-xl hover:bg-orange-900  border-orange-600  rounded-md transition duration-200 '>
                            Subscribe
                        </a>
                    </div>

                </div>
            ))}
        </div>
    
    </div>
  )
}

export default Pricing
