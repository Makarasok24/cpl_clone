import React from 'react'
import { Link } from 'react-router-dom';

const PlayerCard = ({ PlayerId ,PlayerPic, PlayerRole, PlayerName, PlayerNationCode, PlayerNation, PlayerNumber }) => {
  return (
    <div className="w-[380px] h-[160px] border-2 shadow-md border-[hsl(0,0%,93%,0.7)] rounded-[20px] grid grid-cols-3
    group transform transition duration-300 hover:scale-101 hover:-translate-y-1
    hover:border-t-[#e90f0f] hover:border-t-4">
      <div className="grid grid-rows-2 gap-3 pt-[15px]">
        <div className="flex justify-center">
          <img src={PlayerPic} alt=""
            className="w-[70px] rounded-full border-2 border-gray-200 transform transition duration-300 group-hover:border-3 group-hover:border-[#e90f0f]" />
        </div>
        <div className="flex justify-center">
          <p className="w-8 h-8 text-[#e90f0f] text-sm bg-[#fadfdf] flex items-center justify-center rounded-xl">
            {PlayerRole}
          </p>
        </div>
      </div>
      <div className="col-span-2 pr-[15px] pt-[38px]">
        <div className="grid grid-rows-2 gap-2">
          <Link key={PlayerId} to={`/clubs/players/${PlayerId}`}>
            <p className="font-bold hover:text-[#e90f0f]">
              {PlayerName}
            </p>
          </Link>
          <div className="flex gap-1 items-center h-[14px]">
            <i className={`fi fi-${PlayerNationCode} w-6 h-6`}></i>
            <p className="text-gray-500 text-sm">{PlayerNation}</p>
          </div>

        </div>
      </div>
      <div className="relative -top-39 left-83 w-8 h-8 bg-[#e90f0f] text-white text-sm flex items-center justify-center rounded-full font-semibold">
        <p>{PlayerNumber}</p>
      </div>

    </div>
  )
}

export default PlayerCard
