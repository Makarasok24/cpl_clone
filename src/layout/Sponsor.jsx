import React from 'react'

const Sponsor = () => {
    return (
        <div className="h-[130px] w-full flex items-center justify-center">
            <div className="h-[70px] grid grid-cols-[210px_210px_83.6px_105px] gap-[10px] justify-center items-center">
                <a  className="group h-[70px]" href="https://www.facebook.com/metfone.closer" target="_blank">
                    <img className="transition-transform duration-300 group-hover:scale-103" src="https://www.cpl-cambodia.com/images/metfone.png" alt=""/>
                </a>
                <a className="group h-[70px]" href="https://web.facebook.com/KrudBeer" target="_blank">
                    <img className="transition-transform duration-300 group-hover:scale-103" src="https://www.cpl-cambodia.com/images/krud.png" alt=""/>
                </a>
                <a className="group h-[55px]" href="https://www.facebook.com/IndomieCambodia" target="_blank">
                    <img className="transition-transform duration-300 group-hover:scale-105" src="https://www.cpl-cambodia.com/images/indomie_kh.png" alt=""/>
                </a>
                <a className="group h-[35px]" href="https://www.molten.co.jp/sports/en/" target="_blank">
                    <img className="transition-transform duration-300 group-hover:scale-105" src="https://www.cpl-cambodia.com/images/molten.png" alt=""/>
                </a>
            </div>
        </div>
    )
}

export default Sponsor
