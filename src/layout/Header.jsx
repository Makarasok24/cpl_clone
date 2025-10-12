import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='w-full'>
            <div className=" flex justify-start py-5 items-center gap-30 px-20">
                <Link to="/">
                    <img
                        src="https://www.cpl-cambodia.com/images/premier_league.svg"
                        alt="cpl_logo"
                        className='h-20'
                    />
                </Link>
                <span className='flex gap-5'>
                    <Link to="/premier-league">
                        <img
                            src="https://www.cpl-cambodia.com/images/league_1.svg"
                            alt="cpl_logo"
                            className='h-12'
                        />
                    </Link>
                    <Link to={"/league-2"}>
                        <img
                            src="https://www.cpl-cambodia.com/images/league_2.svg"
                            alt="cpl_logo"
                            className='h-12'
                        />
                    </Link>
                    <Link to={"/super-cup"}>
                        <img
                            src="https://www.cpl-cambodia.com/assets/images/csc_logo.png"
                            alt="cpl_logo"
                            className='h-12'
                        />
                    </Link>
                </span>
            </div>
            <div className="w-full bg-black text-white py-5 ">
                <div className="w-full px-20 flex justify-center items-center uppercase text-[16px] font-semibold">
                    <Link to="/clubs" className='mx-5'>club</Link>
                    <Link to="/news" className='mx-5'>news</Link>
                    <Link to="/fixtures" className='mx-5'>fixtures</Link>
                    <Link to="/resutls" className='mx-5'>results</Link>
                    <Link to="/standing" className='mx-5'>stading</Link>
                    <Link to="/stats" className='mx-5'>stats</Link>
                    <Link to="/tickets" className='mx-5'>Tickets</Link>
                </div>
            </div>
        </div>
    )
}

export default Header