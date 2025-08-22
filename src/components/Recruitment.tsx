import React, { useState } from 'react';
import { Search, Filter, Plus, Eye, User, Calendar, MapPin, DollarSign } from 'lucide-react';
import Modal from './Modal';

const Recruitment: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('jobs');

  const jobPostings = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      department: 'Engineering',
      location: 'Kuala Lumpur',
      type: 'Full-time',
      salary: 'RM 8,000 - RM 12,000',
      applications: 45,
      status: 'Active',
      posted: '2025-01-10'
    },
    {
      id: 2,
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      salary: 'RM 10,000 - RM 15,000',
      applications: 32,
      status: 'Active',
      posted: '2025-01-08'
    },
    {
      id: 3,
      title: 'UX Designer',
      department: 'Design',
      location: 'Kuala Lumpur',
      type: 'Contract',
      salary: 'RM 6,000 - RM 9,000',
      applications: 28,
      status: 'Draft',
      posted: '2025-01-05'
    }
  ];

  const candidates = [
    {
      id: 1,
      name: 'Alex Chen',
      position: 'Senior Software Engineer',
      experience: '5 years',
      status: 'Interview Scheduled',
      score: 92,
      stage: 'Technical Interview'
    },
    {
      id: 2,
      name: 'Maria Rodriguez',
      position: 'Product Manager',
      experience: '7 years',
      status: 'Under Review',
      score: 88,
      stage: 'HR Screening'
    },
    {
      id: 3,
      name: 'David Kim',
      position: 'UX Designer',
      experience: '4 years',
      status: 'Offer Extended',
      score: 95,
      stage: 'Final Decision'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Draft': return 'bg-yellow-100 text-yellow-800';
      case 'Interview Scheduled': return 'bg-blue-100 text-blue-800';
      case 'Under Review': return 'bg-orange-100 text-orange-800';
      case 'Offer Extended': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <button
            onClick={() => setActiveTab('jobs')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'jobs' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Job Postings
          </button>
          <button
            onClick={() => setActiveTab('candidates')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'candidates' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Candidates
          </button>
        </div>
        
        <button className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
          <Plus size={18} />
          {activeTab === 'jobs' ? 'New Job Posting' : 'Add Candidate'}
        </button>
      </div>

      {activeTab === 'jobs' && (
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search job postings..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors">
              <Filter size={18} />
              Filters
            </button>
          </div>

          <div className="grid gap-4">
            {jobPostings.map((job) => (
              <div key={job.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <User size={16} />
                        {job.department}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign size={16} />
                        {job.salary}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        Posted {new Date(job.posted).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(job.status)}`}>
                      {job.status}
                    </span>
                    <button
                      onClick={() => setSelectedJob(job)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <Eye size={18} className="text-gray-600" />
                    </button>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{job.applications} applications received</span>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm hover:bg-blue-200 transition-colors">
                      View Applications
                    </button>
                    <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'candidates' && (
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search candidates..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors">
              <Filter size={18} />
              Filters
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700">Candidate</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700">Position</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700">Experience</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700">Score</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700">Stage</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700">Status</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {candidates.map((candidate) => (
                    <tr key={candidate.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6 font-medium text-gray-900">{candidate.name}</td>
                      <td className="py-4 px-6 text-gray-600">{candidate.position}</td>
                      <td className="py-4 px-6 text-gray-600">{candidate.experience}</td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          <div className="w-12 h-2 bg-gray-200 rounded-full">
                            <div 
                              className="h-2 bg-green-500 rounded-full" 
                              style={{ width: `${candidate.score}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium">{candidate.score}%</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-gray-600">{candidate.stage}</td>
                      <td className="py-4 px-6">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(candidate.status)}`}>
                          {candidate.status}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                          <Eye size={18} className="text-gray-600" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {selectedJob && (
        <Modal
          isOpen={!!selectedJob}
          onClose={() => setSelectedJob(null)}
          title="Job Posting Details"
        >
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{selectedJob.title}</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Department:</span>
                  <span className="ml-2 text-gray-600">{selectedJob.department}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Location:</span>
                  <span className="ml-2 text-gray-600">{selectedJob.location}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Type:</span>
                  <span className="ml-2 text-gray-600">{selectedJob.type}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Salary:</span>
                  <span className="ml-2 text-gray-600">{selectedJob.salary}</span>
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <h4 className="font-medium text-gray-900 mb-2">Application Statistics</h4>
              <p className="text-gray-600">{selectedJob.applications} applications received</p>
              <p className="text-gray-600">Posted on {new Date(selectedJob.posted).toLocaleDateString()}</p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Recruitment;