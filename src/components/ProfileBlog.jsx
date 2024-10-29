import React from 'react'
import profilePic from "../assets/proflie.png";
import { Link } from "react-router-dom";
function ProfileBlog() {
  return (
    <>
     <Link to="/Dashboard" className="">
        <div className="avatar  ">
          <div className=" w-10 rounded-full ">
            <img src={profilePic} />
            
          </div>
          <h1 className="font-bold flex justify-center items-center p-2 " >Author-name</h1>
        </div>
      </Link>
    </>
  )
}

export default ProfileBlog
