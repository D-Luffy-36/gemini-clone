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

const Main = () => {


    return (
        <>
            <div className="w-full !p-4">

                {/*top nav*/}
                <div className="text-2xl w-full flex justify-between">
                    <p>Gemini</p>
                    <div className="w-9 h-9 ">
                        <img className="rounded-full" src={assets.user_icon} alt="" />
                    </div>
                </div>


                {/* greeting */}
                <div className="container mx-auto px-4 flex flex-col items-center">
                    {/*title */}
                    <div className="!m-8">
                        <h2 className="font-Outfit text-5xl font-bold ">
                            <span className="text-blue-500">Hello,</span>{' '}
                            <span className="text-pink-500">Dev.</span>
                        </h2>

                        <h2 className="mt-2 text-5xl text-gray-400 text-center font-Outfit">
                            How can I help you today?
                        </h2>
                    </div>

                    <div className="!m-8">
                        <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-4.5 h-40">
                            {cardsData.map((cardData, index) => {
                                return (
                                    <Card key={index} description={cardData.description} iconSrc={cardData.icon} />

                                );
                            })}
                        </div>
                    </div>
                </div>

                {/*Bottom Input */}
                <div className="fixed bottom-8 left-40 right-20 bg-[#f0f4f9] rounded-full !px-3 !py-2 flex flex-row">
                    <input className="w-full outline-none" type="text" name="" id="" placeholder="Enter a prompt here" />
                    <div class="flex items-center space-x-2 gap-2">
                        <button><img src={assets.gallery_icon} class="w-5 h-5" alt="icon" /></button>
                        <button><img src={assets.mic_icon} class="w-5 h-5" alt="mic" /></button>
                        <button><img src={assets.send_icon} class="w-5 h-5" alt="send" /></button>
                    </div>

                </div>

            </div>




        </>
    )
}


export default Main;