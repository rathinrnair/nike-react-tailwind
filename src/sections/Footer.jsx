import { footerLogo } from '../assets/images'
import { facebook, instagram, twitter } from '../assets/icons'
import { footerLinks } from '../constants'
const Footer = () => {
  return (
    <footer className='max-container lg:max-w-[80%]'>
      <div className='flex justify-between gap-20 max-lg:flex-wrap '>
        <div>
          <img src={footerLogo} alt='footer-logo' width={147} height={30} />
          <p className='info-text max-w-sm mt-4'>
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className='flex items-center gap-3 mt-4'>
            <img
              src={facebook}
              alt='facebook-logo'
              width={30}
              height={30}
              className='bg-white rounded-full p-2'
            />
            <img
              src={instagram}
              alt='facebook-logo'
              width={30}
              height={30}
              className='bg-white rounded-full p-2'
            />
            <img
              src={twitter}
              alt='facebook-logo'
              width={30}
              height={30}
              className='bg-white rounded-full p-2'
            />
          </div>
        </div>
        <div className='flex max-md:flex-col justify-between w-full flex-wrap gap-2 '>
          {footerLinks.map((items, index) => (
            <div key={index} className=' flex flex-col max-md:mt-4'>
              <h4 className=' text-white font-montserrat font-medium'>
                {items.title}
              </h4>
              <ul className='mt-5'>
                {items.links.map((link, index) => (
                  <li className='mt-0.5' key={index}>
                    {' '}
                    <a className=' text-slate-gray' href={link.link}>
                      {link.name}
                    </a>{' '}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-between text-slate-gray mt-20 max-sm:flex-wrap max-sm:gap-6 max-sm:justify-center'>
        <div>
          <p>
            {' '}
            <span className='text-xl'>&copy;</span> Copyright. All rights
            reserved.
          </p>
        </div>
        <div>
          <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
