import React, { useState, useEffect } from 'react';
import { Clock, Play, Square, Users } from 'lucide-react';
import DashboardCard from './DashboardCard';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const Dashboard: React.FC = () => {
  const [isClocked, setIsClocked] = useState(false);
  const [clockTime, setClockTime] = useState<string>('');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
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
  const COLORS = ['#ffffff', 'rgba(255,255,255,0.3)'];

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Time Tracking */}
      <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <Clock size={20} className="text-orange-500 sm:size-24" />
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                Time Tracking
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                {currentTime.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {clockTime && (
              <div className="text-right">
                <p className="text-xs sm:text-sm text-gray-600">
                  {isClocked ? 'Clocked In' : 'Clocked Out'} at
                </p>
                <p className="text-sm sm:text-base font-semibold text-gray-900">
                  {clockTime}
                </p>
              </div>
            )}

            <button
              onClick={handleClockToggle}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-6 sm:py-3 rounded-lg font-medium transition-colors text-xs sm:text-base ${
                isClocked
                  ? 'bg-red-500 hover:bg-red-600 text-white'
                  : 'bg-green-500 hover:bg-green-600 text-white'
              }`}
            >
              {isClocked ? <Square size={14} /> : <Play size={14} />}
              {isClocked ? 'Clock Out' : 'Clock In'}
            </button>
          </div>
        </div>
      </div>

      {/* Meetings + Right column (Leave + Pay) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Meetings */}
        <div className="lg:col-span-2">
          <div className="bg-gray-300 rounded-lg sm:rounded-xl p-4 sm:p-8 h-48 sm:h-64 flex items-center justify-center">
            <div>
              <h3 className="text-base sm:text-xl font-semibold text-gray-700 mb-1 sm:mb-2">
                Meetings
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                No upcoming meetings scheduled
              </p>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-3 sm:space-y-4">
          {/* Combined Leave Card */}
          <div className="bg-orange-500 text-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xs sm:text-sm opacity-90">Leave Day</h4>
                <p className="text-2xl sm:text-3xl font-bold">{remainingLeave} days</p>
                <p className="text-xs sm:text-sm opacity-90">Remaining</p>
              </div>
              <div className="w-16 h-16 sm:w-20 sm:h-20">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={leaveData}
                      cx="50%"
                      cy="50%"
                      innerRadius={20}
                      outerRadius={32}
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
            <div className="mt-3 sm:mt-4">
              <h4 className="text-xs sm:text-sm opacity-90">Leave Days Taken</h4>
              <p className="text-sm sm:text-lg font-semibold">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <DashboardCard
          title="Upcoming Holidays"
          value="17"
          unit="Sept"
          subtitle="Malaysia Day"
          bgColor="bg-purple-400"
          textColor="text-white"
        />

        <DashboardCard
          title="Team"
          value="24"
          unit=""
          subtitle="Active Members"
          bgColor="bg-blue-300"
          textColor="text-white"
          icon={<Users size={36} className="sm:size-48 opacity-80" />}
        />
      </div>
    </div>
  );
};

export default Dashboard;
