import React from 'react'
import ClubCard from '../../components/ClubCard'
const Clubs = () => {
  const clubs = [
    {
      "ClubName": "ANGKOR TIGER FC",
      "ClubBg": "https://cpl.sgp1.cdn.digitaloceanspaces.com/stadium/small/1740561308.jpg",
      "ClubLogo": "https://cpl.sgp1.cdn.digitaloceanspaces.com/logo/club/small/1732528836.png",
      "ClubLocation": "Akihiro Sato Stadium",
      "player": 0,
      "match": 0,
      "founded": 2015
    },
    {
      "ClubName": "Boeung Ket FC",
      "ClubBg": "https://cpl.sgp1.cdn.digitaloceanspaces.com/stadium/small/1705985563.png",
      "ClubLogo": "https://cpl.sgp1.cdn.digitaloceanspaces.com/logo/club/small/1687428397.png",
      "ClubLocation": "National Olympic Stadium",
      "player": 0,
      "match": 0,
      "founded": 2012
    },
    {
      "ClubName": "ISI Dangkor Senchey FC",
      "ClubBg": "https://cpl.sgp1.cdn.digitaloceanspaces.com/stadium/small/1705985528.png",
      "ClubLogo": "https://cpl.sgp1.cdn.digitaloceanspaces.com/logo/club/small/1687428460.png",
      "ClubLocation": "AIA Stadium, KMH Park",
      "player": 0,
      "match": 0,
      "founded": 2016
    },
    {
      "ClubName": "Kirivong Sok Sen Chey FC",
      "ClubBg": "https://cpl.sgp1.cdn.digitaloceanspaces.com/stadium/small/1705985678.png",
      "ClubLogo": "https://cpl.sgp1.cdn.digitaloceanspaces.com/logo/club/small/1687428479.png",
      "ClubLocation": "Kirivong Stadium",
      "player": 0,
      "match": 0,
      "founded": 2007
    },
    {
      "ClubName": "Life FC Sihanoukville",
      "ClubBg": "https://cpl.sgp1.cdn.digitaloceanspaces.com/stadium/small/1705983937.png",
      "ClubLogo": "https://cpl.sgp1.cdn.digitaloceanspaces.com/logo/club/small/1692607772.png",
      "ClubLocation": "Life Stadium",
      "player": 0,
      "match": 0,
      "founded": 2022
    },
    {
      "ClubName": "MOI Kompong Dewa FC",
      "ClubBg": "https://cpl.sgp1.cdn.digitaloceanspaces.com/stadium/small/1705985693.png",
      "ClubLogo": "https://cpl.sgp1.cdn.digitaloceanspaces.com/logo/club/small/1750926116.png",
      "ClubLocation": "Prince Stadium",
      "player": 0,
      "match": 0,
      "founded": 2025
    },
    {
      "ClubName": "NagaWorld FC",
      "ClubBg": "https://cpl.sgp1.cdn.digitaloceanspaces.com/stadium/small/1705985758.png",
      "ClubLogo": "https://cpl.sgp1.cdn.digitaloceanspaces.com/logo/club/small/1687428492.png",
      "ClubLocation": "Kampong Speu Stadium",
      "player": 0,
      "match": 0,
      "founded": 2001
    },
    {
      "ClubName": "Phnom Penh Crown FC",
      "ClubBg": "https://cpl.sgp1.cdn.digitaloceanspaces.com/stadium/small/1705986452.png",
      "ClubLogo": "https://cpl.sgp1.cdn.digitaloceanspaces.com/logo/club/small/1687428507.png",
      "ClubLocation": "Smart RSN Stadium",
      "player": 0,
      "match": 0,
      "founded": 2001
    },
    {
      "ClubName": "Preah Khan Reach Svay Rieng FC",
      "ClubBg": "https://cpl.sgp1.cdn.digitaloceanspaces.com/stadium/small/1754711875.png",
      "ClubLogo": "https://cpl.sgp1.cdn.digitaloceanspaces.com/logo/club/small/1687428521.png",
      "ClubLocation": "Morodok Techo National Stadium",
      "player": 0,
      "match": 0,
      "founded": 1997
    },
    {
      "ClubName": "Royal Cambodian Armed Forces FC",
      "ClubBg": "https://cpl.sgp1.cdn.digitaloceanspaces.com/stadium/small/1705985595.png",
      "ClubLogo": "https://cpl.sgp1.cdn.digitaloceanspaces.com/logo/club/small/1754618986.png",
      "ClubLocation": "Army Stadium",
      "player": 0,
      "match": 0,
      "founded": 2014
    },
    {
      "ClubName": "Visakha FC",
      "ClubBg": "https://cpl.sgp1.cdn.digitaloceanspaces.com/stadium/small/1705985693.png",
      "ClubLogo": "https://cpl.sgp1.cdn.digitaloceanspaces.com/logo/club/small/1687428567.png",
      "ClubLocation": "Prince Stadium",
      "player": 0,
      "match": 0,
      "founded": 2016
    },
  ]

  return (
    <div className="w-full my-[30px] px-[280px]">
      <div className="h-[120px] my-[50px] rounded-3xl text-[22px] font-bold text-shadow-blue-800 flex justify-center items-center bg-gradient-to-r from-[#f8f9fb] to-[#e8eef8]">
        Clubs of Cambodia Priemier Leauge 2025/26
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-[30px] justify-center">
        {clubs.map((club, index) => (
          <ClubCard key={index} {...club} />
        ))}
      </div>
    </div>
  )
}

export default Clubs
