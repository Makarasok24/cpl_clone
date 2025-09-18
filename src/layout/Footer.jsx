import React from 'react'
import { IoLogoFacebook, IoLogoInstagram, IoLogoTiktok, IoLogoTwitter, IoLogoYoutube, IoSend } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-full bg-gray-100 py-10 flex justify-center items-start px-20'>
      {/* <div className="flex "> */}
      <div className="w-full">
        <p className='text-xl font-semibold mb-5'>
          About CPL
        </p>
        <Link to="/contactus" className='text-sm text-gray-500'>
          Contact Us
        </Link>
      </div>
      <div className="w-full">
        <p className='text-xl font-semibold'>
          Competitions
        </p>
        <span className='flex flex-col text-sm text-gray-500 mt-5 gap-2'>
          <Link to='/premier-league'>
            Premier League
          </Link>
          <Link to={'/league-2'}>
            League 2
          </Link>
        </span>
      </div>
      <div className="w-full">
        <p className='text-xl font-semibold'>
          Latest Updates
        </p>
        <span className='flex flex-col text-sm text-gray-500 mt-5 gap-2'>
          <Link to='/news'>
            News
          </Link>
          <Link to={'/media'}>
            Media
          </Link>
          <Link to={'/fixtures'}>
            Fixtures
          </Link>
          <Link to={'/results'}>
            Results
          </Link>
        </span>
      </div>
      <div className="w-full">
        <p className='text-xl font-semibold'>
          Connect With Us
        </p>
        <span className='flex items-center text-sm text-gray-500 mt-5 gap-2'>
          <Link to='/facebook'>
            <IoLogoFacebook />
          </Link>
          <Link to={'/media'}>
            <IoLogoInstagram />
          </Link>
          <Link to={'/fixtures'}>
            <IoLogoTwitter />
          </Link>
          <Link to={'/results'}>
            <IoSend />
          </Link>
          <Link to={'/results'}>
            <IoLogoYoutube />
          </Link>
          <Link to={'/results'}>
            <IoLogoTiktok />
          </Link>
        </span>
      </div>
      {/* </div> */}
    </div>
  )
}

export default Footer