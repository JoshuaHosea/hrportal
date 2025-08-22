// Dashboard.tsx
import React, { useState, useEffect } from 'react';
import { Clock, Play, Square, Users } from 'lucide-react';
import DashboardCard from './DashboardCard';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const Dashboard: React.FC = () => {
  const [isClocked, setIsClocked] = useState(false);
  const [clockTime, setClockTime] = useState<string>('');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleClockToggle = () => {
    const now = new Date();
    setIsClocked(!isClocked);
    setClockTime(now.toLocaleTimeString());
  };

  // Pie chart data
  const totalLeave = 20;
  const takenLeave = 4;
  const remainingLeave = totalLeave - takenLeave;
  const leaveData = [
    { name: 'Taken', value: takenLeave },
    { name: 'Remaining', value: remainingLeave },
  ];
  const COLORS = ['#ffffff', 'rgba(255,255,255,0.3)']; // white + faded white

  return (
    <div className="space-y-6">
      {/* Time Tracking */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Clock size={24} className="text-orange-500" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Time Tracking
              </h3>
              <p className="text-gray-600">{currentTime.toLocaleString()}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {clockTime && (
              <div className="text-right">
                <p className="text-sm text-gray-600">
                  {isClocked ? 'Clocked In' : 'Clocked Out'} at
                </p>
                <p className="font-semibold text-gray-900">{clockTime}</p>
              </div>
            )}

            <button
              onClick={handleClockToggle}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                isClocked
                  ? 'bg-red-500 hover:bg-red-600 text-white'
                  : 'bg-green-500 hover:bg-green-600 text-white'
              }`}
            >
              {isClocked ? <Square size={18} /> : <Play size={18} />}
              {isClocked ? 'Clock Out' : 'Clock In'}
            </button>
          </div>
        </div>
      </div>

      {/* Meetings + Right column (Leave + Pay) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Meetings */}
        <div className="lg:col-span-2">
          <div className="bg-gray-300 rounded-xl p-8 h-64 flex items-center justify-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Meetings
              </h3>
              <p className="text-gray-600">No upcoming meetings scheduled</p>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-4">
          {/* Combined Leave Card */}
          <div className="bg-orange-500 text-white rounded-xl p-6 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm opacity-90">Leave Day</h4>
                <p className="text-3xl font-bold">{remainingLeave} days</p>
                <p className="text-sm opacity-90">Remaining</p>
              </div>
              <div className="w-20 h-20">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={leaveData}
                      cx="50%"
                      cy="50%"
                      innerRadius={25}
                      outerRadius={40}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {leaveData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-sm opacity-90">Leave Days Taken</h4>
              <p className="text-lg font-semibold">
                {takenLeave}/{totalLeave} days
              </p>
            </div>
          </div>

          {/* Next Pay Day */}
          <DashboardCard
            title="Next Pay Day"
            value="7"
            unit="days"
            subtitle=""
            bgColor="bg-gray-600"
            textColor="text-white"
          />
        </div>
      </div>

      {/* Holidays + Team */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DashboardCard
          title="Upcoming Holidays"
          value="17"
          unit="Sept"
          subtitle="Malaysia Day"
          bgColor="bg-purple-400"
          textColor="text-white"
        />

        <div className="bg-blue-300 rounded-xl p-6 shadow-sm border border-gray-200 text-white flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Team</h3>
            <p className="text-3xl font-bold">24</p>
            <p className="text-sm">Active Members</p>
          </div>
          <Users size={48} className="opacity-80" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
