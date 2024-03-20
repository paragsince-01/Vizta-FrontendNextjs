'use client'
import Link from "next/link";
// import React, { useState } from "react";

// import ImagesLogo from "/assets/imags.png";
import { AiOutlineEyeInvisible } from "react-icons/ai";
// import DataReport from "/assets/Data-report.png";
// import CompanyLogo from "/assets/logo.png";

export default function Home() {
// const [ email,setEmail]=useState("");
// const [formdata, setFormdata] = useState({
//   user: "",
//   pwd: "",
//   isVisible: true,
// });
// const [error, setError] = useState(null);

// // const [password,setPassword]=useState("")

// // function handleEmail(event){
// // setEmail(event.target.value)

// // }

// // function handlePassword(event){
// //   setPassword(event.target.value)

// // }

// // function handleLogin(){
// //   console.log(email,password)
// // }
// function handlerChange(event) {
//   const { name, value, checked, type } = event.target;
//   setFormdata((prevFormdata) => {
//     return {
//       ...prevFormdata,
//       [name]: type === "checkbox" ? checked : value,
//     };
//   });
// }

// const handlerSubmit = async (event) => {
//   event.preventDefault();
//   console.log(formdata);

//   try {
//     const response = await fetch("http://localhost:3500/auth", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         user: formdata.user,
//         pwd: formdata.pwd,
//       }),
//     });

//     if (!response.ok) {
//       throw new error("Login failed");
//     }
//   } catch (error) {
//     setError("Login failed. Please check your credentials.");
//   }
// };

  return (
    <main className=" w-auto h-auto mx-auto my-auto ">
      <nav className=" lg:pt-[20px] md:pt-7  pt-3 md:pl-[35px] pl-7 lg:pl-24  ">
        <img src="/assets/imags.png" className=" w-[226px]  2xl:w-72" alt="logo" />
      </nav>
      <section className=" flex   justify-evenly  items-center max-md:flex-wrap   max-lg:flex-wrap   max-xl:flex-wrap lg:px-3 px-3 w-full lg:-mt-24">
        <form
          // onSubmit={handlerSubmit}
          className="left-sec  basis-[30%] lg:pr-[90px] md:pr-[0] sm:pr-[0] px-20"
        >
          {/* left section heading */}
          {/* <h1 className=" text-4xl self-start max-sm:text-4xl  max-[1012px]:mt-[70px]  mt-5 pl-4 mb-2">Login</h1> */}
          <h1 className=" text-4xl self-start max-sm:text-4xl  md:mt-[70px]  mt-5 pl-4 mb-2 ">
            Login
          </h1>

          {/* left section para */}
          {/* <p className=" self-start mb-4 pl-4">Please login to continue</p> */}
          <div className=" flex flex-col justify-center items-center gap-[20px]  px-2  md:pl-[15px] max-md:flex-wrap  ]">
            <input
              // onChange={handlerChange}
              // value={formdata.user}
              name="user"
              className="text-2xl w-[350px] rounded-md border-2 px-2 py-2 2xl:w-[25rem]"
              type="text"
              placeholder="Email"
            />
            <input
              // onChange={handlerChange}
              // value={formdata.pwd}
              name="pwd"
              className="text-2xl w-[350px] rounded-md border-2 px-2 py-2 2xl:w-[25rem]"
              type="text"
              placeholder="Password"
            />
            <span className="-mt-[52px]">
              <AiOutlineEyeInvisible
                fontSize={24}
                fill="#AFB2BF"
                className="    relative left-[135px]  bottom-[5px] "
              />
              {/* <AiOutlineEye fontSize={24} fill='#AFB2BF'/>*/}
            </span>

            {/* <div  className=' flex gap-[2.2rem] '> */}
            <div className=" flex gap-[1.5rem] 2xl:gap-[3.1rem] whitespace-nowrap">
              <span>
                <label className="w-full flex">
                  <div className="mr-[10px]  ">
                    <input
                      type="checkbox"
                      name="isVisible"
                      id="isVisible"
                      // checked={formdata.isVisible}
                    />
                  </div>
                  <p className="md:pr-[9px] whitespace-nowrap  ">
                    Keep Me Logged In
                  </p>
                </label>
              </span>
              <br />
              <span className="flex  whitespace-nowrap">Forgot Password ?</span>
            </div>
           <Link href="/sign">
            <button className=" bg-blue-600 w-[350px] text-white px-6 py-3 rounded-lg text-xl 2xl:w-[25rem] ">
             
                
                LOGIN
            </button>
            </Link>
            
             {/* left section para */}
            <p className=" text-center text-[0.9rem] max-md:hidden max-lg:visible">
              By logining up, you agree to our
              <span className="text-blue-500">Terms of Service </span>and{" "}
              <span className="text-blue-500">Privacy Policy</span>
            </p>
          </div>
        </form>

        {/* mid section */}
        <div className=" bg-gray-300 lg:w-[0.1rem] lg:h-[26rem] 2xl:h-[34rem] "></div>
        {/* right section */}
        <div
          className={`right-sec   mt-[2rem]  object-contain  basis-[70%] lg:px-0  max-sm:mx-auto 2xl:mt-20
      max-lg:px-10 max-sm:flex-wrap`}
        >
          {/* right section heading */}
          {/* <h2 className={` md:text-3xl max-sm:text-[1.3rem] text-xs  font-medium max-lg:text-5xl `}>Data Visualized, Decisions Amplified</h2> */}
          {/* right section heading */}
          <h2
            className={`md:text-3xl max-sm:text-[1.3rem] text-xs font-medium lg:text-3xl mb-3  lg:ml-auto  leading-10  2xl:text-[2.3rem] 2xl:ml-auto 
text-center ml-auto
 whitespace-no-wrap `}
          >
            Data Visualized, Decisions Amplified
          </h2>

          {/* right section img */}
          <img
            src="/assets/Data-report.png"
            alt="dataReport"
            className="lg:h-[30rem]     h-[16rem] lg:w-[80%] object-contain m-auto   md:my-4   md:mx-auto 2xl:w-[70%] 
         2xl:h-[60vh]"
          />

          {/* right section para */}
          <p className=" text-center   max-md:hidden   lg:visible   object-contain  px-24 lg:text-sm 2xl:text-lg 2xl:px-[16rem]">
            Lorem ipsum dolor , commodi. Repellendus vero, sapiente architecto
            debitis voluptas minus deserunt ea consequuntur. Qui maiores laborum
            perferendis libero voluptatibus repellendus voluptate
          </p>
        </div>
      </section>
      <footer className=" flex  justify-center md:justify-end m-auto">
        <img
          src="/assets/logo.png"
          className=" md:w-52  w-[30%] "
          alt="footerlogo"
        />
      </footer>
      <div>
       
        {/* <Routes>
          <Route path="/sql" element={<SQL />} />
        </Routes> */}
      </div>
    </main>
  );
}
