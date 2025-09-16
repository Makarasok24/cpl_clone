import React from 'react'
import ClubCard from '../../components/ClubCard'
const Clubs = () => {
    const clubs = [
  {
    "ClubName": "ANGKOR TIGER FC",
    "ClubBg": "https://cpl.sgp1.cdn.digitaloceanspaces.com/stadium/small/1740561308.jpg",
    "ClubLogo": "https://cpl.sgp1.cdn.digitaloceanspaces.com/logo/club/small/1732528836.png",
    "ClubLocation": "Akihiro Sato Stadium",
    "player": 28,
    "match": 12,
    "founded": 2015
  },
  {
    "ClubName": "PHNOM PENH CROWN",
    "ClubBg": "https://cpl.sgp1.cdn.digitaloceanspaces.com/stadium/small/1740561250.jpg",
    "ClubLogo": "https://cpl.sgp1.cdn.digitaloceanspaces.com/logo/club/small/1732528837.png",
    "ClubLocation": "RSN Stadium",
    "player": 30,
    "match": 15,
    "founded": 2001
  },
  {
    "ClubName": "VISAKHA FC",
    "ClubBg": "https://cpl.sgp1.cdn.digitaloceanspaces.com/stadium/small/1740561211.jpg",
    "ClubLogo": "https://cpl.sgp1.cdn.digitaloceanspaces.com/logo/club/small/1732528840.png",
    "ClubLocation": "Prince Stadium",
    "player": 29,
    "match": 13,
    "founded": 2016
  },
  {
    "ClubName": "BOEUNG KET FC",
    "ClubBg": "https://cpl.sgp1.cdn.digitaloceanspaces.com/stadium/small/1740561198.jpg",
    "ClubLogo": "https://cpl.sgp1.cdn.digitaloceanspaces.com/logo/club/small/1732528838.png",
    "ClubLocation": "Cambodia Airways Stadium",
    "player": 27,
    "match": 14,
    "founded": 2008
  },
  {
    "ClubName": "NAGA WORLD FC",
    "ClubBg": "https://cpl.sgp1.cdn.digitaloceanspaces.com/stadium/small/1740561267.jpg",
    "ClubLogo": "https://cpl.sgp1.cdn.digitaloceanspaces.com/logo/club/small/1732528842.png",
    "ClubLocation": "Old Stadium",
    "player": 25,
    "match": 10,
    "founded": 2001
  },
  {
    "ClubName": "ELECTRICITE DU CAMBODGE",
    "ClubBg": "https://cpl.sgp1.cdn.digitaloceanspaces.com/stadium/small/1740561280.jpg",
    "ClubLogo": "https://cpl.sgp1.cdn.digitaloceanspaces.com/logo/club/small/1732528843.png",
    "ClubLocation": "EDC Stadium",
    "player": 26,
    "match": 9,
    "founded": 1996
  },
  {
    "ClubName": "KIRIVONG SOK SEN CHEY",
    "ClubBg": "https://cpl.sgp1.cdn.digitaloceanspaces.com/stadium/small/1740561299.jpg",
    "ClubLogo": "https://cpl.sgp1.cdn.digitaloceanspaces.com/logo/club/small/1732528844.png",
    "ClubLocation": "Takeo Stadium",
    "player": 24,
    "match": 11,
    "founded": 2004
  },
  {
    "ClubName": "PREAH KHAN REACH SVAY RIENG",
    "ClubBg": "https://cpl.sgp1.cdn.digitaloceanspaces.com/stadium/small/1740561322.jpg",
    "ClubLogo": "https://cpl.sgp1.cdn.digitaloceanspaces.com/logo/club/small/1732528845.png",
    "ClubLocation": "Svay Rieng Stadium",
    "player": 28,
    "match": 12,
    "founded": 1997
  },
  {
    "ClubName": "CAMBODIA AIRWAYS FC",
    "ClubBg": "https://cpl.sgp1.cdn.digitaloceanspaces.com/stadium/small/1740561333.jpg",
    "ClubLogo": "https://cpl.sgp1.cdn.digitaloceanspaces.com/logo/club/small/1732528846.png",
    "ClubLocation": "CA Stadium",
    "player": 22,
    "match": 8,
    "founded": 2017
  },
  {
    "ClubName": "KOH KONG FC",
    "ClubBg": "https://cpl.sgp1.cdn.digitaloceanspaces.com/stadium/small/1740561345.jpg",
    "ClubLogo": "https://cpl.sgp1.cdn.digitaloceanspaces.com/logo/club/small/1732528847.png",
    "ClubLocation": "Koh Kong Stadium",
    "player": 20,
    "match": 6,
    "founded": 2020
  },
  {
    "ClubName": "KAMPONG CHHNANG FC",
    "ClubBg": "https://cpl.sgp1.cdn.digitaloceanspaces.com/stadium/small/1740561356.jpg",
    "ClubLogo": "https://cpl.sgp1.cdn.digitaloceanspaces.com/logo/club/small/1732528848.png",
    "ClubLocation": "Kampong Chhnang Stadium",
    "player": 21,
    "match": 7,
    "founded": 2018
  },
  {
    "ClubName": "BATTAMBANG FC",
    "ClubBg": "https://cpl.sgp1.cdn.digitaloceanspaces.com/stadium/small/1740561368.jpg",
    "ClubLogo": "https://cpl.sgp1.cdn.digitaloceanspaces.com/logo/club/small/1732528849.png",
    "ClubLocation": "Battambang Stadium",
    "player": 23,
    "match": 9,
    "founded": 2019
  },
  {
    "ClubName": "SIEM REAP UNITED",
    "ClubBg": "https://cpl.sgp1.cdn.digitaloceanspaces.com/stadium/small/1740561380.jpg",
    "ClubLogo": "https://cpl.sgp1.cdn.digitaloceanspaces.com/logo/club/small/1732528850.png",
    "ClubLocation": "Siem Reap Stadium",
    "player": 19,
    "match": 5,
    "founded": 2021
  },
  {
    "ClubName": "KRATIE FC",
    "ClubBg": "https://cpl.sgp1.cdn.digitaloceanspaces.com/stadium/small/1740561392.jpg",
    "ClubLogo": "https://cpl.sgp1.cdn.digitaloceanspaces.com/logo/club/small/1732528851.png",
    "ClubLocation": "Kratie Stadium",
    "player": 18,
    "match": 4,
    "founded": 2022
  },
  {
    "ClubName": "MONDULKIRI FC",
    "ClubBg": "https://cpl.sgp1.cdn.digitaloceanspaces.com/stadium/small/1740561403.jpg",
    "ClubLogo": "https://cpl.sgp1.cdn.digitaloceanspaces.com/logo/club/small/1732528852.png",
    "ClubLocation": "Mondulkiri Stadium",
    "player": 17,
    "match": 3,
    "founded": 2023
  }
]

    return (
        <div className="w-full flex flex-col gap-[20px] my-[30px] px-[50px]">
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-[20px] justify-center">
                {clubs.map((club, index) => (
                    <ClubCard key={index} {...club} />
                ))}
            </div>
        </div>
    )
}

export default Clubs
