import PopularProductCard from '../components/PopularProductCard'
import { products } from '../constants'

const PopularProducts = () => {
  return (
    <section id='products' className=' max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className=' text-4xl font-palanquin font-bold'>
          Our <span className='text-coral-red'>Popular</span> Products
        </h2>
        <p className='lg:max-w-lg text-slate-gray font-montserrat'>
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <div className='flex flex-col sm:flex-row max-w my-10 gap-4'>
        {products.map((product, index) => (
          <div key={index} className='sm:flex-auto'>
            <PopularProductCard
              imgUrl={product.imgURL}
              productName={product.name}
              productPrice={product.price}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default PopularProducts
