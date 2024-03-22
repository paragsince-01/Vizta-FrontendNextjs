"use client";
import React, { useState } from "react";
import { IoMdUndo } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";
import MSExcel from "../images/MSExcel.png";
import Text from "../images/Text.png";
import JSON from "../images/JSON.jpg";
import MSAccess from "../images/MSAccess.jpeg";
import RedShift from "../images/RedShift.png";
import PostGres from "../images/PostGres.png";
import MYSql from "../images/MYSql.png";

// Import the JSON data
import jsonData from "./data.json"; // Adjust the path as per your file structure
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Modal,
  ModalHeader,
  ModalBody,
  Button,
} from "flowbite-react";
import Image from "next/image";

export default function Datasource() {
  // Extract the DatabaseConnectionDetails from the JSON data
  const databaseConnections = jsonData.DatabaseConnectionDetails;
  const [showPopup, setShowPopup] = useState(false);
  const [activeTab, setActiveTab] = useState("general");
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
            <div className="relative left-24 text-white text-xl">
              <ul className="flex justify-between items-center gap-5">
                <li>File</li>
                <li>Data</li>
                <li>Server</li>
                <li>Help</li>
              </ul>
            </div>
            <div className="flex justify-center items-center text-white pr-10 text-2xl">
              {/* account icon */}
              <span>
                <MdAccountCircle />
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
            <button className="border bg-gray-300 rounded-lg w-24 h-8 font-medium">
              Connect
            </button>
          </div>

          <div className="shadow-xl border-t-2 border-b w-11/12 h-60 rounded-lg border-gray-900 justify-end overflow-x-auto overflow-y-auto">
            <Table className="px-10 overflow-hidden p-2">
              <TableHead className="border-b-2 ">
                <TableHeadCell className="font-medium text-base flex items-center gap-5  relative md:top-3 lg:top-0">
                  <FaCheckCircle /> Name
                </TableHeadCell>
                <TableHeadCell className="font-medium text-base">
                  Workbook
                </TableHeadCell>
                <TableHeadCell className="font-medium text-base">
                  Owner
                </TableHeadCell>
                <TableHeadCell className="font-medium text-base">
                  Location
                </TableHeadCell>
                <TableHeadCell className="font-medium text-base">
                  Connects To
                </TableHeadCell>
                <TableHeadCell className="font-medium text-base">
                  Live / Last Extract
                </TableHeadCell>
              </TableHead>
              {databaseConnections.map((connection, index) => (
                <TableBody key={index} className="overflow-y-auto px-10">
                  <TableRow className="border-b-2">
                    <TableCell className="font-light text-md relative left-9">
                      {connection.DBName}
                    </TableCell>{" "}
                    <TableCell className="font-light text-md relative left-9">
                      {connection.WBook}
                    </TableCell>{" "}
                    <TableCell className="font-light text-md relative lg:left-16 md:left-0">
                      {connection.Owner}
                    </TableCell>{" "}
                    <TableCell className="font-light text-md relative lg:left-12 md:left-0">
                      {connection.Location}
                    </TableCell>{" "}
                    <TableCell className="font-light text-md relative lg:left-12 md:left-0">
                      {connection.Connects}
                    </TableCell>{" "}
                    <TableCell className="font-light text-md relative lg:left-12 md:left-0">
                      {connection.LiveLast}
                    </TableCell>
                  </TableRow>
                </TableBody>
              ))}
            </Table>
          </div>
        </div>

        <div className="border-t-4 border-blue-950 mt-5 w-[95%] relative left-10 flex md:flex-col lg:flex-row md:gap-6 lg:gap-36">
          <div className="flex flex-col pl-4 pt-2">
            <h1 className="text-xl font-semibold">New Data Sources</h1>
            <p>To a File</p>
            <div className="flex flex-wrap gap-5 py-2">
              <div className="flex flex-col shadow-md border w-28 rounded-lg h-28 justify-center items-center gap-10">
                <Image src={MSExcel} className="w-10 relative top-5" />
                <span className="rounded-lg w-28 bg-gray-200 flex justify-center items-center h-8 text-md">
                  Excel File
                </span>
              </div>
              <div className="flex flex-col shadow-md border w-28 rounded-lg h-28 justify-center items-center gap-10">
                <Image src={Text} className="w-10 relative top-5" />
                <span className="rounded-lg w-28 bg-gray-200 flex justify-center items-center h-8 text-md">
                  Text File
                </span>
              </div>
              <div className="flex flex-col shadow-md border w-28 rounded-lg h-28 justify-center items-center gap-10">
                <Image src={JSON} className="w-10 relative top-5" />
                <span className="rounded-lg w-28 bg-gray-200 flex justify-center items-center h-8 text-md">
                  JSON File
                </span>
              </div>
              <div className="flex flex-col shadow-md border w-28 rounded-lg h-28 justify-center items-center gap-10">
                <Image src={MSAccess} className="w-10 relative top-5" />
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
                <Image src={RedShift} className="w-10 relative top-5" />
                <span className="rounded-lg w-28 bg-gray-200 flex justify-center items-center h-8">
                  RedShift
                </span>
              </div>
              <div className="flex flex-col shadow-md border w-28 rounded-lg h-28 justify-center items-center gap-10">
                <Image src={PostGres} className="w-10 relative top-5" />
                <span className="rounded-lg w-28 bg-gray-200 flex justify-center items-center h-8">
                  PostGres
                </span>
              </div>
              <div
                className="flex flex-col shadow-md border w-28 rounded-lg h-28 justify-center items-center gap-10"
                onClick={() => {
                  setShowPopup(true);
                }}
              >
                <Image src={MYSql} className="w-10 relative top-5" />
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
          className="w-[35rem] absolute transform translate-x-[80%] translate-y-[18%]"
        >
          <ModalBody className="h-full  mb-4">
            <div className="flex flex-col">
              <div className="bg-blue-950 text-white">
                <div className="flex justify-between items-center  rounded-lg px-4">
                  <h1>My SQL</h1>
                  <ModalHeader className="text-lg" />
                </div>

                <ul className="flex gap-2 px-4">
                  <li
                    id="general"
                    onClick={() => setActiveTab("general")}
                    className={`cursor-pointer ${
                      activeTab === "general" ? "underline" : ""
                    }`}
                  >
                    General
                  </li>
                  <li
                    id="initial"
                    onClick={() => setActiveTab("initial")}
                    className={`cursor-pointer ${
                      activeTab === "initial" ? "underline" : ""
                    }`}
                  >
                    Initial SQL
                  </li>
                </ul>
              </div>
              {/* general */}

              {activeTab === "general" && (
                <div className="flex flex-col gap-2 pt-5 px-4">
                  <div className="flex flex-col gap-2 pt-5 px-4">
                    <label htmlFor="server">Server</label>
                    <input
                      type="string"
                      id="server"
                      className="border-b-2 w-full "
                    />
                    <label htmlFor="port">Port</label>
                    <input
                      type="string"
                      id="port"
                      className="border-b-2 w-full "
                    />
                    <label htmlFor="database">Database</label>
                    <input
                      type="string"
                      id="database"
                      className="border-b-2 w-full "
                    />
                    <label htmlFor="username">Username</label>
                    <input
                      type="string"
                      id="username"
                      className="border-b-2 w-full "
                    />
                    <label htmlFor="password">Password</label>
                    <input
                      type="string"
                      id="password"
                      className="border-b-2 w-full "
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
                      <Button className="bg-blue-950 text-white w-20 justify-end items-end flex ">
                        Sign In
                      </Button>
                    </div>
                  </div>
                </div>
              )}
              {/* initial sql */}
              {activeTab === "initial" && (
                <div className="flex flex-col gap-2 pt-5 px-4">
                  <div className="flex flex-col gap-2 pt-5 px-4">
                    <label htmlFor="server">Server</label>
                    <input
                      type="string"
                      id="server"
                      className="border-b-2 w-full "
                    />
                    <label htmlFor="port">Port</label>
                    <input
                      type="string"
                      id="port"
                      className="border-b-2 w-full "
                    />
                    <label htmlFor="database">Database</label>
                    <input
                      type="string"
                      id="database"
                      className="border-b-2 w-full "
                    />
                    <label htmlFor="username">Username</label>
                    <input
                      type="string"
                      id="username"
                      className="border-b-2 w-full "
                    />
                    <label htmlFor="password">Password</label>
                    <input
                      type="string"
                      id="password"
                      className="border-b-2 w-full "
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
                      <Button className="bg-blue-950 text-white w-20 justify-end items-end flex ">
                        Sign In
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ModalBody>
        </Modal>
      </section>
    </>
  );
}
