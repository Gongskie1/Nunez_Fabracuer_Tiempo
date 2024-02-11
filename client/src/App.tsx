import { 
  NavBar,
  SideBar,
  Weather
 } from "./components";


function App() {
  
  return (
    <>
      <div className="flex flex-row h-full w-full">
        <div className=" h-screen">
          <SideBar/>
        </div>
        <div className="w-full">
          <NavBar/>
          <div className=" p-2 flex flex-row ">
            <Weather/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
