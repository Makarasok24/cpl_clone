import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const ClubCard = ({ ClubName, ClubLocation, ClubLogo, ClubBg, player, match, founded }) => {

    return (
        <div className="h-[400px] w-[310px] rounded-[20px] shadow-lg bg-white overflow-hidden border border-gray-200 group">
            <div className="relative h-[200px] rounded-t-[20px] flex justify-center items-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-no-repeat bg-cover bg-center blur-[2px]"
                    style={{ backgroundImage: `url('${ClubBg}')` }}
                ></div>

                <img src={ClubLogo}
                    alt=""
                    className="w-[80px] h-[80px] relative z-10 transition-transform duration-300 group-hover:scale-110"
                />
            </div>

            <div className="h-[200px] p-[20px]">
                <div className="flex flex-col h-full justify-between">
                    <div>
                        <Link to="/Clubs/ClubDetail" className="text-[16.5px] flex items-center justify-center font-bold hover hover:text-red-500">
                            {ClubName}
                        </Link>
                        <span className="flex justify-center items-center gap-2 text-[12px] text-gray-600">
                            <IoLocationSharp className="text-red-500" />
                            <p className="text-[13.5px]">{ClubLocation}</p>
                        </span>
                    </div>

                    <div className="border-t-[0.3px] border-gray-300 my-2"></div>

                    <div className="flex justify-evenly items-center text-center text-[18px] pb-[15px]">
                        <div className="flex flex-col">
                            <span className="font-bold text-red-500">{player}</span>
                            <span className="text-[12px] text-gray-500">PLAYERS</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-red-500">{match}</span>
                            <span className="text-[12px] text-gray-500">MATCHES</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-red-500">{founded}</span>
                            <span className="text-[12px] text-gray-500">FOUNDED</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ClubCard
