import { reviews } from '../constants'
import ReviewCard from '../components/ReviewCard'

const CustomerReviews = () => {
  return (
    <section className=' max-container'>
      <div>
        <h3 className=' font-palanquin text-4xl font-bold text-center '>
          What Our <span className=' text-coral-red'>Customers</span> Say?
        </h3>
        <p className='info-text text-center mt-4 max-w-lg m-auto'>
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
        <div className='flex flex-1 mt-24 justify-evenly items-center max-lg:flex-col gap-14'>
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              imgURL={review.imgURL}
              customerName={review.customerName}
              rating={review.rating}
              feedback={review.feedback}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CustomerReviews
