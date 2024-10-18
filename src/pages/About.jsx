import React from 'react'
import { Card } from "flowbite-react";

function About() {
  return (
    <>
   <div className="min-h-screen flex items-center justify-center">
      <Card className="max-w-3xl mx-auto shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-4">About DevBlog</h1>
        <p className="text-lg">
          Welcome to <span className="font-semibold">DevBlog</span>, your go-to
          resource for all things web and software development. Whether you're
          just starting your coding journey or you're a seasoned developer, we
          provide tutorials, articles, and tips to help you enhance your
          skills.
        </p>
        <p className="text-lg mt-4">
          At DevBlog, we believe in making complex development topics simple and
          accessible. From front-end design to back-end architecture, our
          content covers a wide range of development technologies and best
          practices to keep you up-to-date with the latest trends.
        </p>
        <p className="text-lg mt-4">
          Join our community and let's build amazing digital experiences
          together!
        </p>
      </Card>
    </div>
    </>
  )
}

export default About
