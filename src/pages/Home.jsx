import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://copysmiths.com/wp-content/uploads/2022/05/feature-image-maintain-a-successful-blog.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Read, Post, Learn - Blog !</h1>
            <p className="py-6">
            At DevBlog, we believe in making complex development topics simple and
          accessible. From front-end design to back-end architecture, our
          content covers a wide range of development technologies and best
          practices to keep you up-to-date with the latest trends.
            </p>

            <Button outline gradientDuoTone="purpleToPink">
              <Link to="/Blog">Get Started</Link>
              
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
