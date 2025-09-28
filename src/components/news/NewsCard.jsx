import React from "react";
import { LucideUser2, Clock9, MoveRight } from "lucide-react";

const NewsCard = ({ Bg, time, title, description }) => {
  return (
    // <div>NewsCard</div>
    <div className="h-auto w-[400px] shadow-lg bg-white overflow-hidden border border-gray-200 group">
      {/* image section */}
      <div className="relative h-[200px] flex justify-center items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundImage: `url('${Bg}')` }}
        ></div>
      </div>
      <div className="px-6 py-4">
        {/* content section */}
        <div className="flex flex-row gap-10 items-center text-gray-500">
          <div className="flex items-center">
            <LucideUser2 className="inline-block mr-2 w-4" />
            <span>Admin</span>
          </div>
          <div>
            <Clock9 className="inline-block mr-2 w-4" />
            <span>{time}</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 my-4">
          {/* title section */}
          <span className="font-bold text-2xl line-clamp-2">{title}</span>
          {/* description section */}
          <span className="text-gray-700 line-clamp-2">{description}</span>
        </div>

        {/* button section */}
        <div className="text-gray-700 my-6">
          <button className="group flex items-center">
            Continue Reading
            <MoveRight className="inline-block ml-4 w-6 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
