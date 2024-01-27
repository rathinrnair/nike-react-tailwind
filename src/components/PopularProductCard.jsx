import { star } from '../assets/icons'
const PopularProductCard = ({ imgUrl, productName, productPrice }) => {
  return (
    <div className=' max-sm:w-full'>
      <img src={imgUrl} alt='product-card-image' />
      <div className='flex flex-col my-6 gap-2'>
        <div className='flex'>
          <img src={star} alt='' width={15} />
          <p className=' font-montserrat text-slate-gray text-sm pl-2'>(4.5)</p>
        </div>
        <h3 className=' font-palanquin text-sm md:text-2xl font-semibold leading-normal'>
          {productName}
        </h3>
        <h1 className=' text-coral-red font-bold text-sm'>{productPrice}</h1>
      </div>
    </div>
  )
}

export default PopularProductCard
