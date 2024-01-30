import { star } from '../assets/icons'
const ReviewCard = ({ imgURL, feedback, rating, customerName }) => {
  return (
    <div className=' flex flex-col justify-center items-center text-center'>
      <img
        src={imgURL}
        alt='review-avatar'
        className=' rounded-full w-[120px] h-[120px] object-cover'
      />
      <p className='info-text mt-4 max-w-sm'>{feedback}</p>
      <div className=' flex mt-2'>
        <img src={star} alt='star' width={24} height={24} />
        <p className='info-text mt-2'>{rating}</p>
      </div>
      <h3 className=' font-palanquin text-xl font-semibold'>{customerName}</h3>
    </div>
  )
}

export default ReviewCard
