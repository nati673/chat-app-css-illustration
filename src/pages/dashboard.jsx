import React, { useState } from "react";
import workSvg from "../assets/images/icon-work.svg";
import playSvg from "../assets/images/icon-play.svg";
import studySvg from "../assets/images/icon-study.svg";
import ellipsisSvg from "../assets/images/icon-ellipsis.svg";
import exerciseSvg from "../assets/images/icon-exercise.svg";
import socialSvg from "../assets/images/icon-social.svg";
import selfCareSvg from "../assets/images/icon-self-care.svg";
import Ppic from "../assets/images/image-jeremy.png";
import { data } from "../data/data";
import { getTimeframeSingular } from "../util/getTimeframeSingular";

function Dashboard() {
  const [timeframe, setTimeframe] = useState("weekly");

  const getIcon = (title) => {
    switch (title) {
      case "Work":
        return { bgc: "#FF8B64", icon: workSvg };
      case "Play":
        return { bgc: "#56C2E6", icon: playSvg };
      case "Study":
        return { bgc: "#FF5E7D", icon: studySvg };
      case "Exercise":
        return { bgc: "#4BCF83", icon: exerciseSvg };
      case "Social":
        return { bgc: "#7235D1", icon: socialSvg };
      case "Self Care":
        return { bgc: "#F1C75B", icon: selfCareSvg };
      default:
        return "";
    }
  };
  return (
    <div>
      <div className="flex  flex-col lg:flex-row items-center  gap-[1.6rem] justify-center min-h-screen">
        <div className="bg-[#1D204B] h-[465px] w-[90%] lg:w-[230px] rounded-[15px] ">
          <div className="w-full flex lg:flex-col flex-row  items-center lg:items-start  h-[320px]  bg-[#5746EA] rounded-[15px]">
            <div className="p-7 pt-8">
              <img
                className="border-neutral-50 border-[3.5px] rounded-full"
                src={Ppic}
                width={75}
                alt=""
              />
            </div>
            <div className="pl-[28px] pt-[6px]">
              <p className="font-Rubik text-[#A7A2FF] text-[14px] font-[400]">
                Report for
              </p>
              <h1 className="font-Rubik text-white text-[37px] font-[100] leading-[2.80rem]	">
                Jeremy Robson
              </h1>
            </div>
          </div>
          {/* inactive color #7577B2 */}
          <div className="lg:h-[140px]  w-full bg-[#1D204B] rounded-b-[15px]  ">
            <div className="pl-[23px] p-4 flex lg:flex-col flex-row lg:justify-start justify-center">
              <a
                className={`font-Rubik p-[0.4rem] tracking-wide cursor-pointer hover:text-gray-300  ${
                  timeframe === "daily" ? "text-gray-300" : "text-[#7577B2]"
                }`}
                onClick={() => setTimeframe("daily")}
              >
                Daily
              </a>
              <a
                className={`font-Rubik p-[0.4rem] tracking-wide cursor-pointer hover:text-gray-300 ${
                  timeframe === "weekly" ? "text-gray-300" : "text-[#7577B2]"
                }`}
                onClick={() => setTimeframe("weekly")}
              >
                Weekly
              </a>
              <a
                className={`font-Rubik p-[0.4rem] tracking-wide cursor-pointer hover:text-gray-300 ${
                  timeframe === "monthly" ? "text-gray-300" : "text-[#7577B2]"
                }`}
                onClick={() => setTimeframe("monthly")}
              >
                Monthly
              </a>
            </div>
          </div>
        </div>
        <div class="grid lg:grid-cols-3 sm:grid-cols-1 gap-[1.6rem] lg:w-fit w-[90%]">
          {data.map((item, index) => (
            <div className="">
              <div
                className={`bg-no-repeat w-full h-[56px] rounded-t-[15px] bg-right  `}
                style={{
                  backgroundImage: `url(${getIcon(item.title).icon})`,
                  backgroundColor: getIcon(item.title).bgc,
                  backgroundSize: "68px",
                  backgroundPositionX: "90%",
                  backgroundPositionY: "-7px",
                }}
              ></div>
              <div className="bg-[#1D204B] hover:bg-[#34397B] w-full lg:w-[230px] h-[180px] rounded-t-[15px] mt-[-15px] rounded-[15px] p-[1.4rem] flex flex-col justify-between">
                <div className=" p-1 flex flex-row items-center justify-between">
                  <h1 className="font-Rubik font-[400] text-white tracking-wide text-[16px]">
                    {item.title}
                  </h1>
                  <img
                    src={ellipsisSvg}
                    width={17}
                    alt="ellipsis"
                    className="text-gray-400 hover:filter hover:brightness-200 transition-all"
                  />
                </div>
                <div className="p-1">
                  <h2 className="font-Rubik text-[50px] text-white font-[200] tracking-[0.0037em]">
                    {item.timeframes[timeframe].current}hrs
                  </h2>

                  <p className="font-Rubik text-[#a4a8eb] font-[400] text-[13.3px]  mb-[1px]">
                    Last {getTimeframeSingular(timeframe)} -{" "}
                    {item.timeframes[timeframe].previous}hrs
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
