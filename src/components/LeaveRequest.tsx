import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import DashboardCard from './DashboardCard';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const LeaveRequest: React.FC = () => {
  const [formData, setFormData] = useState({
    leaveType: '',
    fromDate: '',
    toDate: '',
    reason: '',
    supportingDocument: null,
  });

  const leaveRequests = [
    {
      id: 'RL004',
      status: 'PENDING',
      type: 'Annual Leave',
      dates: '2025-03-15 to 2025-03-17',
      reason: 'Family vacation',
    },
    {
      id: 'RL003',
      status: 'REJECTED',
      type: 'Sick Leave',
      dates: '2025-02-20 to 2025-02-21',
      reason: 'Medical appointment',
    },
    {
      id: 'RL002',
      status: 'APPROVED',
      type: 'Annual Leave',
      dates: '2025-01-10 to 2025-01-12',
      reason: 'Personal matters',
    },
    {
      id: 'RL001',
      status: 'APPROVED',
      type: 'Annual Leave',
      dates: '2024-12-23 to 2024-12-30',
      reason: 'Year-end holidays',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'PENDING':
        return 'bg-yellow-100 text-yellow-800';
      case 'APPROVED':
        return 'bg-green-100 text-green-800';
      case 'REJECTED':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Leave request submitted successfully!');
  };

  // Pie chart data
  const leaveTaken = 4;
  const totalLeave = 20;
  const data = [
    { name: 'Taken', value: leaveTaken },
    { name: 'Remaining', value: totalLeave - leaveTaken },
  ];
  const COLORS = ['#f97316', '#d1d5db']; // orange + gray

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Apply Leave Form
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select leave type
                </label>
                <select
                  value={formData.leaveType}
                  onChange={(e) =>
                    setFormData({ ...formData, leaveType: e.target.value })
                  }
                  className="w-full p-3 bg-gray-200 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">Select leave type</option>
                  <option value="annual">Annual Leave</option>
                  <option value="sick">Sick Leave</option>
                  <option value="emergency">Emergency Leave</option>
                  <option value="maternity">Maternity Leave</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    From
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={formData.fromDate}
                      onChange={(e) =>
                        setFormData({ ...formData, fromDate: e.target.value })
                      }
                      className="w-full p-3 bg-gray-200 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    To
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={formData.toDate}
                      onChange={(e) =>
                        setFormData({ ...formData, toDate: e.target.value })
                      }
                      className="w-full p-3 bg-gray-200 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Reason
                </label>
                <textarea
                  value={formData.reason}
                  onChange={(e) =>
                    setFormData({ ...formData, reason: e.target.value })
                  }
                  rows={3}
                  className="w-full p-3 bg-gray-200 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                  placeholder="Enter reason for leave..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Supporting Document
                </label>
                <button
                  type="button"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  <Upload size={18} />
                  <span>Upload file</span>
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium"
              >
                Submit Leave Request
              </button>
            </form>
          </div>
        </div>

        <div className="space-y-4">
          <DashboardCard
            title="Leave Day"
            value="16"
            unit="days"
            subtitle="Remaining"
            bgColor="bg-orange-500"
            textColor="text-white"
          />

          {/* Leave Days Taken with Pie Chart */}
          <div className="bg-gray-600 text-white rounded-xl p-6 shadow-sm flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold">Leave Days Taken</h3>
            <p className="text-3xl font-bold my-2">{leaveTaken}</p>
            <div className="w-24 h-24">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    innerRadius={30}
                    outerRadius={45}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
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
            <p className="text-sm mt-2">
              {leaveTaken}/{totalLeave} days
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            Leave Request History
          </h3>
        </div>

        <div className="divide-y divide-gray-200">
          {leaveRequests.map((request) => (
            <div
              key={request.id}
              className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className="font-medium text-gray-900">{request.id}</span>
                <div>
                  <p className="font-medium text-gray-900">{request.type}</p>
                  <p className="text-sm text-gray-600">{request.dates}</p>
                  <p className="text-sm text-gray-600">{request.reason}</p>
                </div>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                  request.status
                )}`}
              >
                {request.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaveRequest;
