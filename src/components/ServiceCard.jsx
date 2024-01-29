const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className='flex-grow-0 md:flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16'>
      <div className='flex flex-col'>
        <div className=' bg-coral-red w-10 h-10 rounded-[50px] justify-center flex items-center'>
          <img src={imgURL} alt={label} width={24} height={24} />
        </div>
        <h3 className=' font-palanquin font-3xl leading-normal font-bold mt-4'>
          {label}
        </h3>
        <p className=' font-montserrat text-lg text-slate-gray leading-normal break-words mt-4'>
          {subtext}
        </p>
      </div>
    </div>
  )
}
export default ServiceCard
