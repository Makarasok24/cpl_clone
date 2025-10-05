import React from 'react'
import Players from './Players';

const ClubDatail = () => {
  const [activeTab, setActiveTab] = React.useState('players');

  return (
    <div className="w-full bg-[#dce6f0] pb-[20px]">
      <div className="relative w-full my-[20px]">
        <img
          src="https://cpl.sgp1.cdn.digitaloceanspaces.com/stadium/large/1740561308.jpg"
          alt=""
          className="w-full h-[40%] object-cover object-center"
        />
        <div className="absolute inset-0  bg-black opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-5xl  font-bold [-webkit-text-stroke:1.5px_red]">
            ANGKOR TIGER FC
          </span>
        </div>
      </div>
      <div className="w-full  px-[30px]">
        <div className="w-full h-[500px] rounded-[20px] bg-[linear-gradient(135deg,_#1f2937_0%,_#374151_100%)] grid grid-cols-3 gap-[20px] items-center justify-center px-[350px]">
          <div className="bg-white py-[40px] rounded-[20px] flex items-center justify-center">
            <img className="w-[200px] h-[200px]"
              src="https://cpl.sgp1.cdn.digitaloceanspaces.com/logo/club/medium/1732528836.png" alt="" />
          </div>
          <div className="col-span-2 bg-white rounded-[20px]">
            <div className="col-span-2 bg-white py-[40px] rounded-[20px] px-[40px]">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Angkor Tiger FC</h2>
              <table className="w-full text-left">
                <tbody>
                  <tr className="border-b">
                    <td className="py-4 text-gray-700 font-medium">Stadium</td>
                    <td className="py-4 text-gray-500 text-right">Akihiro Kato Stadium</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 text-gray-700 font-medium">Location</td>
                    <td className="py-4 text-gray-500 text-right">Siemreap Province</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 text-gray-700 font-medium">Active Players</td>
                    <td className="py-4 text-gray-500 text-right">24</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 text-gray-700 font-medium">Matches Played</td>
                    <td className="py-4 text-gray-500 text-right">4</td>
                  </tr>
                  <tr>
                    <td className="py-4 text-gray-700 font-medium">Wins</td>
                    <td className="py-4 text-gray-500 text-right">3</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[70px] bg-white rounded-[10px] mx-[330px] my-[20px]">
        <div className="grid grid-cols-6 gap-[25px] justify-center items-center h-full text-gray-600 font-bold text-center mx-[300px]">
          {["history", "players", "fixtures", "results", "trophies", "stadiums"].map(tab => (
            <div key={tab} className="flex flex-col items-center">
              <button
                className={`relative group w-[100px] h-[45px] rounded-[10px] hover:text-white hover:bg-[#e90f0f] tab ${activeTab === tab ? "text-white bg-[#e90f0f]" : ""
                  }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.toUpperCase()}

                {activeTab === tab && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-yellow-400 rotate-45"></span>
                )}
              </button>
            </div>

          ))}
        </div>
      </div>
      <div className="h-full bg-white mx-[330px] rounded-[10px] p-[35px]">
        {activeTab === "history" && (
          <div id="history" className="content active">
            <h1 className="text-[24px] font-bold pb-[20px]">Club History</h1>
            <p>No club history available yet.</p>
          </div>
        )}
        {activeTab === "players" && (
          <div id="players"
            className="content active">
            <Players />
          </div>
        )}
        {activeTab === "fixtures" && (
          <div id="fixtures" className="content active">
            <h2 className="text-[24px] font-bold pb-[20px]">📅 Upcoming Fixtures</h2>
            <p>No fixture data available yet.</p>
          </div>
        )}
        {activeTab === "results" && (
          <div id="results" className="content active">
            <h2 className="text-[24px] font-bold pb-[20px]">📊 Recent Results</h2>
            <p>No results data available yet.</p>
          </div>
        )}
        {activeTab === "trophies" && (
          <div id="trophies" className="content active">
            <h2 className="text-[24px] font-bold pb-[20px]">🏆 Club Trophies</h2>
            <div className="p-[20px] grid grid-rows-4 w-70 border border-gray-100 shadow-md rounded-[20px] mb-[50px]">
              <div className="row-span-2 flex justify-center">
                <img src="https://www.cpl-cambodia.com/assets/images/trophy.png" alt=""
                  className="w-15 h-20" />
              </div>
              <p className="text-center font-bold text-[18px]">Cambodian Premier League</p>
              <p className="text-center text-gray-400 text-sm">Coming Soon...</p>
            </div>
          </div>
        )}
        {activeTab === "stadiums" && (
          <div id="stadiums" className="content active">
            <h2 className="text-[24px] font-bold pb-[20px]">🏟️ Stadium Information</h2>
            <div className="w-[580px] h-[70px] p-[30px] mt-[10px] mb-[60px] rounded-[20px] flex justify-between items-center bg-gradient-to-r from-[#f8f9fb] to-[#e8eef8]">
              <p className="font-semibold">Stadiums: </p>
              <p className="text-sm text-gray-600">Akihiro Kato Stadium</p>
            </div>
            <p className="font-bold text-[22px] pb-[20px]">Stadium Gallery</p>
            <div className="grid grid-cols-4 gap-[30px]">
              <img src="https://cpl.sgp1.cdn.digitaloceanspaces.com/stadium/gallery/1740712234_67c1292a0728d.jpg" alt="" 
              className="h-full rounded-[15px]" />
              <img src="https://cpl.sgp1.cdn.digitaloceanspaces.com/stadium/gallery/1741417095_67cbea8721c15.jpg" alt="" 
              className="h-full rounded-[10px]" />
              <img src="https://cpl.sgp1.cdn.digitaloceanspaces.com/stadium/gallery/1741417101_67cbea8db9d71.jpg" alt="" 
              className="h-full rounded-[15px]" />
              <img src="https://cpl.sgp1.cdn.digitaloceanspaces.com/stadium/gallery/1741417162_67cbeaca664da.jpg" alt="" 
              className="h-full rounded-[15px]" />
              <img src="https://cpl.sgp1.cdn.digitaloceanspaces.com/stadium/gallery/1741417192_67cbeae8dde83.jpg" alt="" 
              className="h-full rounded-[15px]" />
              <img src="https://cpl.sgp1.cdn.digitaloceanspaces.com/stadium/gallery/1741417196_67cbeaec0a8d0.jpg" alt="" 
              className="h-full rounded-[15px]" />
              <img src="https://cpl.sgp1.cdn.digitaloceanspaces.com/stadium/gallery/1741417198_67cbeaee31ef5.jpg" alt="" 
              className="h-full rounded-[15px]" />
            </div>

          </div>
        )}
      </div>
    </div>
  )
}

export default ClubDatail
