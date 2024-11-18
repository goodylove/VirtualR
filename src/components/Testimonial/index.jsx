import { testimonials } from '@/constants'

function Testimonial() {
  return (
    <div   className='mt-20 tracking-wide'>
      <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center my-10  lg:my-20'>What people are saying</h2>
      <div className='flex flex-wrap justify-center'>
        {testimonials.map((testimonials)=>(
          <div className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2' key={testimonials.user} > 
          <div className='bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin'>
            <p>{testimonials.text}</p>
            <div className='flex items-start mt-8 gap-3'>
            <img src={testimonials.image} alt={testimonials.user} className='h-12 w-12 rounded-full border border-neutral-300' />
            <div>
              <h6>{testimonials.user}</h6>
              <span className='text-sm font-normal italic  text-neutral-600'>{testimonials.company}</span>
            </div>
            </div>

          </div>

          </div>

        ))}
      </div>
      
    </div>
  )
}

export default Testimonial
