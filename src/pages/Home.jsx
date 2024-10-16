import React from "react";

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
              "Info-B" is your ultimate hub for the latest tech trends,
              inspiring art, and the beauty of calligraphy. Whether you're
              looking to stay updated on innovations or dive into creative
              pursuits, Info-B offers a wealth of knowledge and learning
              opportunities. Explore and enhance your skills with expert
              insights and practical guidance.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
