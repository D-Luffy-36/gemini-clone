import React from "react";

import { assets } from '../../assets/assets.js'
import SidebarItem from "./SideBarItem.jsx";



const Sidebar = () => {
    return (
        <>
            <div className="!p-4 h-screen w-auto bg-[#c6cacf] flex flex-col justify-between items-center">
                {/*top */}
                <div className="!space-y-4">
                    {/*icon menu */}
                    <div className="w-full flex justify-start !p-1 cursor-pointer">
                        <img className="w-5 h-5" src={assets.menu_icon} alt="Menu" />
                    </div>

                    {/* New Chat */}
                    <SidebarItem className="bg-[#e6eaf1] rounded-full !py-2 !px-2 text-gray-500 text-sm gap-2  hover:bg-gray-100"
                        iconSrc={assets.plus_icon} label="New Chat" />

                    {/*Recent */}
                    <div className="flex flex-col !gap-2 !space-y-4 cursor-pointer">
                        <p className="font-medium" >Recent</p>
                        <div className="flex flex-row items-center hover:bg-[#e6eaf1] rounded-full !py-3 !px-3">
                            <img className="w-4 h-4" src={assets.message_icon} alt="" />
                            <p className="text-sm !ml-2">What is react ...</p>
                        </div>
                    </div>
                </div>


                {/* Bottom */}
                <div className="!space-y-4 w-full">
                    <SidebarItem iconSrc={assets.question_icon} label="Help" />
                    <SidebarItem iconSrc={assets.history_icon} label="Activity" />
                    <SidebarItem iconSrc={assets.setting_icon} label="Setting" />
                </div>
            </div>


        </>
    )
}


export default Sidebar;