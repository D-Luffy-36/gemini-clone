import React, { useState } from "react";
import { assets } from '../../assets/assets.js'
import SidebarItem from "./SideBarItem.jsx";



const Sidebar = ({ isExtended, setIsExtended }) => {

    const clickMenu = () => {
        setIsExtended(prev => !prev);
    };

    return (
        <>
            {/* Sidebar chính */}
            <div
                className={`hidden md:flex fixed top-0 left-0 h-full bg-[#c6cacf] p-4 flex-col justify-between items-center
                    md:!mr-8
                    transition-width duration-600 ease-in-out
                    ${isExtended ? 'w-32' : 'w-16'}
                `}>
                {/* Sidebar content */}
                {/*top */}
                <div className="!space-y-4">
                    {/*icon menu */}
                    <div className="w-full flex justify-start !p-1 cursor-pointer" onClick={clickMenu}>
                        <img className="w-5 h-5" src={assets.menu_icon} alt="Menu" />
                    </div>

                    {/* New Chat */}
                    <SidebarItem className="bg-[#e6eaf1] rounded-full !py-1 !px-1 !mt-8 text-gray-500 text-sm "
                        iconSrc={assets.plus_icon} label="New Chat" isExtended={isExtended} />

                    {/*Recent */}
                    {isExtended
                        ?
                        <div className="flex flex-col !gap-2 cursor-pointer">
                            <p className="sm:font-normal !m-4 md: font-medium" >Recent</p>
                            <div className="flex flex-row items-center hover:bg-[#e6eaf1] rounded-full !py-1 !px-3">
                                <img className="w-4 h-4" src={assets.message_icon} alt="" />
                                <p className="text-sm !ml-2">What is react ...</p>
                            </div>
                        </div>
                        :
                        null
                    }

                </div>

                {/* Bottom */}
                <div className="!space-y-4 w-full">
                    <SidebarItem iconSrc={assets.question_icon} label="Help" isExtended={isExtended} />
                    <SidebarItem iconSrc={assets.history_icon} label="Activity" isExtended={isExtended} />
                    <SidebarItem iconSrc={assets.setting_icon} label="Setting" isExtended={isExtended} />
                </div>
            </div>


        </>
    )
}


export default Sidebar;