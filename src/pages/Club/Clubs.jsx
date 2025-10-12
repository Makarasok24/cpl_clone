import React from 'react'
import ClubCard from '../../components/clubs/ClubCard'
import clubs from '../../datas/ClubData.json';

const Clubs = () => {
  return (
    <div className="w-full my-[30px] px-[280px]">
      <div className="h-[120px] my-[50px] rounded-3xl text-[22px] font-bold text-shadow-blue-800 flex justify-center items-center bg-gradient-to-r from-[#f8f9fb] to-[#e8eef8]">
        Clubs of Cambodia Priemier Leauge 2025/26
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-[30px] justify-center">
        {clubs.map((news, index) => (
          <ClubCard key={index} {...news} />
        ))}

      </div>
    </div>
  )
}

export default Clubs
