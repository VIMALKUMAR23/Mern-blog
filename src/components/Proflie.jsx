import React from "react";
import profilePic from "../assets/proflie.png";
import { Link } from "react-router-dom";
function Proflie() {
  return (
    <>
      <Link to="/Dashboard" className="">
        <div className="avatar online">
          <div className=" w-10 rounded-full ">
            <img src={profilePic} />
          </div>
        </div>
      </Link>
      {/* offline  */}
      {/* <div className="avatar offline">
        <div className="w-10 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div> */}
    </>
  );
}

export default Proflie;
