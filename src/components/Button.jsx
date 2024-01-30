const Button = ({
  label,
  ImageUrl,
  backgroundColor,
  borderColor,
  textColor,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${
        backgroundColor
          ? `${backgroundColor} ${borderColor} ${textColor}`
          : 'bg-coral-red  border-coral-red  text-white'
      } rounded-full`}
    >
      {label}
      {ImageUrl && (
        <img
          src={ImageUrl}
          alt='arrow-right-icon'
          className='ml-2 rounded-full bg-white w-5 h-5'
        />
      )}
    </button>
  )
}

export default Button
