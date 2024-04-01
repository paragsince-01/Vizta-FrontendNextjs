"use client";
import React, { useState, useEffect } from "react";
import { MdAccountCircle } from "react-icons/md";
// Import the JSON data
import jsonData from "../data.json"; // Adjust the path as per your file structure
import MyAccountSetting from "./MyAccountSetting";
import MyAccountPerformance from "./MyAccountPerformance";
import MyAccountContent from "./MyAccountContent";

export default function MyAccount() {
  const UserConnectionsDetails = jsonData.UserDetails;
  const [activeTab, setActiveTab] = useState("setting");

  return (
    <section className="flex flex-col gap-2 w-full h-full" >
      <div className="w-[99.5%] h-20 border rounded-lg shadow-lg mt-2 border-gray-200 z-0 flex lg:gap-4 md:gap-0 justify-start px-5 items-center ml-1">
        <div>
          <MdAccountCircle className="text-7xl" />
        </div>
        {UserConnectionsDetails.map((details) => (
          <div key={details.Username} className="flex flex-col lg:gap-3 md:gap-0">
            <h1 className="tracking-wider">
              <strong className="font-semibold">{details.Username}</strong>
            </h1>
            <div className="flex lg:gap-8 md:gap-4">
              <p className="tracking-wider font-light">
                <strong className="font-semibold">User: </strong>
                {details.Useremail}
              </p>
              <p className="tracking-wider font-light">
                <strong className="font-semibold">Site Role: </strong>
                {details.UserSiteRole}
              </p>
              <p className="tracking-wider font-light">
                <strong className="font-semibold">Last Sign In: </strong>
                {details.UserLastSignIn}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-[99.5%] h-12 border rounded-lg shadow-lg border-gray-200 z-0 px-5 flex justify-start items-center ml-1">
        <ul className="flex gap-8">
          <li
            id="setting"
            className={`cursor-pointer ${
              activeTab === "setting" ? "underline underline-offset-[10px] decoration-2" : ""
            }`}
            onClick={() => setActiveTab("setting")}
          >
            Setting
          </li>
          <li
            id="performance"
            className={`cursor-pointer ${
              activeTab === "performance" ? "underline underline-offset-[10px] decoration-2" : ""
            }`}
            onClick={() => setActiveTab("performance")}
          >
            Performance
          </li>
          <li
            id="content"
            className={`cursor-pointer ${
              activeTab === "content" ? "underline underline-offset-[10px] decoration-2" : ""
            }`}
            onClick={() => setActiveTab("content")}
          >
            Content 10{" "}
          </li>
        </ul>
        
      </div>
      {/* Render the component based on the 'activeTab' state */}
      {activeTab === "setting" && <MyAccountSetting />}
      {activeTab === "performance" && <MyAccountPerformance />}
      {activeTab === "content" && <MyAccountContent />}
    </section>
  );
}
