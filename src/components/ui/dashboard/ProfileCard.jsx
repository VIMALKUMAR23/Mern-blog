import React from 'react'
import Proflie from '../../Proflie'

function ProfileCard() {
  return (
    <>
    <div className="bg-white p-4 rounded-md shadow-md ">
      <div className="flex items-center space-x-4 flex-col p-5 gap-3">
        <Proflie/>
        <div>
          <h3 className="font-semibold">Megan Norton</h3>
          <p className="text-gray-500">@megnorton</p>
        </div>
        <div className="ml-auto space-x-2">
          <button className="p-2 rounded-full bg-gray-100">☎️</button>
          <button className="p-2 rounded-full bg-gray-100">📧</button>
          <button className="p-2 rounded-full bg-gray-100">...</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProfileCard
