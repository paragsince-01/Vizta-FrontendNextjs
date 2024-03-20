import Link from 'next/link'
import React from 'react'

export default function Sign() {
  return (
    <div className=' flex flex-col  justify-center items-center my-12'>
      <div className="flex flex-col pb-5 bg-white rounded-xl max-w-[450px]">
        <div className="flex flex-col px-3.5 py-2 w-full text-white bg-sky-950">
          <div className="flex gap-5 justify-between text-sm">
            <div>My SQL</div>
          </div>
        </div>
        <div className="flex flex-col px-4 mt-6 w-full">
          <div className="text-xs text-black">Server</div>
          <input
            type="text"
            className="shrink-0 mt-3 bg-white rounded-sm border-solid border-[0.3px] border-black border-opacity-50 h-[21px]"
            // value={server}
            // onChange={(e) => setServer(e.target.value)}
          />
          <div className="mt-5 text-xs text-black">Database</div>
          <input
            type="text"
            className="shrink-0 mt-3 bg-white rounded-sm border-solid border-[0.3px] border-black border-opacity-50 h-[21px]"
            // value={database}
            // onChange={(e) => setDatabase(e.target.value)}
          />
          <div className="mt-4">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col text-xs text-black">
                  <div>Username</div>
                  <input
                    type="text"
                    className=" shrink-0 mt-3 bg-white rounded-sm border-solid border-[0.3px] border-black border-opacity-50 h-[21px]"
                    // value={username}
                    // onChange={(e) => setUsername(e.target.value)}
                  />
                  <div className="mt-5">Password</div>
                  <input
                    type="password"
                    className="shrink-0 mt-3 bg-white rounded-sm border-solid border-[0.3px] border-black border-opacity-50 h-[21px]"
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="mt-4">Port</div>
                  <input
                    type="text"
                    className="shrink-0 mt-3 bg-white rounded-sm border-solid border-[0.3px] border-black border-opacity-50 h-[21px]"
                    // value={port}
                    // onChange={(e) => setPort(e.target.value)}
                  />
                  <div className="flex gap-1.5 justify-between mt-3 text-xs py-4">
                  <input
                      type="checkbox"
                    //   checked={requireSSL}
                    //   onChange={(e) => setRequireSSL(e.target.checked)}
                    />
                    <div className="flex-auto">Require SSL</div>
                  </div>
                 <div className="relative ">
                <div className="flex flex-col pb-5 bg-white rounded-xl max-w-[450px] justify-end items-end">
        {/* Your existing content */}
      </div>
     <div className='   flex justify-end items-end '> 
     <Link href='/'>
     <button 
        // onClick={() => {
        //   // Add functionality for sign-in button click here
        //   console.log('Sign in clicked');
        // }}
        className="absolute bottom-5 right-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full -mr-60"
      >
        Sign In
      </button>
      </Link></div>
    </div>

                </div>
              </div>
              <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="656c91946c98084b8aa5e74d5ed5cab4.png"
                  className="grow w-full aspect-[1.08]"
                  alt="Placeholder"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
