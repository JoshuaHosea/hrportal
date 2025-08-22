import React, { useState } from 'react';
import { BookOpen, Clock, Users, Award, Play, CheckCircle, Calendar } from 'lucide-react';

const Training: React.FC = () => {
  const [activeTab, setActiveTab] = useState('available');

  const availableTraining = [
    {
      id: 1,
      title: 'Advanced React Development',
      description: 'Master advanced React concepts including hooks, context, and performance optimization',
      duration: '40 hours',
      level: 'Advanced',
      enrolled: 45,
      rating: 4.8,
      category: 'Technical',
      startDate: '2025-02-01'
    },
    {
      id: 2,
      title: 'Leadership Fundamentals',
      description: 'Develop essential leadership skills for managing teams and driving results',
      duration: '24 hours',
      level: 'Intermediate',
      enrolled: 32,
      rating: 4.6,
      category: 'Leadership',
      startDate: '2025-02-15'
    },
    {
      id: 3,
      title: 'Data Analytics with Python',
      description: 'Learn data analysis techniques using Python, pandas, and visualization libraries',
      duration: '35 hours',
      level: 'Beginner',
      enrolled: 28,
      rating: 4.7,
      category: 'Technical',
      startDate: '2025-03-01'
    }
  ];

  const myTraining = [
    {
      id: 1,
      title: 'Project Management Essentials',
      progress: 75,
      status: 'In Progress',
      completedHours: 18,
      totalHours: 24,
      nextSession: '2025-01-20'
    },
    {
      id: 2,
      title: 'Communication Skills',
      progress: 100,
      status: 'Completed',
      completedHours: 16,
      totalHours: 16,
      completedDate: '2024-12-15'
    },
    {
      id: 3,
      title: 'Agile Methodology',
      progress: 45,
      status: 'In Progress',
      completedHours: 9,
      totalHours: 20,
      nextSession: '2025-01-22'
    }
  ];

  const certificates = [
    {
      id: 1,
      title: 'Certified Scrum Master',
      issueDate: '2024-11-15',
      validUntil: '2026-11-15',
      issuer: 'Scrum Alliance'
    },
    {
      id: 2,
      title: 'AWS Cloud Practitioner',
      issueDate: '2024-09-20',
      validUntil: '2027-09-20',
      issuer: 'Amazon Web Services'
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Not Started': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <button
          onClick={() => setActiveTab('available')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeTab === 'available' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Available Training
        </button>
        <button
          onClick={() => setActiveTab('my-training')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeTab === 'my-training' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          My Training
        </button>
        <button
          onClick={() => setActiveTab('certificates')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeTab === 'certificates' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Certificates
        </button>
      </div>

      {activeTab === 'available' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableTraining.map((training) => (
              <div key={training.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2">
                    <BookOpen size={20} className="text-orange-500" />
                    <span className="text-sm text-gray-600">{training.category}</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(training.level)}`}>
                    {training.level}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{training.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{training.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock size={16} />
                    {training.duration}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users size={16} />
                    {training.enrolled} enrolled
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar size={16} />
                    Starts {new Date(training.startDate).toLocaleDateString()}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Award size={16} className="text-yellow-500" />
                    <span className="text-sm font-medium">{training.rating}</span>
                  </div>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'my-training' && (
        <div className="space-y-6">
          <div className="grid gap-4">
            {myTraining.map((training) => (
              <div key={training.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{training.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>{training.completedHours}/{training.totalHours} hours completed</span>
                      {training.status === 'In Progress' && training.nextSession && (
                        <span>Next session: {new Date(training.nextSession).toLocaleDateString()}</span>
                      )}
                      {training.status === 'Completed' && training.completedDate && (
                        <span>Completed: {new Date(training.completedDate).toLocaleDateString()}</span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(training.status)}`}>
                      {training.status}
                    </span>
                    {training.status === 'Completed' && (
                      <CheckCircle size={20} className="text-green-500" />
                    )}
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Progress</span>
                    <span className="text-sm font-medium text-gray-900">{training.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-orange-500 h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${training.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  {training.status === 'In Progress' && (
                    <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                      <Play size={16} />
                      Continue Learning
                    </button>
                  )}
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'certificates' && (
        <div className="space-y-6">
          <div className="grid gap-4">
            {certificates.map((certificate) => (
              <div key={certificate.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex justify-between items-start">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <Award size={24} className="text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{certificate.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">Issued by {certificate.issuer}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>Issued: {new Date(certificate.issueDate).toLocaleDateString()}</span>
                        <span>Valid until: {new Date(certificate.validUntil).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm hover:bg-blue-200 transition-colors">
                      View Certificate
                    </button>
                    <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 mb-4">Want to earn more certificates?</p>
            <button 
              onClick={() => setActiveTab('available')}
              className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Browse Training Programs
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Training;