"use client";
import React, { useState } from "react";
import { IoMdUndo } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";
// import MSExcel from ".";
// import Text from "../images/Text.png";
// import JSON from "../images/JSON.jpg";
// import MSAccess from "../images/MSAccess.jpeg";
// import RedShift from "../images/RedShift.png";
// import PostGres from "../images/PostGres.png";
// import MYSql from "../images/MYSql.png";

// Import the JSON data
import jsonData from "../data.json"; // Adjust the path as per your file structure
import {
  Dropdown,
  DropdownHeader,
  DropdownItem,
  Modal,
  ModalHeader,
  ModalBody,
  Button,
} from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { MdManageAccounts } from "react-icons/md";
import { PiSignOutBold } from "react-icons/pi";

export default function Datasource() {
  // Extract the DatabaseConnectionDetails from the JSON data
  const databaseConnections = jsonData.DatabaseConnectionDetails;
  const [showPopup, setShowPopup] = useState(false);
  const [activeTab, setActiveTab] = useState("general");
  const [selectedRow, setSelectedRow] = useState(null);
  const [connectClicked, setConnectClicked] = useState(false);

  const handleConnectClick = () => {
    if (selectedRow !== null) {
      setConnectClicked(true);
      alert("database is connected");
      // Add your connect functionality here
    }
    // Add your connect functionality here
  };
  // const [isChecked, setIsChecked] = useState(false);

  // const handleCheckboxChange = (event) => {
  //   setIsChecked(event.target.checked);
  // };

  return (
    <>
      <section
        className={`flex flex-col overflow-hidden overflow-y-hidden ${
          showPopup ? "opacity-60" : ""
        }`}
      >
        {/* Header section */}
        <header className="w-full h-16 bg-blue-950 flex flex-row">
          {/* Left section */}
          <div className="pl-5 flex gap-5 text-2xl justify-between items-center text-white">
            {/* undo icon */}
            <span>
              <IoMdUndo />
            </span>
            <strong>Home</strong>
          </div>

          {/* Right section */}
          <div className="w-full flex flex-row justify-between items-center">
            <div className="relative left-24 text-white text-xl"></div>
            <div className="flex justify-center items-center text-white pr-10 text-2xl">
              {/* account icon */}
              <span className="cursor-pointer">
                <Dropdown
                  arrowIcon={false}
                  inline
                  className="rounded-lg shadow-lg h-[4.4rem]"
                  label={<MdAccountCircle />}
                >
                  <Link href="/myaccount">
                    <DropdownItem className="text-black flex items-center justify-center gap-1">
                      <MdManageAccounts />
                      My Account
                    </DropdownItem>
                  </Link>
                  <DropdownItem className="text-black flex items-center justify-center gap-1 relative -left-2 -top-2">
                    <PiSignOutBold />
                    Log-Out
                  </DropdownItem>
                </Dropdown>
              </span>
            </div>
          </div>
        </header>

        {/* Body section */}
        <section className="flex flex-col p-5 gap-2">
          <h2 className="text-2xl font-semibold">Saved Data Sources</h2>
          <div className="flex flex-col ml-5 mt-2 gap-y-3">
            <div className="flex items-center">
              <CiSearch className="relative left-5 font-medium" />
              <input
                type="text"
                name=""
                id=""
                className="w-72 h-7 border-2 rounded-lg pl-5 font-light text-black"
                placeholder="Search For Data"
              />
            </div>
            <span className="ml-5 font-light">Data Sources</span>
          </div>
        </section>

        {/* Display the database connection details */}
        <div className="flex flex-col gap-2 mx-14 -mt-8">
          <div className="w-11/12 flex justify-end items-center">
            <button
              className={`cursor-pointer border rounded-lg w-24 h-8 font-medium ${
                selectedRow !== null
                  ? "bg-blue-950 text-white"
                  : "bg-gray-200 text-black"
              }`}
              disabled={!selectedRow}
              onClick={handleConnectClick}
            >
              {selectedRow !== null ? "Connect" : "Connect"}
            </button>
          </div>

          <div className="shadow-xl border-t-2 border-b w-11/12 h-60 rounded-lg border-gray-900 flex flex-col overflow-x-auto">
            <div className=" pt-2 ">
              <ul className="flex gap-20 justify-between items-center lg:w-full md:w-[183%] pb-2 border-b-2 px-10">
                <li className="flex gap-4 items-center justify-center">
                  <FaCheckCircle />
                  Name
                </li>
                <li className="relative lg:left-[1rem]">Workbook</li>
                <li className="relative ">Owner</li>
                <li className="relative ">Location</li>
                <li className="relative ">Connects To</li>
                <li className="relative lg:right-[2rem]">
                  Live / Last Extract
                </li>
              </ul>
            </div>
            <div className="overflow-hidden overflow-y-auto pl-[3rem] py-2 lg:w-full md:w-[183%]">
              {databaseConnections.map((connection, index) => (
                <div
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-200 rounded-lg" : ""}
                >
                  <ul
                    className={`flex gap-4 justify-between items-center border-b-2 py-2 pl-2 rounded-lg ${
                      selectedRow === index
                        ? "cursor-pointer bg-blue-950 text-white "
                        : "cursor-pointer"
                    }`}
                    onClick={() => setSelectedRow(index)}
                  >
                    <li>{connection.DBName}</li>
                    <li className="relative lg:right-[1.5rem] md:right-6">
                      {connection.WBook}
                    </li>
                    <li className="relative lg:-right-[0.5rem] md:right-6">
                      {connection.Owner}
                    </li>
                    <li className="relative lg:right-[3rem] md:right-[4.2rem]">
                      {connection.Location}
                    </li>
                    <li className="relative lg:right-[4.5rem] md:right-14">
                      {connection.Connects}
                    </li>
                    <li className="relative lg:right-[2rem] md:right-6">
                      {connection.LiveLast}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t-4 border-blue-950 mt-5 mb-4 w-[95%] relative left-10 flex md:flex-col lg:flex-row md:gap-6 lg:gap-24">
          <div className="flex flex-col pl-4 pt-2">
            <h1 className="text-xl font-semibold">New Data Sources</h1>
            <p>To a File</p>
            <div className="flex flex-wrap gap-5 py-2">
              <div className="flex flex-col shadow-md border w-28 rounded-lg h-28 justify-center items-center gap-10">
                <Image src='/images/MSExcel.png' width='40' height="40" className="w-10 relative top-5" alt="" />
                <span className="rounded-lg w-28 bg-gray-200 flex justify-center items-center h-8 text-md">
                  Excel File
                </span>
              </div>
              <div className="flex flex-col shadow-md border w-28 rounded-lg h-28 justify-center items-center gap-10">
                {/* <Image src={Text} className="w-10 relative top-5" alt="" /> */}
                <Image src='/images/Text.png' width='40' height="40" className="w-10 relative top-5" alt="" />
                <span className="rounded-lg w-28 bg-gray-200 flex justify-center items-center h-8 text-md">
                  Text File
                </span>
              </div>
              <div className="flex flex-col shadow-md border w-28 rounded-lg h-28 justify-center items-center gap-10">
                {/* <Image src={JSON} className="w-10 relative top-5" alt="" /> */}
                <Image src='/images/JSON.jpg' width='40' height="40" className="w-10 relative top-5" alt="" />
                <span className="rounded-lg w-28 bg-gray-200 flex justify-center items-center h-8 text-md">
                  JSON File
                </span>
              </div>
              <div className="flex flex-col shadow-md border w-28 rounded-lg h-28 justify-center items-center gap-10">
                {/* <Image src={MSAccess} className="w-10 relative top-5" alt="" /> */}
                <Image src='/images/MSAccess.jpeg' width='40' height="40" className="w-10 relative top-5" alt="" />
                <span className="rounded-lg w-28 bg-gray-200 flex justify-center items-center h-8 text-md">
                  MS Access
                </span>
              </div>
            </div>
          </div>
          <div className="lg:border-l-2 md:border-b-2 border-blue-950 md:h-0 h-1 lg:w-0 lg:h-40 md:w-[35rem] relative top-8"></div>
          <div className="flex flex-col pl-4 lg:pt-8 md:pt-10">
            <p>To a Server</p>
            <div className="flex flex-wrap gap-5 py-2">
              <div className="flex flex-col shadow-md border w-28 rounded-lg h-28 justify-center items-center gap-10">
                {/* <Image src={RedShift} className="w-10 relative top-5" alt="" /> */}
                <Image src='/images/RedShift.png' width='40' height="40" className="w-10 relative top-5" alt="" />
                <span className="rounded-lg w-28 bg-gray-200 flex justify-center items-center h-8">
                  RedShift
                </span>
              </div>
              <div className="flex flex-col shadow-md border w-28 rounded-lg h-28 justify-center items-center gap-10">
                {/* <Image src={PostGres} className="w-10 relative top-5" alt="" /> */}
                <Image src='/images/PostGres.png' width='40' height="40" className="w-10 relative top-5" alt="" />
                <span className="rounded-lg w-28 bg-gray-200 flex justify-center items-center h-8">
                  PostGres
                </span>
              </div>
              <div
                className="cursor-pointer flex flex-col shadow-md border w-28 rounded-lg h-28 justify-center items-center gap-10"
                onClick={() => {
                  setShowPopup(true);
                }}
              >
                {/* <Image src={MYSql} className="w-10 relative top-5" alt="" /> */}
                <Image src='/images/MSAccess.jpeg' width='40' height="40" className="w-10 relative top-5" alt="" />
                <span className="rounded-lg w-28 bg-gray-200 flex justify-center items-center h-8">
                  My SQL
                </span>
              </div>
            </div>
          </div>
        </div>
        <Modal
          show={showPopup}
          onClose={() => {
            setShowPopup(false);
          }}
          popup
          size="md"
          className="w-[32rem] min-h-70vh absolute transform lg:translate-x-[80%] lg:translate-y-[12%] md:translate-x-[27%] md:translate-y-[12%]"
        >
          <ModalBody className="h-full mb-4 border-2 rounded-lg shadow-xl">
            <div className="flex flex-col">
              <div className="bg-blue-950 text-white rounded-t-lg border-t border-transparent h-20 flex flex-col gap-2 pt-2">
                <div className="flex justify-between items-center rounded-lg px-8 text-lg">
                  <h1>My SQL</h1>
                  <ModalHeader className="text-lg p-2" />
                </div>

                <ul className="flex gap-2 px-8">
                  <li
                    id="general"
                    onClick={() => setActiveTab("general")}
                    className={`cursor-pointer font-lg ${
                      activeTab === "general" ? "underline" : ""
                    }`}
                  >
                    General
                  </li>
                  <li
                    id="initial"
                    onClick={() => setActiveTab("initial")}
                    className={`cursor-pointer font-lg ${
                      activeTab === "initial" ? "underline" : ""
                    }`}
                  >
                    Initial SQL
                  </li>
                </ul>
              </div>
              {/* general */}

              {activeTab === "general" && (
                <div className="flex flex-col gap-2 pt-0 px-4">
                  <form className="flex flex-col gap-2 pt-5 px-4">
                    <label htmlFor="server">Server</label>
                    <input
                      type="string"
                      id="server"
                      className="border-b-2 w-full text-base"
                    />
                    <label htmlFor="port">Port</label>
                    <input
                      type="string"
                      id="port"
                      className="border-b-2 w-full text-base"
                    />
                    <label htmlFor="database">Database</label>
                    <input
                      type="string"
                      id="database"
                      className="border-b-2 w-full text-base"
                    />
                    <label htmlFor="username">Username</label>
                    <input
                      type="string"
                      id="username"
                      className="border-b-2 w-full text-base"
                    />
                    <label htmlFor="password">Password</label>
                    <input
                      type="string"
                      id="password"
                      className="border-b-2 w-full text-base"
                    />
                    <div className="flex gap-2 pl-4 pt-2 items-center">
                      <input
                        type="checkbox"
                        id="server"
                        className="rounded-sm"
                        // checked={isChecked}
                        // onChange={handleCheckboxChange}
                      />
                      <label htmlFor="server">Require SSL</label>
                    </div>
                    <div className="flex justify-end items-center pr-5 h-8">
                      <Button
                        className="bg-blue-950 text-white w-20 justify-end items-end flex relative -top-3 "
                        type="submit"
                      >
                        Sign In
                      </Button>
                    </div>
                  </form>
                </div>
              )}
              {/* initial sql */}
              {activeTab === "initial" && (
                <div className="flex flex-col gap-2 pt-0 px-4">
                  <form className="flex flex-col gap-2 pt-5 px-4">
                    <label htmlFor="server">Server</label>
                    <input
                      type="string"
                      id="server"
                      className="border-b-2 w-full text-base"
                    />
                    <label htmlFor="port">Port</label>
                    <input
                      type="string"
                      id="port"
                      className="border-b-2 w-full text-base"
                    />
                    <label htmlFor="database">Database</label>
                    <input
                      type="string"
                      id="database"
                      className="border-b-2 w-full text-base"
                    />
                    <label htmlFor="username">Username</label>
                    <input
                      type="string"
                      id="username"
                      className="border-b-2 w-full text-base"
                    />
                    <label htmlFor="password">Password</label>
                    <input
                      type="string"
                      id="password"
                      className="border-b-2 w-full text-base"
                    />
                    <div className="flex gap-2 pl-4 pt-2 items-center">
                      <input
                        type="checkbox"
                        id="server"
                        className="rounded-sm"
                        // checked={isChecked}
                        // onChange={handleCheckboxChange}
                      />
                      <label htmlFor="server">Require Initial SSL</label>
                    </div>
                    <div className="flex justify-end items-center pr-5 h-8">
                      <Button
                        className="bg-blue-950 text-white w-20 justify-end items-end flex relative -top-3 "
                        type="submit"
                      >
                        Sign In
                      </Button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </ModalBody>
        </Modal>
      </section>
    </>
  );
}
