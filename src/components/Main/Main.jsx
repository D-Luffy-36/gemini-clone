import React, { useState } from "react";
import { assets } from '../../assets/assets.js'
import Card from "../Card.jsx";




const cardsData = [
    {
        description: 'Suggest beautiful places to see on an upcoming road trip',
        icon: assets.compass_icon,
    },
    {
        description: 'Briefly summarize this concept: urban planning',
        icon: assets.bulb_icon,
    },
    {
        description: 'Brainstorm team bonding activities for our work retreat',
        icon: assets.message_icon,
    },
    {
        description: 'Tell me about React js and React native',
        icon: assets.code_icon,
    },
]

const Main = ({ isExtended }) => {

    const marginLeftClass = isExtended ? 'md:!ml-32' : 'md:!ml-16';

    return (
        <>
            <div className={`w-full ${marginLeftClass}`}>
                {/*top nav*/}
                <div className={`w-full flex justify-between !p-4 transition-margin duration-200 ease-in-out `}>
                    <p>Gemini</p>
                    <div className="w-9 h-9 ">
                        <img className="rounded-full" src={assets.user_icon} alt="" />
                    </div>
                </div>


                {/* greeting */}
                <div className="container !mx-auto !px-4 flex flex-col  md:justify-start md:items-center">
                    {/*title */}
                    <div className="!m-8 flex flex-col justify-start md:text-5xl">
                        <h2 className="font-Outfit font-bold ">
                            <span className="text-blue-500">Hello,</span>{' '}
                            <span className="text-pink-500">Dev.</span>
                        </h2>

                        <h2 className="mt-2 text-gray-400 md:text-center font-Outfit">
                            How can I help you today?
                        </h2>
                    </div>

                    <div className="!m-4 md:!m-8 flex justify-items-center">
                        <div className="grid grid-cols-1  xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 h-auto">
                            {cardsData.map((cardData, index) => {
                                return (
                                    <Card key={index} description={cardData.description} iconSrc={cardData.icon} />

                                );
                            })}
                        </div>
                    </div>
                </div>

                {/*Bottom Input */}
                <div className="fixed bottom-4 left-4 right-4 md:bottom-8 md:left-40 md:right-20 bg-[#f0f4f9] rounded-full !px-3 !py-2 flex flex-row">
                    <input className="w-full outline-none bg-transparent" type="text" placeholder="Enter a prompt here" />
                    <div className="flex items-center space-x-2 gap-2">
                        <button><img src={assets.gallery_icon} className="w-5 h-5" alt="gallery" /></button>
                        <button><img src={assets.mic_icon} className="w-5 h-5" alt="mic" /></button>
                        <button><img src={assets.send_icon} className="w-5 h-5" alt="send" /></button>
                    </div>
                </div>

            </div>




        </>
    )
}


export default Main;