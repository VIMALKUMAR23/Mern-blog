import React, { useState } from 'react';

const PostNotice = () => {
  const [notice, setNotice] = useState('');

  const handlePost = () => {
    if (notice) {
      console.log("Notice posted:", notice);
      setNotice('');
    }
  };

  return (
    <div className=" shadow-lg p-4 rounded-lg text-black">
      <h3 className="text-lg font-bold mb-4">Post Notice</h3>
      <textarea
        className="w-full p-2  rounded-md text-white"
        rows="3"
        placeholder="Write your notice here..."
        value={notice}
        onChange={(e) => setNotice(e.target.value)}
      ></textarea>
      <button
        className="bg-blue-500 px-4 py-2 rounded-md mt-2"
        onClick={handlePost}
      >
        Post Notice
      </button>
    </div>
  );
};

export default PostNotice;
