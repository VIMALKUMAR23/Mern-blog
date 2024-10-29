import React from "react";
import { Card, Button } from "flowbite-react";
import Aside from "../components/ui/dashboard/Aside";
import ProfileCard from "../components/ui/dashboard/ProfileCard";
import Pro from "../components/ui/dashboard/Pro";
import Cult from "../components/ui/dashboard/Cult";
function Dashboard() {
  return (
    <>
      <div className="flex h-screen">
        <Aside />
        <div className="flex-1 p-6 space-y-6">
        <ProfileCard />
        </div>
        <div className="w-64 p-4 space-y-4">
        <Pro/>
        <Cult/>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
