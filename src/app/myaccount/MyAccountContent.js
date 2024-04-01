import React from "react";
import { MdDashboard } from "react-icons/md";
import { FaListUl } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { GoInfo } from "react-icons/go";
import { IoMdStar } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
// Import the JSON data
import jsonData from "../data.json"; // Adjust the path as per your file structure

export default function MyAccountContent() {
  const UserDeatils = jsonData.UserCreation;
  return (
    <section className=" bg-gray-200 flex md:flex-col p-5 lg:gap-10 md:gap-4 w-[99.5%] ml-1 h-full border rounded-lg shadow-xl border-gray-200 z-0 mb-4">
      <div className="flex md:flex-col lg:flex-row justify-between items-start gap-4">
        <div className="flex gap-4">
          <div className="relative">
            <select className="bg-gray-200 rounded-xl border px-3 flex items-center justify-center appearance-none bg-transparent">
              <option value="option1">New</option>
              <option value="option2">Old</option>
            </select>
          </div>
          <span className="flex gap-2 items-center">
            <input
              type="checkbox"
              name="selectAll"
              id="selectAll"
              className="rounded"
            />
            <label htmlFor="selectAll">Select All</label>
          </span>
        </div>
        <div className="flex gap-8 items-center">
          <div className="flex items-center gap-2">
            <h1>Content Type:</h1>
            <select className="bg-gray-200 border-t-0 border-l-0 border-r-0 border-b-2 flex items-center justify-center pl-2  outline-none ">
              <option value="">All</option>
              <option value="option1">Content Type 1</option>
              <option value="option2">Content Type 2</option>
              <option value="option3">Content Type 3</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <h1>Sort By:</h1>
            <select className="bg-gray-200 border-t-0 border-l-0 border-r-0 border-b-2 w-[] 19rem flex items-center justify-center pl-2 ">
              <option value="option0">Name (a-z)</option>
              <option value="option1">Size(acs - desc)</option>
              <option value="option2">Size(desc - asc)</option>
              <option value="option3">Date Created</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <select className="bg-gray-200 border-t-0 border-l-0 border-r-0 border-b-2 w-[] 19rem flex items-center justify-center pl-2 ">
              <option value="option1">
                <MdDashboard /> Folder
              </option>
              <option value="option2">
                <FaListUl /> List
              </option>
            </select>
          </div>
          <div>
            <FaFilter className="text-xl relative top-1" />
          </div>
        </div>
      </div>
      <main className="grid lg:grid-cols-5 md:grid-cols-3 gap-y-12 mb-10">
        {/* folder format */}
        {/* {UserDeatils.map((details, index) => (
          <div className="flex flex-col gap-1">
            <div className="rounded-2xl shadow-md w-48 h-44 bg-white cursor-pointer flex items-center justify-center">
              <img
                src={details.FolderImage}
                className="w-44 h-36 rounded-2xl"
                alt=""
              />
            </div>
            <div className="flex justify-between items-center w-48">
              <p className="truncate">{details.FloderName}</p>
              <span className="flex justify-between items-center gap-2 cursor-pointer">
                <GoInfo />
                <IoMdStar />
                <BsThreeDotsVertical />
              </span>
            </div>
          </div>
        ))} */}
        {/* list format */}
        {UserDeatils.map((file, i) => (
          <>

          </>
        ))
        }
      </main>
    </section>
  );
}
