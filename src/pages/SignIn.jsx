import React, { useState } from 'react'
import SignIcon from "../assets/Sign up-amico.png";
import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import SignInIcon from "../assets/Sign in-amico.png"
function SignIn() {
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
            <img src={SignInIcon} alt="signUp image" />
          </div>
          {/* right  */}
          <div className="flex-1" >
            <form className="flex flex-col gap-4" onSubmit={handleSubmit} >
             
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
                SignIn
              </Button>
              <div className="flex gap-2 text-sm mt-5">
                <span>
                  I don't have an account? 
                </span>
                <Link to='/SignUp' className=" underline text-blue-500" >
                Sign Up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn
