import React, { useState } from "react";
import Sidebar from "./components/SideBar/SideBar";
import Main from "./components/Main/Main";





const App = () => {
  // State để điều khiển Sidebar đang collapsed hay extended
  const [isExtended, setIsExtended] = useState(false);
  return (
    <>
      <div className="w-full">
        <Sidebar isExtended={isExtended} setIsExtended={setIsExtended} />
        <Main isExtended={isExtended} />
      </div>

    </>
  )
}


export default App;