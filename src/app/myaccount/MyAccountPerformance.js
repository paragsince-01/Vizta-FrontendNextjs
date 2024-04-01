"use client";
import React, { useEffect, useState } from "react";
import { SiSpeedtest } from "react-icons/si";
import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";
// Import the JSON data
import jsonData from "../data.json"; // Adjust the path as per your file structure

export default function MyAccountPerformance() {
  const DBPerformanceDetails = jsonData.PerformanceDeatils;
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  console.log(selectedRows);
  const [perfomanceData, setPerformanceData] = useState("");
  const [sortOrder, setSortOrder] = useState({ key: null, direction: null });

  // here the api will the fetch the data and in setPerformanceData state
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setPerformanceData(DBPerformanceDetails);
  };

  // sorting is happing with the clickable table header

  const AscDescEvent = (key) => {
    let data = [...perfomanceData];
    if (data.length > 0) {
      let direction = "ascending";
      if (sortOrder.key === key && sortOrder.direction === "ascending") {
        data.sort((a, b) => compareValues(a[key], b[key], "descending"));
        direction = "descending";
      } else {
        data.sort((a, b) => compareValues(a[key], b[key], "ascending"));
      }
      setPerformanceData(data);
      setSortOrder({ key, direction });
    } else {
      alert("No Data Found");
    }
  };

  const compareValues = (valueA, valueB, direction) => {
    if (valueA === valueB) return 0;
    if (valueA === null || valueA === undefined)
      return direction === "ascending" ? -1 : 1;
    if (valueB === null || valueB === undefined)
      return direction === "ascending" ? 1 : -1;

    // Check if values are numbers or floats
    const isNumberA = !isNaN(valueA);
    const isNumberB = !isNaN(valueB);

    // Handle comparison for numbers or floats
    if (isNumberA && isNumberB) {
      return direction === "ascending" ? valueA - valueB : valueB - valueA;
    }

    // Handle comparison for strings
    if (typeof valueA === "string" && typeof valueB === "string") {
      return direction === "ascending"
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    }

    // If one value is number/float and the other is string, prioritize number/float
    if (isNumberA && typeof valueB === "string") return -1;
    if (typeof valueA === "string" && isNumberB) return 1;

    // Default to string comparison if unable to determine type
    return direction === "ascending"
      ? valueA.localeCompare(valueB)
      : valueB.localeCompare(valueA);
  };

  // here the arrow the displaying the on the basis of the direction of sorting up an down

  const renderArrowIcon = (key) => {
    if (sortOrder.key === key) {
      return sortOrder.direction === "ascending" ? (
        <FaLongArrowAltUp />
      ) : (
        <FaLongArrowAltDown />
      );
    }
    return null;
  };

  // sorting is happing with the help of select box

  const [selectedOption, setSelectedOption] = useState("AverageQT");
  // Function to handle select box change
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    AscDescEvent(event.target.value)
  };

  // with this all the rows can be selected on one click

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      setSelectedRows(DBPerformanceDetails.map((_, index) => index));
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
          <div className="flex justify-between items-center">
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
                <hr />
                <option value="View">View</option>
                <option value="Workbook">Workbook</option>
                <option value="Location">Location</option>
                <option value="LastMonth">Last 1 Month</option>
                <option value="AverageQT">Average Query Time(sec)</option>
                <option value="RequestsTAcc">Requests To Acc.</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2 overflow-x-auto">
            <div className="flex lg:gap-20 md:gap-0">
              <p
                className="md:w-32 truncate lg:w-60 relative left-12 cursor-pointer flex items-center gap-2"
                onClick={() => AscDescEvent("View")}
              >
                View {renderArrowIcon("View")}
              </p>
              <p
                className="md:w-32 truncate lg:w-96 relative md:left-16 cursor-pointer flex items-center gap-2"
                onClick={() => AscDescEvent("Workbook")}
              >
                Workbook {renderArrowIcon("Workbook")}
              </p>
              <p
                className="md:w-32 truncate lg:w-96 relative lg:left-24 md:left-20 cursor-pointer flex items-center gap-2"
                onClick={() => AscDescEvent("Location")}
              >
                Location {renderArrowIcon("Location")}
              </p>
              <p
                className="md:w-40 truncate lg:w-96 relative lg:left-12 md:left-12 cursor-pointer flex items-center gap-2"
                onClick={() => AscDescEvent("ViewLastMonth")}
              >
                Views(1 Month) {renderArrowIcon("ViewLastMonth")}
              </p>
              <p
                className="md:w-32 truncate lg:w-96 relative lg:left-8 md:left-8 cursor-pointer flex items-center gap-2"
                onClick={() => AscDescEvent("AverageQT")}
              >
                Average query time(sec) {renderArrowIcon("AverageQT")}
              </p>
              <p
                className="md:w-32 truncate lg:w-96 relative lg:left-0 md:left-12 cursor-pointer flex items-center gap-2"
                onClick={() => AscDescEvent("RequestsTAcc")}
              >
                Requests to accelerate {renderArrowIcon("RequestsTAcc")}
              </p>
            </div>
            <div className=" overflow-hidden overflow-y-auto h-72">
              {perfomanceData &&
                perfomanceData.map((details, index) => (
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
                      className="flex w-full gap-14 h-10 items-center justif-start border-b  border-t  border-l-none border-r-none"
                    >
                      <p className="md:w-32 truncate lg:w-60  text-teal-600">
                        {details.View}
                      </p>
                      <p className="relative md:left-0 lg:-left-16 lg:w-44 md:w-32 truncate text-teal-600">
                        {details.Workbook}
                      </p>
                      <p className="relative lg:left-4 md:-left-2 md:w-32 text-teal-600 flex items-start">
                        {details.Location}
                      </p>
                      <p className="relative lg:left-28 md:-left-4 md:w-32 flex items-start">
                        {details.ViewLastMonth}
                      </p>
                      <p className="relative lg:left-52 md:-left-4 md:w-32 flex items-start">
                        {details.AverageQT}
                      </p>
                      <p className="relative lg:left-72 md:-left-4 flex items-start md:w-32">
                        {details.RequestsTAcc}
                      </p>
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
