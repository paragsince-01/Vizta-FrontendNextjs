import React from "react";
// import JSONData from "./data.json";
import JSONData from "../myaccount/data.json";
import { Button } from "@mui/material";

export default function MyAccountSetting() {
  const UserConnectionsDetails = JSONData.UserDetails;
  return (
    <>
      <section className="flex md:flex-col p-5 lg:gap-10 md:gap-4 w-[99.5%] ml-1 h-full border rounded-lg shadow-lg border-gray-200 z-0 mb-4">
        {UserConnectionsDetails.map((details, index) => (
          <>
            <div
              key={index}
              className=" w-full flex lg:flex-row md:flex-col lg:gap-40 md:gap-12 lg:h-48 md:h-96"
            >
              <div className="flex flex-col gap-5">
                <h1 className="text-2xl font-medium">Account</h1>
                <div className="flex gap-20 justify-start">
                  <div className="flex flex-col items-start justify-start gap-4">
                    <strong className="font-semibold tracking-wider">
                      Username:
                    </strong>
                    <strong className="font-semibold tracking-wider">
                      Display Name:
                    </strong>
                    <strong className="font-semibold tracking-wider">
                      Email:
                    </strong>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-4">
                    <p className="tracking-wider font-light">
                      {details.Useremail}
                    </p>
                    <p className="tracking-wider font-light">
                      {details.Username}
                    </p>
                    <p className="tracking-wider font-light">
                      {details.Useremail}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <h1 className="text-2xl font-medium">Other Details</h1>
                <div className="flex gap-20 justify-start">
                  <div className="flex flex-col items-start justify-start gap-4">
                    <strong className="font-semibold tracking-wider">
                      DOB:
                    </strong>
                    <strong className="font-semibold tracking-wider">
                      Gender:
                    </strong>
                    <strong className="font-semibold tracking-wider">
                      Joining Date:
                    </strong>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-4">
                    <p className="tracking-wider font-light">
                      {details.UserDOB}
                    </p>
                    <p className="tracking-wider font-light">
                      {details.UserGender}
                    </p>
                    <p className="tracking-wider font-light">
                      {details.UserJoiningDate}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
        <div className="w-full h-28">
          <button className="bg-blue-950 text-white px-10 tracking-widest h-8 rounded-lg font-medium">
            Change Password
          </button>
        </div>
        <div className="flex flex-col gap-8 w-full md:h-44 lg:h-32">
          <h1 className="font-medium ">Preferences</h1>
          <div className="flex lg:gap-16 items-basline justify-start md:gap-4">
            <span>Start Page - </span>
            <p className="text-lg w-10/12 md:leading-10 lg:leading-normal ">To change your start page, navigate o a page and select "Make This My Start Page" from your profile menu in the upper - right corner of the page Current start page: /home(default)
            <button className="border border-gray-900 rounded-lg px-4 lg:ml-4 md:ml-0 lg:h-7 md:h-10">Reset</button>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
