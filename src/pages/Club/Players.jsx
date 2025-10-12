import React from 'react'
import PlayerCard from '../../components/clubs/playerCard';
import players from '../../datas/PlayerData.json';

const Players = () => {
    return (
        <div className="">
            <div className="flex gap-[20px] font-semibold pt-[20px]">
                <p className="text-[#e90f0f] text-[24px]">Goalkeepers</p>
                <span className="inline-block text-gray-500 bg-[hsl(0,0%,93%,0.4)] rounded-full w-10 h-9 text-center leading-9">
                    ({players.filter(player => player.PlayerRole === "GK").length})
                </span>
            </div>
            <div className="w-full h-1 mx-[20px] bg-[hsl(0,0%,93%,0.4)] my-[30px]"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px]">
                {players.filter(player => player.PlayerRole === "GK")
                    .map((player, index) => (
                        <PlayerCard key={index} {...player} />
                    ))
                }
            </div>
            <div className="flex gap-[20px] pt-[30px] font-semibold">
                <p className="text-[#e90f0f] text-[24px]">Defenders</p>
                <span className="inline-block text-gray-500 bg-[hsl(0,0%,93%,0.4)] rounded-full w-10 h-9 text-center leading-9">
                    ({players.filter(player => player.PlayerRole === "DF").length})
                </span>
            </div>
            <div className="w-full h-1 mx-[20px] bg-[hsl(0,0%,93%,0.4)] my-[30px]"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px]">
                {players.filter(player => player.PlayerRole === "DF")
                    .map((player, index) => (
                        <PlayerCard key={index} {...player} />
                    ))
                }
            </div>
            <div className="flex gap-[20px] pt-[30px] font-semibold">
                <p className="text-[#e90f0f] text-[24px]">Midfielders</p>
                <span className="inline-block text-gray-500 bg-[hsl(0,0%,93%,0.4)] rounded-full w-10 h-9 text-center leading-9">
                    ({players.filter(player => player.PlayerRole === "MF").length})
                </span>
            </div>
            <div className="w-full h-1 mx-[20px] bg-[hsl(0,0%,93%,0.4)] my-[30px]"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px]">
                {players.filter(player => player.PlayerRole === "MF")
                    .map((player, index) => (
                        <PlayerCard key={index} {...player} />
                    ))
                }
            </div>
            <div className="flex gap-[20px] pt-[30px] font-semibold">
                <p className="text-[#e90f0f] text-[24px]">Forwards</p>
                <span className="inline-block text-gray-500 bg-[hsl(0,0%,93%,0.4)] rounded-full w-10 h-9 text-center leading-9">
                    ({players.filter(player => player.PlayerRole === "FW").length})
                </span>
            </div>
            <div className="w-full h-1 mx-[20px] bg-[hsl(0,0%,93%,0.4)] my-[30px]"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px]">
                {players.filter(player => player.PlayerRole === "FW")
                    .map((player, index) => (
                        <PlayerCard key={index} {...player} />
                    ))
                }
            </div>
        </div>
    )
}

export default Players
