"use client";
import React, { useState } from "react";
import { SiSpeedtest } from "react-icons/si";
import { FaLongArrowAltUp } from "react-icons/fa";
import JSONData from "./data.json";

export default function MyAccountPerformance() {
  const DBPerformanceDeatils = JSONData.PerformanceDeatils;
  const [selectedOption, setSelectedOption] = useState("");

  // Function to handle select box change
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  console.log(selectedRows);
  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      setSelectedRows(DBPerformanceDeatils.map((_, index) => index));
    } else {
      setSelectedRows([]);
    }
  };

  const handleRowCheckboxChange = (index) => {
    const selectedIndex = selectedRows.indexOf(index);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selectedRows, index);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selectedRows.slice(1));
    } else if (selectedIndex === selectedRows.length - 1) {
      newSelected = newSelected.concat(selectedRows.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selectedRows.slice(0, selectedIndex),
        selectedRows.slice(selectedIndex + 1)
      );
    }

    setSelectedRows(newSelected);
  };

  const isSelected = (index) => selectedRows.indexOf(index) !== -1;

  return (
    <>
      <section className="flex md:flex-col p-5 lg:gap-10 md:gap-4 w-[99.5%] ml-1 h-full border rounded-lg shadow-xl border-gray-200 z-0 mb-4">
        <div className="flex flex-col gap-4">
          <div className=" tracking-wide flex  gap-2 items-center justify-start ">
            <SiSpeedtest /> <p>View Acceleration Recommendations</p>
          </div>
          <hr className="border" />
          <p>
            Acceleration reduces initial loading time for views the with
            long-running quieries
          </p>
        </div>
        
        <main className="flex flex-col gap-4 mb-4">
          <div className="flex justify-between">
            <span className="flex gap-2 items-center">
              <input
                type="checkbox"
                name="selectAll"
                id="selectAll"
                className="rounded"
                checked={selectAll}
                onChange={handleSelectAll}
              />
              <label htmlFor="selectAll">Select All</label>
            </span>
            <div className="flex items-center gap-2">
              <h1>Sort By:</h1>
              <select
                value={selectedOption}
                onChange={handleSelectChange}
                className="border-t-0 border-l-0 border-r-0 border-b-2 w-[] 19rem flex items-center justify-center pl-2 "
              >
                <option value="">Select an option</option>
                <option value="option1" className="flex items-center">
                  Recommended (most-least)
                  <FaLongArrowAltUp />
                </option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2 overflow-x-auto">
            <div className="flex gap-20">
              <p className="w-96 relative left-12">View</p>
              <p className="relative left-5">Actions</p>
              <p className="relative left-4">Workbook</p>
              <p className="relative left-[5.4rem]">Location</p>
              <p className="relative left-7">Views(1 Month)</p>
              <p className="relative left-0">Average query time(sec)</p>
              <p className="relative left-0">Requests to accelerate</p>
            </div>
            <div className=" overflow-hidden overflow-y-auto h-72">
              {DBPerformanceDeatils.map((details, index) => (
                <div
                  key={index}
                  className="flex gap-8 h-10 items-center justif-start border-b  border-t  border-l-none border-r-none"
                >
                  <input
                    type="checkbox"
                    id={`row-${index}`}
                    checked={isSelected(index)}
                    onChange={() => handleRowCheckboxChange(index)}
                  />
                  <div
                    key={index}
                    className="flex gap-20 h-10 items-center justif-start border-b  border-t  border-l-none border-r-none"
                  >
                    <p className="w-[22rem]  text-teal-600">{details.View}</p>
                    <p className="relative left-[1.2rem] text-teal-600">
                      {details.Actions}
                    </p>
                    <p className="relative left-10 w-44 text-teal-600">
                      {details.Workbook}
                    </p>
                    <p className="relative left-2 w-24 text-teal-600">
                      {details.Location}
                    </p>
                    <p className="relative -left-10 w-10">
                      {details.ViewLastMonth}
                    </p>
                    <p className="relative left-10 w-10">{details.AverageQT}</p>
                    <p className="relative left-48">{details.RequestsTAcc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
