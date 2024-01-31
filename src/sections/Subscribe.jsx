import Button from '../components/Button'

const Subscribe = () => {
  return (
    <section
      id='subscribe'
      className='flex max-lg:flex-col max-container justify-center gap-10 items-center'
    >
      <h3 className=' font-palanquin text-4xl leading-normal font-bold lg:max-w-md'>
        Sign Up for <span className=' text-coral-red'>Updates</span> &
        Newsletter
      </h3>
      <div className=' flex sm:border border-slate-gray rounded-full w-full gap-5 p-2.5 lg:max-w-[40%] items-center'>
        <input
          type='text'
          placeholder='subscribe@nike.com'
          className='input max-sm:max-w-[60%] max-sm:p-3'
        />
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <Button label='Sign Up' fullWidth />
        </div>
      </div>
    </section>
  )
}

export default Subscribe
