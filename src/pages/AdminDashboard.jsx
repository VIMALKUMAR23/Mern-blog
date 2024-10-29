import React from "react";
import StatsOverview from "../components/ui/Admin/StatsOverview";
import UserManagement from "../components/ui/Admin/UserManagement";
import Warnings from "../components/ui/Admin/Warnings";
import ActivityLog from "../components/ui/Admin/ActivityLog";
import PostNotice from "../components/ui/Admin/PostNotice";

function AdminDashboard() {
  return <>
   <div className="p-6 min-h-screen text-white space-y-6">
      {/* Statistics Overview */}
      <StatsOverview />

      {/* User Management and Warnings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <UserManagement />
        <Warnings />
      </div>

      {/* Activity Log and Post Notice */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ActivityLog />
        <PostNotice />
      </div>
    </div>
  </>;
}

export default AdminDashboard;
