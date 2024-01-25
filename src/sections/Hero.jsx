import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../constants'
import { bigShoe1 } from '../assets/images'
import ShoeCard from '../components/ShoeCard'
import { useState } from 'react'

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
        <p className=' text-xl font-montserrat text-coral-red'>
          Our Summer Collection
        </p>
        <h1 className='text-8xl font-bold font-palanquin mt-10 max-sm:text-[72px] max-sm:leading-[82px]'>
          <span className='pr-10 relative xl:bg-white xl:whitespace-nowrap z-10'>
            The New Arrival
          </span>
          <br />
          <span className=' text-coral-red inline-block pt-2'>Nike</span> Shoes
        </h1>
        <p className=' font-montserrat text-slate-gray leading-8 text-lg mt-6 mb-14 sm:max-w-sm'>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label='Shop now' ImageUrl={arrowRight} />
        <div className='flex justify-start items-start flex-wrap gap-10 w-full mt-16'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className=' font-palanquin text-4xl font-bold'>{stat.value}</p>
              <p className=' font-montserrat text-slate-gray leading-7'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={bigShoeImg}
          alt='shoe colletion'
          width={610}
          height={502}
          className='object-contain relative z-10'
        />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                imgUrl={shoe}
                changeBigShoeImg={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
