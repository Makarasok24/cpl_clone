import React from 'react'
import { useParams } from 'react-router-dom';
import players from '../../datas/PlayerData.json';

const PlayeDetail = () => {
    const { PlayerId } = useParams();
    const player = players.find(p => p.PlayerId === parseInt(PlayerId));

    if (!player) return <p>Player not found</p>;

    return (
        <div className="w-full h-screen px-[330px]">
            <div className="h-[340px] grid grid-cols-4 p-[15px] rounded-[10px] shadow-md mt-[15px] gap-[30px]">
                <img src={player.PlayerPic} alt=""
                    className="h-[310px] w-[280px] rounded-[10px]" />
                <div className="col-span-3 grid grid-rows-6 pl-[40px] pt-[10px]">
                    <p className="flex items-center text-[24px] font-bold">
                        {player.PlayerName || "N/A"}
                    </p>
                    <div className="grid grid-cols-3">
                        <div className="flex items-center gap-[5px]">
                            <p className="pr-2 text-gray-600 text-sm">Nationality:</p>
                            <i className={`fi fi-${player.PlayerNationCode} w-6 h-6 mr-3`}></i>
                            <p className="font-semibold">
                                {player.PlayerNation || "N/A"}
                            </p>
                        </div>
                        <div className="flex items-center gap-[5px]">
                            <p className="pr-2 text-gray-600 text-sm">Date of Birth:</p>
                            <p className="font-semibold">
                                {player.Dob || "N/A"}
                            </p>
                        </div>
                        <div className="flex items-center gap-[5px]">
                            <p className="pr-2 text-gray-600 text-sm">Age:</p>
                            <p className="font-semibold">{player.Age || "N/A"} Years</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3">
                        <div className="flex items-center gap-[5px]">
                            <p className="pr-2 text-gray-600 text-sm">Height: </p>
                            <p className="font-semibold">{player.Height || "N/A"} cm</p>
                        </div>
                        <div className="flex items-center gap-[5px]">
                            <p className="pr-2 text-gray-600 text-sm">Weight: </p>
                            <p className="font-semibold">{player.Weight || "N/A"} kg</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3">
                        <div className="flex items-center gap-[5px]">
                            <p className="pr-2 text-gray-600 text-sm">Club: </p>
                            <p className="font-semibold">{player.Club || "N/A"}</p>
                        </div>
                        <div className="flex items-center gap-[5px]">
                            <p className="pr-2 text-gray-600 text-sm">Position: </p>
                            <p className="font-semibold">{player.PlayerRole || "N/A"}</p>
                        </div>
                        <div className="flex items-center gap-[5px]">
                            <p className="pr-2 text-gray-600 text-sm">Shirt Number: </p>
                            <p className="font-semibold">{player.PlayerNumber || "N/A"}</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-center text-[26px] font-semibold pt-[20px]">STATISTICS</p>
            <p className="text-center text-[20px] font-semibold text-gray-600">
                Cambodian Premier League 2025/26
            </p>
            <div className="w-full h-0.5 px-[20px] bg-gray-100 mt-[60px]"></div>
            {player.PlayerRole === "GK" ? (
                <div className="w-full h-33 grid grid-cols-6 gap-[30px]">
                    <div className="grid grid-rows-2 border-1 border-gray-200 hover:shadow-lg hover:z-10 transform transition duration-300 hover:scale-101 hover:-translate-y-1">
                        <p className="flex justify-center items-center font-semibold">ClEAN SHEETS</p>
                        <p className="text-center text-4xl text-red-600 font-bold">{player.Stats.CleanSheets}</p>
                    </div>
                    <div className="grid grid-rows-2 border-1 border-gray-200 hover:shadow-lg hover:z-10 transform transition duration-300 hover:scale-101 hover:-translate-y-1">
                        <p className="flex justify-center items-center font-semibold">GOALS</p>
                        <p className="text-center text-4xl text-red-600 font-bold">{player.Stats.Goals}</p>
                    </div>
                    <div className="grid grid-rows-2 border-1 border-gray-200 hover:shadow-lg hover:z-10 transform transition duration-300 hover:scale-101 hover:-translate-y-1">
                        <p className="flex justify-center items-center font-semibold">ASSISTS</p>
                        <p className="text-center text-4xl text-red-600 font-bold">{player.Stats.Assists}</p>
                    </div>
                    <div className="grid grid-rows-2 border-1 border-gray-200 hover:shadow-lg hover:z-10 transform transition duration-300 hover:scale-101 hover:-translate-y-1">
                        <p className="flex justify-center items-center font-semibold">APPEARANCES</p>
                        <p className="text-center text-4xl text-red-600 font-bold">{player.Stats.Appearances}</p>
                    </div>
                    <div className="grid grid-rows-2 border-1 border-gray-200 hover:shadow-lg hover:z-10 transform transition duration-300 hover:scale-101 hover:-translate-y-1">
                        <p className="flex justify-center items-center font-semibold">SUBSTITUTIONS</p>
                        <p className="text-center text-4xl text-red-600 font-bold">{player.Stats.Substitutions}</p>
                    </div>
                    <div className="grid grid-rows-2 border-1 border-gray-200 hover:shadow-lg hover:z-10 transform transition duration-300 hover:scale-101 hover:-translate-y-1">
                        <p className="flex justify-center items-center font-semibold">MVP</p>
                        <p className="text-center text-4xl text-red-600 font-bold">{player.Stats.MVP}</p>
                    </div>
                </div>
            ) : (
                <div className="w-full h-33 grid grid-cols-5 gap-[30px]">
                    <div className="grid grid-rows-2 border-1 border-gray-200">
                        <p className="flex justify-center items-center font-semibold">GOALS</p>
                        <p className="text-center text-4xl text-red-600 font-bold">{player.Stats.Goals}</p>
                    </div>
                    <div className="grid grid-rows-2 border-1 border-gray-200">
                        <p className="flex justify-center items-center font-semibold">ASSISTS</p>
                        <p className="text-center text-4xl text-red-600 font-bold">{player.Stats.Assists}</p>
                    </div>
                    <div className="grid grid-rows-2 border-1 border-gray-200">
                        <p className="flex justify-center items-center font-semibold">APPEARANCES</p>
                        <p className="text-center text-4xl text-red-600 font-bold">{player.Stats.Appearances}</p>
                    </div>
                    <div className="grid grid-rows-2 border-1 border-gray-200">
                        <p className="flex justify-center items-center font-semibold">SUBSTITUTIONS</p>
                        <p className="text-center text-4xl text-red-600 font-bold">{player.Stats.Substitutions}</p>
                    </div>
                    <div className="grid grid-rows-2 border-1 border-gray-200">
                        <p className="flex justify-center items-center font-semibold">MVP</p>
                        <p className="text-center text-4xl text-red-600 font-bold">{player.Stats.MVP}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default PlayeDetail
