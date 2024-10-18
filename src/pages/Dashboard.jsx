import React from 'react'
import { Card, Button } from "flowbite-react";

function Dashboard() {
  return (
   <>
     <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-8 text-gray-800">
          Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Stats Cards */}
          <Card className="hover:shadow-lg text-center">
            <h2 className="text-3xl font-bold text-gray-700">Posts</h2>
            <p className="text-xl mt-4 text-gray-500">12 Published</p>
          </Card>

          <Card className="hover:shadow-lg text-center">
            <h2 className="text-3xl font-bold text-gray-700">Drafts</h2>
            <p className="text-xl mt-4 text-gray-500">5 In Progress</p>
          </Card>

          <Card className="hover:shadow-lg text-center">
            <h2 className="text-3xl font-bold text-gray-700">Followers</h2>
            <p className="text-xl mt-4 text-gray-500">1200 Followers</p>
          </Card>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Button color="primary" className="w-full p-4 text-lg">
              Create New Post
            </Button>
            <Button color="secondary" className="w-full p-4 text-lg">
              Manage Drafts
            </Button>
            <Button color="success" className="w-full p-4 text-lg">
              View Analytics
            </Button>
            
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default Dashboard
