import React from 'react'

function Aside() {
  return (
    <>
    <aside className="w-64 bg-white border-r border-gray-200 p-4 flex flex-col h-screen">
      <nav className="flex-grow">
        <ul className="space-y-4 py-5">
          <li><a href="#" className="flex items-center space-x-2 text-gray-700"><span>🏠</span><span>Home</span></a></li>
          <li><a href="#" className="flex items-center space-x-2 text-gray-700"><span>📊</span><span>Dashboard</span></a></li>
          <li><a href="#" className="flex items-center space-x-2 text-gray-700"><span>💰</span><span>MemberShips</span></a></li>

        </ul>
      </nav>
      <div className="mt-8 bg-gray-50 p-4 rounded-md text-center">
        <p className="font-semibold">Upgrade to Pro 🔥</p>
        <p className="text-sm text-gray-500">Get 1 month free</p>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Upgrade</button>
      </div>
      <div className="mt-auto">
        <a href="#" className="text-gray-500">Help & Information</a>
        <a href="#" className="block mt-2 text-gray-500">Log out</a>
      </div>
    </aside>
    </>
  )
}

export default Aside
