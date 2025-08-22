import React, { useState } from 'react';
import { Star, TrendingUp, Calendar, User, MessageSquare, Plus } from 'lucide-react';

const Performance: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const performanceData = {
    overall: 4.2,
    goals: 85,
    feedback: 12,
    nextReview: '2025-03-15'
  };

  const goals = [
    { id: 1, title: 'Complete React Certification', progress: 75, deadline: '2025-02-28', status: 'In Progress' },
    { id: 2, title: 'Lead Team Project', progress: 90, deadline: '2025-02-15', status: 'Nearly Complete' },
    { id: 3, title: 'Improve Code Review Process', progress: 60, deadline: '2025-03-30', status: 'In Progress' },
  ];

  const feedbackHistory = [
    {
      id: 1,
      from: 'Sarah Johnson (Manager)',
      date: '2025-01-10',
      type: 'Performance Review',
      rating: 4.5,
      comment: 'Excellent work on the recent project. Shows great leadership potential.'
    },
    {
      id: 2,
      from: 'Mike Chen (Peer)',
      date: '2025-01-05',
      type: 'Peer Feedback',
      rating: 4.0,
      comment: 'Great collaboration skills and always willing to help team members.'
    },
    {
      id: 3,
      from: 'Lisa Wong (Direct Report)',
      date: '2024-12-20',
      type: '360 Feedback',
      rating: 4.3,
      comment: 'Provides clear guidance and constructive feedback. Very supportive manager.'
    }
  ];

  const upcomingAppraisals = [
    { employee: 'John Smith', date: '2025-01-20', type: 'Quarterly Review' },
    { employee: 'Emily Davis', date: '2025-01-22', type: 'Annual Review' },
    { employee: 'Michael Chen', date: '2025-01-25', type: 'Probation Review' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Nearly Complete': return 'bg-green-100 text-green-800';
      case 'Completed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-yellow-100 text-yellow-800';
    }
  };

  return (
    <div 
      className="space-y-6 px-3 md:px-6 max-w-full overflow-x-hidden"
      style={{ overscrollBehavior: 'none', WebkitOverflowScrolling: 'touch' }}
    >
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 md:gap-4">
        {['overview','goals','feedback','appraisals'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 md:px-4 py-2 rounded-lg font-medium transition-colors text-sm md:text-base ${
              activeTab === tab ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {tab === 'overview' && 'My Performance'}
            {tab === 'goals' && 'Goals & Objectives'}
            {tab === 'feedback' && 'Feedback History'}
            {tab === 'appraisals' && 'Appraisals'}
          </button>
        ))}
      </div>

      {/* Overview */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Performance Overview */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Overview</h3>
              <div className="grid grid-cols-2 gap-6">
                {/* Stars */}
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={24}
                        className={star <= performanceData.overall ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{performanceData.overall}/5.0</p>
                  <p className="text-sm text-gray-600">Overall Rating</p>
                </div>
                {/* Goals */}
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 relative">
                    <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                      <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#e5e7eb" strokeWidth="3"/>
                      <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#f97316" strokeWidth="3" strokeDasharray={`${performanceData.goals}, 100`} />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-900">{performanceData.goals}%</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">Goals Achieved</p>
                </div>
              </div>
            </div>

            {/* Meeting */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Next Performance Meeting</h3>
                <Calendar size={20} className="text-orange-500" />
              </div>
              <div className="bg-orange-50 rounded-lg p-4">
                <p className="text-lg font-semibold text-orange-900">
                  {new Date(performanceData.nextReview).toLocaleDateString('en-US', { 
                    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
                  })}
                </p>
                <p className="text-sm text-orange-700 mt-1">Quarterly Performance Review with Sarah Johnson</p>
                <button className="mt-3 bg-orange-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-600 transition-colors">
                  Prepare for Meeting
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Achievements */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="text-green-500" size={24} />
                <h4 className="font-semibold text-gray-900">Recent Achievements</h4>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="text-sm font-medium text-green-900">Project Leadership</p>
                  <p className="text-xs text-green-700">Successfully led cross-functional team</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm font-medium text-blue-900">Skill Development</p>
                  <p className="text-xs text-blue-700">Completed advanced React training</p>
                </div>
              </div>
            </div>

            {/* Feedback */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="text-blue-500" size={24} />
                <h4 className="font-semibold text-gray-900">Recent Feedback</h4>
              </div>
              <p className="text-sm text-gray-600 mb-2">Latest from Sarah Johnson:</p>
              <p className="text-sm text-gray-800 italic">"Excellent work on the recent project. Shows great leadership potential."</p>
              <div className="flex items-center mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} className={star <= 4.5 ? 'text-yellow-400 fill-current' : 'text-gray-300'} />
                ))}
                <span className="ml-2 text-sm text-gray-600">4.5/5</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Goals */}
      {activeTab === 'goals' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center flex-wrap gap-2">
            <h2 className="text-xl font-semibold text-gray-900">Goals & Objectives</h2>
            <button className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
              <Plus size={18} />
              Add New Goal
            </button>
          </div>

          <div className="grid gap-4">
            {goals.map((goal) => (
              <div key={goal.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{goal.title}</h3>
                    <p className="text-sm text-gray-600">Deadline: {new Date(goal.deadline).toLocaleDateString()}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(goal.status)}`}>
                    {goal.status}
                  </span>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Progress</span>
                    <span className="text-sm font-medium text-gray-900">{goal.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-orange-500 h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${goal.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex gap-2 flex-wrap">
                  <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm hover:bg-blue-200 transition-colors">
                    Update Progress
                  </button>
                  <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Feedback */}
      {activeTab === 'feedback' && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">Feedback History</h2>
          <div className="grid gap-4">
            {feedbackHistory.map((feedback) => (
              <div key={feedback.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex justify-between items-start mb-4 flex-wrap">
                  <div>
                    <h3 className="font-semibold text-gray-900">{feedback.from}</h3>
                    <p className="text-sm text-gray-600">{feedback.type} • {new Date(feedback.date).toLocaleDateString()}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={16}
                        className={star <= feedback.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                      />
                    ))}
                    <span className="ml-2 text-sm font-medium text-gray-900">{feedback.rating}/5</span>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{feedback.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Appraisals */}
      {activeTab === 'appraisals' && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">Performance Appraisals</h2>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Appraisals</h3>
            <div className="space-y-3">
              {upcomingAppraisals.map((appraisal, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg flex-wrap gap-2">
                  <div className="flex items-center gap-3">
                    <User size={20} className="text-gray-600" />
                    <div>
                      <p className="font-medium text-gray-900">{appraisal.employee}</p>
                      <p className="text-sm text-gray-600">{appraisal.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">{new Date(appraisal.date).toLocaleDateString()}</p>
                    <button className="text-sm text-orange-600 hover:text-orange-700">Schedule Meeting</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Performance;
