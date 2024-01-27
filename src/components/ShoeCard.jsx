const ShoeCard = ({ imgUrl, changeBigShoeImg, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgUrl.bigShoe) {
      changeBigShoeImg(imgUrl.bigShoe)
    }
  }
  return (
    <div
      className={`border-2 rounded-xl cursor-pointer max-sm:flex-1 ${
        bigShoeImg === imgUrl.bigShoe
          ? 'border-coral-red'
          : 'border-transparent'
      }`}
      onClick={handleClick}
    >
      <div className='bg-card flex justify-center items-center bg-center bg-cover rounded-xl sm:h-40 sm:w-40 max-sm:p-4'>
        <img
          src={imgUrl.thumbnail}
          alt='shoe-collection'
          width={127}
          height={103}
          className=' object-contain'
        />
      </div>
    </div>
  )
}

export default ShoeCard
