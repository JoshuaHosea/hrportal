import React, { useState } from 'react';
import { Download, ChevronDown } from 'lucide-react';

const PayslipBenefits: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState('2025');

  const payslips = [
    { month: 'October 2025', status: 'Available' },
    { month: 'September 2025', status: 'Available' },
    { month: 'August 2025', status: 'Available' },
    { month: 'July 2025', status: 'Available' },
    { month: 'June 2025', status: 'Available' },
  ];

  const benefits = [
    { title: 'Health & Insurance', color: 'bg-purple-500' },
    { title: 'Leave & Time Off', color: 'bg-purple-500' },
    { title: 'Financial & Retirement', color: 'bg-purple-500' },
    { title: 'Learning & Development', color: 'bg-purple-500' },
    { title: 'Work-Life & Perks', color: 'bg-purple-500' },
    { title: 'FAQ', color: 'bg-orange-500' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Payslips</h2>
          <div className="relative">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="appearance-none bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="2025">Financial Year: 2025</option>
              <option value="2024">Financial Year: 2024</option>
              <option value="2023">Financial Year: 2023</option>
            </select>
            <ChevronDown size={16} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div className="space-y-3">
          {payslips.map((payslip, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <span className="font-medium text-gray-900">{payslip.month}</span>
              <button className="flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium">
                <span>View Payslip</span>
                <Download size={16} />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Previous</span>
            <ChevronDown size={16} className="text-gray-400" />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {benefits.map((benefit, index) => (
          <button
            key={index}
            className={`w-full ${benefit.color} text-white p-6 rounded-xl hover:opacity-90 transition-opacity text-left font-medium`}
          >
            {benefit.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PayslipBenefits;