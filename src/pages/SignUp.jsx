import React, { useState } from "react";
import SignIcon from "../assets/Sign up-amico.png";
import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";


function SignUp() {
  const [formData,setFormData]=useState({})
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.id]:e.target.value})
  } 
  console.log(formData);
  const handleSubmit=(e)=>{
    e.preventDefault(); 
  }
  
  return (
    <>
      <div className="min-h-screen mt-20 ">
        <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
          {/* left section  */}
          <div className="flex-1 " >
            <img src={SignIcon} alt="signUp image" />
          </div>
          {/* right  */}
          <div className="flex-1" >
            <form className="flex flex-col gap-4" >
              <div >
                <Label value="Username"/>
                <TextInput
                type="text"
                placeholder="Username"
                id="username"
                onChange={handleChange}
                />
              </div>
              <div >
                <Label value="Email"/>
                <TextInput
                type="text"
                placeholder="name@gmail.com"
                id="email"
                onChange={handleChange}
                />
              </div>
              <div >
                <Label value="Password"/>
                <TextInput
                type="text"
                placeholder="Password"
                id="password"
                onChange={handleChange}
                />
              </div>
              <Button gradientDuoTone="purpleToPink">
                SignUp
              </Button>
              <div className="flex gap-2 text-sm mt-5">
                <span>
                  Have an account? 
                </span>
                <Link to='/signIn' className=" underline text-blue-500" >
                Sign In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
