import React, { useState } from "react";
import { FaUserSecret } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";
import { GiCrossedBones } from "react-icons/gi";

function NavTwo() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <div className="nav  bg-zinc-950 text-white  sticky top-0 z-10 ">
        <div className="full hidden md:flex justify-between p-3 px-10 ">
          <div className="left flex gap-4 [&>a]:border-b-2 [&>a]:rounded-br-lg [&>a]:px-3 [&>a]:py-1 [&>a]:border-yellow-400 ">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Services</a>
            <a href="">Gallery</a>
          </div>
          <div className="right flex items-center gap-4 [&>a]:border-b-2 [&>a]:rounded-br-lg [&>a]:px-3 [&>a]:py-1 [&>a]:border-yellow-400">
            <a href="">Sign In</a>
            <FaUserSecret
              className="text-2xl text-orange-500 "
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <div className="mobile p-3 md:hidden flex items-center justify-end gap-10 px-10">
          <FaUserSecret
            className="text-2xl  text-orange-500 "
            style={{ cursor: "pointer" }}
          />
         <button onClick={()=> setIsClicked(!isClicked)}>
         {isClicked ?  (
            <GiCrossedBones
              style={{ cursor: "pointer" }}
              className=" text-3xl text-orange-500"
            />
          ) : (
            <TiThMenu
              style={{ cursor: "pointer" }}
              className=" text-3xl text-orange-500"
            />
          )}
         </button>
        </div>
       
      </div>
 
        <div className={`left  ${isClicked ? 'flex ':'hidden'} md:hidden flex fixed right-0 flex-col w-[200px] rounded-bl-3xl p-5 bg-zinc-950 text-white   gap-4 [&>a]:border-b-2 [&>a]:rounded-br-lg [&>a]:px-3 [&>a]:py-1 [&>a]:border-yellow-400 `}>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Services</a>
            <a href="">Gallery</a>
            <a href="">Sign In</a>
          </div>
      
    </>
  );
}

export default NavTwo;
