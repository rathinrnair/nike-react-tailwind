import { shoe8 } from '../assets/images'
import Button from '../components/Button'
const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className=' flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className=' flex flex-1 flex-col'>
        <h2 className=' font-palanquin font-bold capitalize text-4xl xl:max-w-lg mb-4'>
          We Provide You <span className=' text-coral-red'>Super Quality</span>{' '}
          Shoes
        </h2>
        <p className='info-text'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className='info-text mt-6 lg:max-w-lg'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-10'>
          <Button label={'View details'} />
        </div>
      </div>
      <div className=' flex flex-1 justify-center items-center'>
        <img
          src={shoe8}
          alt='super-quality-shoe'
          width={570}
          height={522}
          className=' object-contain'
        />
      </div>
    </section>
  )
}

export default SuperQuality
