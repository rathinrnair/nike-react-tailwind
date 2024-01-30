import { offer } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
const SpecialOffer = () => {
  return (
    <section className='flex flex-col-reverse lg:flex-row w-full justify-center items-center max-lg:items-start'>
      <div className='flex mt-10 lg:mt-0'>
        <img
          src={offer}
          alt='offer'
          width={773}
          height={687}
          className=' object-contain w-full'
        />
      </div>
      <div className='flex flex-col justify-center max-w-md md:max-w-xl'>
        <h2 className=' font-palanquin text-4xl font-bold'>
          <span className=' text-coral-red'>Special</span> Offer
        </h2>
        <p className=' info-text mt-6'>
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className='info-text mt-6'>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className='flex mt-6 gap-4'>
          <Button label='Shop now' ImageUrl={arrowRight} />
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer
