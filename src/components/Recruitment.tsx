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
      {/* Tabs + Action */}
      <div className="flex flex-col sm:flex-row justify-between gap-3 items-stretch sm:items-center">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('jobs')}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'jobs' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Job Postings
          </button>
          <button
            onClick={() => setActiveTab('candidates')}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'candidates' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Candidates
          </button>
        </div>
        
        <button className="flex items-center justify-center gap-2 bg-orange-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-orange-600 transition-colors">
          <Plus size={16} />
          {activeTab === 'jobs' ? 'New Job' : 'Add Candidate'}
        </button>
      </div>

      {/* ================= JOBS TAB ================= */}
      {activeTab === 'jobs' && (
        <div className="space-y-6">
          {/* Search */}
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs..."
                className="pl-8 pr-3 py-2 w-full text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <button className="flex items-center gap-1 px-3 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors text-sm">
              <Filter size={14} />
              Filters
            </button>
          </div>

          {/* Job Cards */}
          <div className="grid gap-3">
            {jobPostings.map((job) => (
              <div key={job.id} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1">{job.title}</h3>
                    <div className="grid grid-cols-1 sm:flex sm:flex-wrap gap-2 text-xs text-gray-600">
                      <div className="flex items-center gap-1">
                        <User size={14} /> {job.department}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} /> {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign size={14} /> {job.salary}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} /> {new Date(job.posted).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(job.status)}`}>
                      {job.status}
                    </span>
                    <button
                      onClick={() => setSelectedJob(job)}
                      className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <Eye size={14} className="text-gray-600" />
                    </button>
                  </div>
                </div>
                
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-600">{job.applications} applications</span>
                  <div className="flex gap-2">
                    <button className="px-2 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors">
                      Applications
                    </button>
                    <button className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= CANDIDATES TAB ================= */}
      {activeTab === 'candidates' && (
        <div className="space-y-6">
          {/* Search */}
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search candidates..."
                className="pl-8 pr-3 py-2 w-full text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <button className="flex items-center gap-1 px-3 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors text-sm">
              <Filter size={14} />
              Filters
            </button>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left py-3 px-4">Candidate</th>
                    <th className="text-left py-3 px-4">Position</th>
                    <th className="text-left py-3 px-4">Experience</th>
                    <th className="text-left py-3 px-4">Score</th>
                    <th className="text-left py-3 px-4">Stage</th>
                    <th className="text-left py-3 px-4">Status</th>
                    <th className="text-left py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {candidates.map((candidate) => (
                    <tr key={candidate.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium text-gray-900">{candidate.name}</td>
                      <td className="py-3 px-4 text-gray-600">{candidate.position}</td>
                      <td className="py-3 px-4 text-gray-600">{candidate.experience}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <div className="w-12 h-2 bg-gray-200 rounded-full">
                            <div 
                              className="h-2 bg-green-500 rounded-full" 
                              style={{ width: `${candidate.score}%` }}
                            ></div>
                          </div>
                          <span>{candidate.score}%</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-gray-600">{candidate.stage}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(candidate.status)}`}>
                          {candidate.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <button className="p-1 hover:bg-gray-200 rounded-full">
                          <Eye size={14} className="text-gray-600" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Card Layout */}
          <div className="grid gap-3 md:hidden">
            {candidates.map((candidate) => (
              <div key={candidate.id} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{candidate.name}</p>
                    <p className="text-xs text-gray-600">{candidate.position} • {candidate.experience}</p>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(candidate.status)}`}>
                    {candidate.status}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mb-2">Stage: {candidate.stage}</p>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-2 bg-green-500 rounded-full" 
                      style={{ width: `${candidate.score}%` }}
                    ></div>
                  </div>
                  <span className="text-xs">{candidate.score}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= JOB MODAL ================= */}
      {selectedJob && (
        <Modal
          isOpen={!!selectedJob}
          onClose={() => setSelectedJob(null)}
          title="Job Posting Details"
        >
          <div className="space-y-4 text-sm">
            <h3 className="text-lg font-semibold text-gray-900">{selectedJob.title}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <p><span className="font-medium">Department:</span> {selectedJob.department}</p>
              <p><span className="font-medium">Location:</span> {selectedJob.location}</p>
              <p><span className="font-medium">Type:</span> {selectedJob.type}</p>
              <p><span className="font-medium">Salary:</span> {selectedJob.salary}</p>
            </div>
            <div className="pt-2 border-t border-gray-200">
              <p>{selectedJob.applications} applications received</p>
              <p>Posted on {new Date(selectedJob.posted).toLocaleDateString()}</p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Recruitment;
