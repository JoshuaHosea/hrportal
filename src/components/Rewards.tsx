import React, { useState } from 'react';
import { Award, Star, Trophy, Gift, TrendingUp, Users, Calendar, Plus } from 'lucide-react';

const Rewards: React.FC = () => {
  const [activeTab, setActiveTab] = useState('recognition');

  const recognitions = [
    { id: 1, title: 'Employee of the Month', recipient: 'Sarah Johnson', department: 'Engineering', date: '2025-01-01', reason: 'Outstanding performance in Q4 project delivery and team leadership', points: 500, type: 'Monthly Award' },
    { id: 2, title: 'Innovation Award', recipient: 'Michael Chen', department: 'Product', date: '2024-12-15', reason: 'Developed innovative solution that improved user experience by 40%', points: 750, type: 'Special Recognition' },
    { id: 3, title: 'Team Player Award', recipient: 'Emily Davis', department: 'Design', date: '2024-12-10', reason: 'Exceptional collaboration across multiple departments', points: 300, type: 'Peer Recognition' }
  ];

  const myRewards = [
    { id: 1, title: 'Project Excellence Award', date: '2024-11-20', points: 400, description: 'Successfully delivered critical project ahead of schedule' },
    { id: 2, title: 'Mentor of the Quarter', date: '2024-10-15', points: 350, description: 'Outstanding mentorship of junior team members' },
    { id: 3, title: 'Customer Success Champion', date: '2024-09-30', points: 250, description: 'Received exceptional customer feedback scores' }
  ];

  const rewardPrograms = [
    { id: 1, title: 'Wellness Program', description: 'Participate in company wellness activities and earn points', pointsAvailable: 100, category: 'Health & Wellness', participants: 234 },
    { id: 2, title: 'Learning & Development', description: 'Complete training courses and certifications', pointsAvailable: 200, category: 'Professional Growth', participants: 189 },
    { id: 3, title: 'Innovation Challenge', description: 'Submit innovative ideas and solutions', pointsAvailable: 500, category: 'Innovation', participants: 67 },
    { id: 4, title: 'Community Service', description: 'Volunteer for company community initiatives', pointsAvailable: 150, category: 'Social Impact', participants: 145 }
  ];

  const leaderboard = [
    { rank: 1, name: 'Sarah Johnson', department: 'Engineering', points: 2450 },
    { rank: 2, name: 'Michael Chen', department: 'Product', points: 2180 },
    { rank: 3, name: 'Emily Davis', department: 'Design', points: 1950 },
    { rank: 4, name: 'David Wilson', department: 'Engineering', points: 1820 },
    { rank: 5, name: 'Lisa Wong', department: 'Marketing', points: 1650 }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Monthly Award': return 'bg-yellow-100 text-yellow-800';
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
    <div className="space-y-6 max-w-full overflow-hidden">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 overflow-x-auto no-scrollbar">
        {['recognition', 'my-rewards', 'programs', 'leaderboard'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex-shrink-0 ${
              activeTab === tab ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {tab === 'recognition' && 'Recognition Wall'}
            {tab === 'my-rewards' && 'My Rewards'}
            {tab === 'programs' && 'Programs'}
            {tab === 'leaderboard' && 'Leaderboard'}
          </button>
        ))}
      </div>

      {/* Recognition Wall */}
      {activeTab === 'recognition' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center flex-wrap gap-2">
            <h2 className="text-lg font-semibold text-gray-900">Recognition Wall</h2>
            <button className="flex items-center gap-1 bg-orange-500 text-white px-3 py-2 text-sm rounded-md hover:bg-orange-600">
              <Plus size={16} />
              Nominate
            </button>
          </div>

          {recognitions.map(r => (
            <div key={r.id} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
              <div className="flex justify-between gap-4">
                <div className="flex gap-3">
                  <div className="bg-yellow-100 p-2 rounded-lg h-fit">
                    <Trophy size={20} className="text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">{r.title}</h3>
                    <p className="text-sm text-gray-600">{r.recipient} • {r.department}</p>
                    <p className="text-xs text-gray-700 mt-1">{r.reason}</p>
                  </div>
                </div>
                <div className="text-right text-xs">
                  <span className={`px-2 py-1 rounded-full ${getTypeColor(r.type)}`}>
                    {r.type}
                  </span>
                  <p className="text-gray-600 mt-1">{new Date(r.date).toLocaleDateString()}</p>
                  <p className="font-medium text-orange-600">{r.points} pts</p>
                </div>
              </div>
              <div className="flex gap-4 text-xs mt-3 border-t pt-2 text-gray-600">
                <button className="flex items-center gap-1 hover:text-orange-600">
                  <Star size={14} /> Congratulate
                </button>
                <button className="hover:text-orange-600">Share</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* My Rewards */}
      {activeTab === 'my-rewards' && (
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-4 shadow-sm border">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-semibold">My Reward Points</h3>
              <div className="text-right">
                <p className="text-2xl font-bold text-orange-500">1,250</p>
                <p className="text-xs text-gray-600">Total Points</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-green-50 p-2 rounded">
                <p className="text-lg font-bold text-green-600">850</p>
                <p className="text-xs">Available</p>
              </div>
              <div className="bg-blue-50 p-2 rounded">
                <p className="text-lg font-bold text-blue-600">400</p>
                <p className="text-xs">Redeemed</p>
              </div>
              <div className="bg-purple-50 p-2 rounded">
                <p className="text-lg font-bold text-purple-600">3</p>
                <p className="text-xs">Awards</p>
              </div>
            </div>
          </div>

          {myRewards.map(r => (
            <div key={r.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2">
                <Award size={18} className="text-orange-500" />
                <div>
                  <p className="font-medium text-sm">{r.title}</p>
                  <p className="text-xs text-gray-600">{r.description}</p>
                </div>
              </div>
              <div className="text-right text-xs">
                <p className="text-orange-600 font-medium">+{r.points}</p>
                <p>{new Date(r.date).toLocaleDateString()}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Programs */}
      {activeTab === 'programs' && (
        <div className="space-y-3">
          {rewardPrograms.map(p => (
            <div key={p.id} className="bg-white rounded-lg p-4 shadow-sm border">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-sm font-semibold">{p.title}</h3>
                  <p className="text-xs text-gray-600">{p.description}</p>
                  <span className={`text-xs px-2 py-1 rounded ${getCategoryColor(p.category)}`}>
                    {p.category}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center mt-2 text-xs text-gray-600">
                <div className="flex gap-3">
                  <span className="flex items-center gap-1"><TrendingUp size={12}/> {p.pointsAvailable} pts</span>
                  <span className="flex items-center gap-1"><Users size={12}/> {p.participants}</span>
                </div>
                <button className="bg-orange-500 text-white px-2 py-1 rounded text-xs">Join</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Leaderboard */}
      {activeTab === 'leaderboard' && (
        <div className="bg-white rounded-lg shadow-sm border">
          {leaderboard.map(p => (
            <div key={p.rank} className="p-3 flex justify-between items-center text-sm border-b last:border-0">
              <div className="flex gap-2 items-center">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  p.rank === 1 ? 'bg-yellow-100 text-yellow-800' :
                  p.rank === 2 ? 'bg-gray-100 text-gray-800' :
                  p.rank === 3 ? 'bg-orange-100 text-orange-800' :
                  'bg-blue-100 text-blue-800'
                }`}>{p.rank}</div>
                <div>
                  <p className="font-medium">{p.name}</p>
                  <p className="text-xs text-gray-600">{p.department}</p>
                </div>
              </div>
              <p className="font-bold text-orange-600">{p.points}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Rewards;
