import React from 'react';

const activities = [
  { id: 1, activity: "John Doe posted a new article", time: "2 hours ago" },
  { id: 2, activity: "Jane Smith commented on 'React Guide'", time: "5 hours ago" },
  { id: 3, activity: "Alice Brown updated her profile", time: "1 day ago" },
];

const ActivityLog = () => {
  return (
    <div className=" shadow-lg  p-4 rounded-lg text-black">
      <h3 className="text-lg font-bold mb-4">Activity Log</h3>
      <ul className="space-y-2">
        {activities.map(activity => (
          <li key={activity.id} className="pb-2">
            <p>{activity.activity}</p>
            <p className="text-xs text-gray-400">{activity.time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityLog;
