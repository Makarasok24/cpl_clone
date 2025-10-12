import React from "react";
import { useState } from "react";
import NewsCard from "../../components/news/NewsCard";

const index = () => {
  const [language, setLanguage] = useState("en");
  const news = [
    {
      Bg: "https://cpl.sgp1.cdn.digitaloceanspaces.com/posts/medium/1757934185.png",
      time: "15 Sep, 2025 10:56",
      title: "Cambodian Premier League&Hudl Form Exclusive New Partnership",
      description:
        "Cambodian Premier League, the top-tier football league in Cambodia, and Hudl, a global leader in sports performance analysis and scouting, have announced a new partnership for scouting rights to its competitions.",
    },
    {
      Bg: "https://cpl.sgp1.cdn.digitaloceanspaces.com/posts/medium/1757911734.png",
      time: "15 Sep, 2025 04:00",
      title: "PKR Maintains Four-Game Clean Sheet Streak",
      description:
        "Preah Khan Reach Svay Rieng (PKR) extended their impressive form with a 2-0 victory over home team Visakha at Prince Stadium on Saturday night, September 14, 2025.",
    },
    {
      Bg: "https://cpl.sgp1.cdn.digitaloceanspaces.com/posts/medium/1757476679.png",
      time: "10 Sep, 2025 03:41",
      title: "CPL Return This Weekend",
      description:
        "The 2025/26 Cambodian Premier League returns this weekend, starting on Saturday, Sep 13, 2025. Two matches are set for Saturday evening: Angkor Tiger vs ISI Dangkor Senchey at Akihiro Kato Stadium and Nagaworld vs MOI Kompong Dewa at Kompong Speu Stadium. Both games will kick off at 6:00 PM.",
    },
    {
      Bg: "https://cpl.sgp1.cdn.digitaloceanspaces.com/posts/medium/1757148687.jpg",
      time: "05 Sep, 2025 14:52",
      title:
        "Unveiling a New Era: The Cambodian Development League – The Future of Football Talent",
      description:
        "The Cambodian Premier League has a new competition called the Cambodian Development League(CDL), which will run from September 14, 2025, to February 23, 2026. The 2025/26 CDL season, six clubs will take part: ISI Dangkor Senchey, Kandal United, Lion King, MOI Kompong Dewa, Phnom Penh Crown, and Visakha.",
    },
    {
      Bg: "https://cpl.sgp1.cdn.digitaloceanspaces.com/posts/medium/1756715231.png",
      time: "01 Sep, 2025 08:06",
      title: "Cambodia will Host AFC U23 Asian Cup Saudi Arabia 2026 Qualifier",
      description:
        "Cambodia will host the AFC U23 Asian Cup Saudi Arabia 2026 Qualifier from September 3 to 9, 2025, at the National Olympic Stadium in Phnom Penh. The Cambodian U23 National Team has been drawn into Group G alongside Iraq, Oman, and Pakistan.",
    },
    {
      Bg: "https://cpl.sgp1.cdn.digitaloceanspaces.com/posts/medium/1755576950.png",
      time: "19 Aug, 2025 04:00",
      title:
        "Vireak Dara kept a clean sheet for two matches, while Patrick Robson scored 3 goals for PKR",
      description:
        "Week 2 of the 2025/26 Cambodian Premier League finished last Sunday. Two Preah Khan Reach Svay Rieng players played very well and helped their team perform well on the pitch as well.",
    },
  ];

  return (
    <div className="min-h-screen pt-[100px] pb-[50px] px-[330px] bg-gray-100">
      <div className="font-bold flex justify-center items-center text-3xl">
        ALL POSTS
      </div>
      <div className="flex items-center py-4">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="border border-gray-300 rounded-md px-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="km">ភាសាខ្មែរ</option>
          <option value="en">English</option>
        </select>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-[30px] justify-center">
        {news.map((club, index) => (
          <NewsCard key={index} {...club} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-8">
        <button className="text-white bg-gray-500 hover:bg-gray-600 rounded-md w-[400px] py-1.5 transition-all">load More</button>
      </div>
      
    </div>
  );
};

export default index;
