import React from "react";
import { TheHeading } from "./components/Heading/Heading";
import { Sidebar } from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard";
// import Progress from "@delowar/react-circle-progressbar";
import {
  AiOutlineCheckSquare,
  AiOutlineClockCircle,
  AiOutlineDown,
  AiOutlineEdit,
  AiOutlineSmallDash,
} from "react-icons/ai";

function App() {
  return (
    <main className="bg-gradient-to-r from-slate-300 via-slate-300 to-slate-300 h-[100vh] w-full aspect-square md:p-5">
      <div className=" flex flex-nowrap w-full md:static relative h-[100vh]">
        <Sidebar />
        <div className="min-w-0  overflow-y-auto overflow-auto1 md:w-5/6 p-4 md:pb-0 md:w-aotu w-full">
          <TheHeading />
          <div className="flex gap-[20px]">
            <Dashboard />
            <div className="min-w-[400px]">
              <div
                className="bg-white rounded-[30px] p-6"
                style={{ minHeight: "70vh" }}
              >
                <div className="rounded-2xl bg-purple-600 p-3 flex justify-between">
                  <div>
                    <p>Select</p>
                    <h3>Design Team</h3>
                  </div>
                  <div>
                    <img
                      src="https://ben.com.vn/tin-tuc/wp-content/uploads/2021/12/anh-che-cho-hai-huoc-cho-dien-thoai-1.jpg"
                      alt="Avatar"
                      className="w-[50px] h-[50px] align-middle rounded-full mr-2"
                    />
                  </div>
                </div>

                <div className="flex justify-center items-center mt-6">
                  {/* <Progress
                    percent={72}
                    isBgShadow
                    bgShadow={{
                      inset: true,
                      vertical: 2,
                      horizontal: 2,
                      blur: 4,
                      opacity: 0.4,
                      color: "#fdfbff",
                    }}
                    emptyColor="#f1ecff"
                    borderWidth="6"
                    borderBgWidth="40"
                    fillColor="#7b59d2"
                    // eslint-disable-next-line react/jsx-no-literals
                  >
                    72%
                  </Progress> */}
                </div>

                <div>
                  <h3>Project</h3>
                  <div className="grid grid-cols-2 grid-rows-2 gap-5">
                    <div className="bg-purple-600 rounded-2xl p-3">
                      <p>TOTAL</p>
                      <div className="flex mt-2  ">
                        <div style={{ border: "2px solid blue" }} />
                        <p className="font-normal ml-1">114</p>
                      </div>
                    </div>
                    <div className="bg-orange-200 rounded-2xl p-3">
                      <p>COMPLETED</p>
                      <div className="flex mt-2 ">
                        <div style={{ border: "2px solid orange" }} />
                        <p className="font-normal ml-1">114</p>
                      </div>
                    </div>
                    <div className="bg-pink-200 rounded-2xl p-3">
                      <p>IN PROGRESS</p>
                      <div className="flex mt-2 ">
                        <div style={{ border: "2px solid pink" }} />
                        <p className="font-normal ml-1">114</p>
                      </div>
                    </div>
                    <div className="bg-purple-100 rounded-2xl p-3">
                      <p>WAITING</p>
                      <div className="flex mt-2 ">
                        <div style={{ border: "2px solid purple" }} />
                        <p className="font-normal ml-1">114</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="bg-white rounded-[30px] mt-6 p-6 "
                style={{ minHeight: "30vh" }}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-end">
                    <div className="bg-purple-500 w-12 h-11 flex items-center rounded-md ">
                      <AiOutlineClockCircle className="w-full" />
                    </div>
                    <div className="ml-6">
                      <p>Sunday,20 December</p>
                      <p className="font-bold"> 08:00-11:00 AM</p>
                    </div>
                  </div>

                  <div>
                    <AiOutlineEdit />
                  </div>
                </div>
                <div style={{ borderTop: "1px solid " }} className="my-6" />
                <div className="flex justify-between items-center">
                  <div className="flex items-end">
                    <div className="bg-blue-600 w-12 h-11 flex items-center rounded-md ">
                      <AiOutlineCheckSquare className="w-full" />
                    </div>
                    <div className="ml-6">
                      <p>Delaration centre</p>
                      <p className="font-bold"> Internal Messages</p>
                    </div>
                  </div>

                  <div>
                    <AiOutlineDown />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* {children} */}
        </div>
      </div>
    </main>
  );
}

export default App;
