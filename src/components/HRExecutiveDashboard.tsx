import React, { useState } from 'react';
import {
  TrendingUp,
  TrendingDown,
  Users,
  Clock,
  DollarSign,
  Target,
  BookOpen,
  Heart,
  UserMinus,
  UserCheck,
  Calendar,
  Briefcase,
  PieChart,
  Activity,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

const HRExecutiveDashboard: React.FC = () => {
  const [metricsOpen, setMetricsOpen] = useState(false);

  const hrMetrics = [
    { title: 'Absence Rate', value: '3.2%', change: '-0.5%', trend: 'down', icon: Calendar, color: 'bg-red-500' },
    { title: 'Absence Rate Per Manager', value: '2.8%', change: '+0.2%', trend: 'up', icon: Users, color: 'bg-orange-500' },
    { title: 'Overtime Expense', value: '$12,450', change: '-8%', trend: 'down', icon: Clock, color: 'bg-blue-500' },
    { title: 'Employee Productivity Index', value: '87%', change: '+5%', trend: 'up', icon: TrendingUp, color: 'bg-green-500' },
    { title: 'Training Expense Per Employee', value: '$1,250', change: '+12%', trend: 'up', icon: BookOpen, color: 'bg-purple-500' },
    { title: 'Training Effectiveness Index', value: '92%', change: '+3%', trend: 'up', icon: Target, color: 'bg-indigo-500' },
    { title: 'Training Efficiency', value: '78%', change: '+7%', trend: 'up', icon: Activity, color: 'bg-teal-500' },
    { title: 'Employee Happiness', value: '8.4/10', change: '+0.3', trend: 'up', icon: Heart, color: 'bg-pink-500' },
    { title: 'Voluntary Turnover Rate', value: '12%', change: '-2%', trend: 'down', icon: UserMinus, color: 'bg-red-600' },
    { title: 'Talent Turnover Rate', value: '8%', change: '-1.5%', trend: 'down', icon: UserCheck, color: 'bg-orange-600' },
    { title: 'Retention Rate Per Manager', value: '94%', change: '+2%', trend: 'up', icon: Users, color: 'bg-green-600' },
    { title: 'Hiring Time', value: '28 days', change: '-5 days', trend: 'down', icon: Clock, color: 'bg-blue-600' },
    { title: 'Hiring Cost', value: '$3,200', change: '-$400', trend: 'down', icon: DollarSign, color: 'bg-yellow-500' },
    { title: 'Employee Absenteeism', value: '4.1%', change: '-0.8%', trend: 'down', icon: Calendar, color: 'bg-red-400' },
    { title: 'Billable Hours per Employee', value: '1,680hrs', change: '+40hrs', trend: 'up', icon: Clock, color: 'bg-blue-400' },
    { title: 'Revenue per Employee', value: '$125K', change: '+$8K', trend: 'up', icon: DollarSign, color: 'bg-green-400' },
    { title: 'Employee Engagement', value: '82%', change: '+4%', trend: 'up', icon: Heart, color: 'bg-pink-400' },
    { title: 'Diversity Index', value: '68%', change: '+6%', trend: 'up', icon: PieChart, color: 'bg-purple-400' },
  ];

  const quickStats = [
    { title: 'Total Employees', value: '1,247', icon: Users, color: 'bg-blue-500' },
    { title: 'Active Recruitments', value: '23', icon: Briefcase, color: 'bg-green-500' },
    { title: 'Pending Appraisals', value: '156', icon: Target, color: 'bg-orange-500' },
    { title: 'Training Programs', value: '12', icon: BookOpen, color: 'bg-purple-500' },
  ];

  return (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-600">{stat.title}</p>
                  <p className="text-lg md:text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-2 md:p-3 rounded-lg`}>
                  <Icon size={18} className="text-white md:w-6 md:h-6" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* HR Metrics Dashboard */}
      <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg md:text-xl font-semibold text-gray-900">HR Metrics Dashboard</h2>
          {/* Accordion toggle on mobile */}
          <button
            className="md:hidden flex items-center gap-1 text-sm text-orange-600"
            onClick={() => setMetricsOpen(!metricsOpen)}
          >
            {metricsOpen ? 'Hide Metrics' : 'Show Metrics'}
            {metricsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {hrMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className={`${metric.color} p-2 rounded-lg`}>
                    <Icon size={16} className="text-white" />
                  </div>
                  <div className={`flex items-center gap-1 text-xs md:text-sm ${
                    metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {metric.trend === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                    {metric.change}
                  </div>
                </div>
                <h3 className="text-sm font-medium text-gray-700 mb-1">{metric.title}</h3>
                <p className="text-base md:text-lg font-bold text-gray-900">{metric.value}</p>
              </div>
            );
          })}
        </div>

        {/* Mobile accordion list */}
        {metricsOpen && (
          <div className="md:hidden space-y-3">
            {hrMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`${metric.color} p-2 rounded-lg`}>
                        <Icon size={16} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-700">{metric.title}</h3>
                        <p className="text-base font-bold text-gray-900">{metric.value}</p>
                      </div>
                    </div>
                    <div className={`flex items-center gap-1 text-xs ${
                      metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {metric.trend === 'up' ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                      {metric.change}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Activities & Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200">
          <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">Recent Activities</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-700">New employee onboarded: Sarah Johnson</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-700">Performance review completed: 15 employees</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-sm text-gray-700">Training program launched: Leadership Development</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200">
          <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">Upcoming Tasks</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <span className="text-sm text-gray-700">Quarterly performance reviews</span>
              <span className="text-xs text-red-600 bg-red-100 px-2 py-1 rounded">Due in 3 days</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <span className="text-sm text-gray-700">Budget planning meeting</span>
              <span className="text-xs text-yellow-600 bg-yellow-100 px-2 py-1 rounded">Due in 1 week</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <span className="text-sm text-gray-700">Employee satisfaction survey</span>
              <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">Due in 2 weeks</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRExecutiveDashboard;
