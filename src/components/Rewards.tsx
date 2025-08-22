import React, { useState } from 'react';
import { Award, Star, Trophy, Gift, TrendingUp, Users, Calendar, Plus } from 'lucide-react';

const Rewards: React.FC = () => {
  const [activeTab, setActiveTab] = useState('recognition');

  const recognitions = [
    {
      id: 1,
      title: 'Employee of the Month',
      recipient: 'Sarah Johnson',
      department: 'Engineering',
      date: '2025-01-01',
      reason: 'Outstanding performance in Q4 project delivery and team leadership',
      points: 500,
      type: 'Monthly Award'
    },
    {
      id: 2,
      title: 'Innovation Award',
      recipient: 'Michael Chen',
      department: 'Product',
      date: '2024-12-15',
      reason: 'Developed innovative solution that improved user experience by 40%',
      points: 750,
      type: 'Special Recognition'
    },
    {
      id: 3,
      title: 'Team Player Award',
      recipient: 'Emily Davis',
      department: 'Design',
      date: '2024-12-10',
      reason: 'Exceptional collaboration across multiple departments',
      points: 300,
      type: 'Peer Recognition'
    }
  ];

  const myRewards = [
    {
      id: 1,
      title: 'Project Excellence Award',
      date: '2024-11-20',
      points: 400,
      description: 'Successfully delivered critical project ahead of schedule'
    },
    {
      id: 2,
      title: 'Mentor of the Quarter',
      date: '2024-10-15',
      points: 350,
      description: 'Outstanding mentorship of junior team members'
    },
    {
      id: 3,
      title: 'Customer Success Champion',
      date: '2024-09-30',
      points: 250,
      description: 'Received exceptional customer feedback scores'
    }
  ];

  const rewardPrograms = [
    {
      id: 1,
      title: 'Wellness Program',
      description: 'Participate in company wellness activities and earn points',
      pointsAvailable: 100,
      category: 'Health & Wellness',
      participants: 234
    },
    {
      id: 2,
      title: 'Learning & Development',
      description: 'Complete training courses and certifications',
      pointsAvailable: 200,
      category: 'Professional Growth',
      participants: 189
    },
    {
      id: 3,
      title: 'Innovation Challenge',
      description: 'Submit innovative ideas and solutions',
      pointsAvailable: 500,
      category: 'Innovation',
      participants: 67
    },
    {
      id: 4,
      title: 'Community Service',
      description: 'Volunteer for company community initiatives',
      pointsAvailable: 150,
      category: 'Social Impact',
      participants: 145
    }
  ];

  const leaderboard = [
    { rank: 1, name: 'Sarah Johnson', department: 'Engineering', points: 2450 },
    { rank: 2, name: 'Michael Chen', department: 'Product', points: 2180 },
    { rank: 3, name: 'Emily Davis', department: 'Design', points: 1950 },
    { rank: 4, name: 'David Wilson', department: 'Engineering', points: 1820 },
    { rank: 5, name: 'Lisa Wong', department: 'Marketing', points: 1650 },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Monthly Award': return 'bg-gold-100 text-yellow-800';
      case 'Special Recognition': return 'bg-purple-100 text-purple-800';
      case 'Peer Recognition': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Health & Wellness': return 'bg-green-100 text-green-800';
      case 'Professional Growth': return 'bg-blue-100 text-blue-800';
      case 'Innovation': return 'bg-purple-100 text-purple-800';
      case 'Social Impact': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <button
          onClick={() => setActiveTab('recognition')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeTab === 'recognition' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Recognition Wall
        </button>
        <button
          onClick={() => setActiveTab('my-rewards')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeTab === 'my-rewards' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          My Rewards
        </button>
        <button
          onClick={() => setActiveTab('programs')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeTab === 'programs' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Reward Programs
        </button>
        <button
          onClick={() => setActiveTab('leaderboard')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeTab === 'leaderboard' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Leaderboard
        </button>
      </div>

      {activeTab === 'recognition' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900">Recognition Wall</h2>
            <button className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
              <Plus size={18} />
              Nominate Someone
            </button>
          </div>

          <div className="grid gap-6">
            {recognitions.map((recognition) => (
              <div key={recognition.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-100 p-3 rounded-lg">
                      <Trophy size={24} className="text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{recognition.title}</h3>
                      <p className="text-gray-600 mb-2">{recognition.recipient} • {recognition.department}</p>
                      <p className="text-sm text-gray-700">{recognition.reason}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(recognition.type)}`}>
                      {recognition.type}
                    </span>
                    <p className="text-sm text-gray-600 mt-2">{new Date(recognition.date).toLocaleDateString()}</p>
                    <p className="text-sm font-medium text-orange-600">{recognition.points} points</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                  <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-orange-600">
                    <Star size={16} />
                    Congratulate
                  </button>
                  <button className="text-sm text-gray-600 hover:text-orange-600">
                    Share
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'my-rewards' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">My Reward Points</h3>
              <div className="text-right">
                <p className="text-3xl font-bold text-orange-500">1,250</p>
                <p className="text-sm text-gray-600">Total Points</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-green-600">850</p>
                <p className="text-sm text-green-700">Available Points</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-blue-600">400</p>
                <p className="text-sm text-blue-700">Redeemed Points</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-purple-600">3</p>
                <p className="text-sm text-purple-700">Awards Received</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">My Awards & Recognition</h3>
            <div className="space-y-4">
              {myRewards.map((reward) => (
                <div key={reward.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Award size={20} className="text-orange-500" />
                    <div>
                      <h4 className="font-medium text-gray-900">{reward.title}</h4>
                      <p className="text-sm text-gray-600">{reward.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-orange-600">+{reward.points} points</p>
                    <p className="text-sm text-gray-600">{new Date(reward.date).toLocaleDateString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'programs' && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">Reward Programs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rewardPrograms.map((program) => (
              <div key={program.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-start gap-3">
                    <Gift size={24} className="text-orange-500 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{program.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{program.description}</p>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(program.category)}`}>
                        {program.category}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <TrendingUp size={16} />
                      Up to {program.pointsAvailable} points
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={16} />
                      {program.participants} participants
                    </div>
                  </div>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                    Join Program
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'leaderboard' && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">Points Leaderboard</h2>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Top Performers</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar size={16} />
                  This Quarter
                </div>
              </div>
            </div>
            
            <div className="divide-y divide-gray-200">
              {leaderboard.map((person) => (
                <div key={person.rank} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      person.rank === 1 ? 'bg-yellow-100 text-yellow-800' :
                      person.rank === 2 ? 'bg-gray-100 text-gray-800' :
                      person.rank === 3 ? 'bg-orange-100 text-orange-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {person.rank}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{person.name}</p>
                      <p className="text-sm text-gray-600">{person.department}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-orange-600">{person.points.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">points</p>
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

export default Rewards;