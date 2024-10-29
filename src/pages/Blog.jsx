import React from 'react'
import { Card, Button } from "flowbite-react";
import { Link } from "react-router-dom";

import ProfileBlog from '../components/ProfileBlog';

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React",
    description:
      "Learn the basics of React, one of the most popular front-end libraries for building web apps.",
    link: "/blog/react-basics",
  },
  {
    id: 2,
    title: "Mastering CSS Grid and Flexbox",
    description:
      "A comprehensive guide to CSS Grid and Flexbox to build responsive web layouts with ease.",
    link: "/blog/css-grid-flexbox",
  },
  {
    id: 3,
    title: "Understanding REST APIs and Fetch API",
    description:
      "Dive into the world of APIs and learn how to interact with them using JavaScript's Fetch API.",
    link: "/blog/rest-api-fetch-api",
  },
];
function Blog() {
  return (
    
    <>
    
    <div className="min-h-screen p-10">
      
      <h1 className="text-3xl font-bold text-center mb-10">DevBlog Articles</h1>
      <div className="grid gridcol-1 gap-6">
        {blogPosts.map((post) => (
          <Link to='/'>
          <Card key={post.id} >
            <ProfileBlog/>
            
            <h5 className="text-2xl font-semibold tracking-tight text-gray-900">
              {post.title}
            </h5>
            <p className="text-gray-700">{post.description}</p>
            
              <p className='flex justify-center text-blue-600'>Read More</p>
            
          </Card>
          </Link>
        ))}
      </div>
    </div>

    </>
  )
}

export default Blog
