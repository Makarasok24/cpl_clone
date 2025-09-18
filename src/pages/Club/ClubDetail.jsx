import React from 'react'

const ClubDatail = () => {
  const [activeTab, setActiveTab] = React.useState('history');

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
      <div className="h-[70px] bg-white rounded-[10px] mx-[300px] my-[20px]">
        <div className="grid grid-cols-6 gap-[20px] justify-center items-center h-full text-gray-600 font-bold text-center mx-[300px]">
          {["history", "players", "fixtures", "results", "trophies", "stadiums"].map(tab => (
            <button
              key={tab}
              className={`w-[100px] h-[45px] rounded-[10px] hover:text-white hover:bg-[#e90f0f]  tab ${activeTab === tab ? "text-white bg-[#e90f0f]" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
      <div className="h-full bg-white mx-[300px] rounded-[10px] p-[20px]">
        {activeTab === "history" && (
          <div id="history" className="content active">
            <h1 className="text-[24px] font-bold pb-[20px]">Club History</h1>
            <p>No club history available yet.</p>
          </div>
        )}
        {activeTab === "players" && (
          <div  id="players" className="content active">
            <h2 className="text-[24px] font-bold pb-[20px]">Players</h2>
            <p>No player data available yet.</p>
          </div>
        )}
        {activeTab === "fixtures" && (
          <div id="fixtures" className="content active">
            <h2 className="text-[24px] font-bold pb-[20px]">Fixtures</h2>
            <p>No fixture data available yet.</p>
          </div>
        )}
        {activeTab === "results" && (
          <div id="results" className="content active">
            <h2 className="text-[24px] font-bold pb-[20px]">Results</h2>
            <p>No results data available yet.</p>
          </div>
        )}
        {activeTab === "trophies" && (
          <div id="trophies" className="content active">
            <h2 className="text-[24px] font-bold pb-[20px]">Trophies</h2>
            <p>No trophies data available yet.</p>
          </div>
        )}
        {activeTab === "stadiums" && (
          <div id="stadiums" className="content active">
            <h2 className="text-[24px] font-bold pb-[20px]">Stadiums</h2>
            <p>No stadiums data available yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ClubDatail
