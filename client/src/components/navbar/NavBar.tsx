import { useState } from "react"
import "./navbar.css"


const NavBar = () => {
  const [menuBar, setMenuBar] = useState<boolean>(false);

  return (
    <>
      <div className="flex justify-center w-full border-b-[1px] border-[#1C64F2]">

        <div className="max-w-[1080px] w-full py-3 flex flex-row justify-between items-center">

          <div>
            <h1 className="uppercase text-[17px]">project it 15</h1>
          </div>

          <div
           className="flex flex-col items-center bg-red-400 justify-center gap-1 cursor-pointer  rounded-md border-[1px] group w-[50px] h-[50px]" 
           onClick={() => setMenuBar(!menuBar)}
          >
            <div className={`h-[2px] bg-white w-[20px]   ${menuBar ? "navbar_menu_top" :""} duration-200`}></div>
            <div className={`h-[2px] bg-white w-[20px]  ${menuBar ? "navbar_menu_middle" :""}  duration-200 `}></div>
            <div className={`h-[2px] bg-white w-[20px] ${menuBar ? "navbar_menu_bottom" : ""}  duration-200`}></div>
          </div>

        </div>

      </div>
    </>
  )
}

export default NavBar