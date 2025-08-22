// Announcement.tsx
import React from 'react';
import {
  Calendar,
  User,
  Bell,
  AlertTriangle,
  Clock,
  BookOpen,
} from 'lucide-react';

const Announcement: React.FC = () => {
  const announcements = [
    {
      id: 1,
      title: 'Company Annual Dinner 2025',
      content:
        'Join us for our annual company dinner celebration. All employees and their families are invited to attend this special event.',
      author: 'HR Department',
      date: '2025-01-15',
      priority: 'high',
    },
    {
      id: 2,
      title: 'New Office Policy Updates',
      content:
        'Please review the updated office policies regarding remote work arrangements and flexible hours effective from February 1st.',
      author: 'Management',
      date: '2025-01-10',
      priority: 'medium',
    },
    {
      id: 3,
      title: 'Health & Wellness Program',
      content:
        'We are launching a new health and wellness program for all employees. Registration opens next week.',
      author: 'HR Department',
      date: '2025-01-08',
      priority: 'normal',
    },
    {
      id: 4,
      title: 'System Maintenance Notice',
      content:
        'The HR portal will undergo scheduled maintenance on January 20th from 2:00 AM to 6:00 AM. Please plan accordingly.',
      author: 'IT Department',
      date: '2025-01-05',
      priority: 'normal',
    },
  ];

  // --- Stats calculations ---
  const total = announcements.length;
  const highPriority = announcements.filter((a) => a.priority === 'high').length;
  const upcomingEvents = announcements.filter(
    (a) =>
      a.title.toLowerCase().includes('annual') ||
      a.title.toLowerCase().includes('event')
  ).length;
  const readThisWeek = 12; // placeholder – replace with real logic

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'border-l-red-500';
      case 'medium':
        return 'border-l-orange-500';
      default:
        return 'border-l-blue-500';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center flex-wrap gap-3">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">
          Company Announcements
        </h2>
        <button className="bg-orange-500 text-white px-3 py-2 md:px-4 md:py-2 rounded-lg hover:bg-orange-600 transition-colors text-sm md:text-base">
          New Announcement
        </button>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div className="bg-white shadow-sm rounded-xl p-3 md:p-4 flex items-center gap-2 md:gap-3 border border-gray-200">
          <Bell className="text-orange-500" size={20} />
          <div>
            <p className="text-xs md:text-sm text-gray-500">Total Announcements</p>
            <p className="text-lg md:text-xl font-bold text-gray-900">{total}</p>
          </div>
        </div>

        <div className="bg-white shadow-sm rounded-xl p-3 md:p-4 flex items-center gap-2 md:gap-3 border border-gray-200">
          <AlertTriangle className="text-red-500" size={20} />
          <div>
            <p className="text-xs md:text-sm text-gray-500">High Priority</p>
            <p className="text-lg md:text-xl font-bold text-gray-900">{highPriority}</p>
          </div>
        </div>

        <div className="bg-white shadow-sm rounded-xl p-3 md:p-4 flex items-center gap-2 md:gap-3 border border-gray-200">
          <Clock className="text-purple-500" size={20} />
          <div>
            <p className="text-xs md:text-sm text-gray-500">Upcoming Events</p>
            <p className="text-lg md:text-xl font-bold text-gray-900">{upcomingEvents}</p>
          </div>
        </div>

        <div className="bg-white shadow-sm rounded-xl p-3 md:p-4 flex items-center gap-2 md:gap-3 border border-gray-200">
          <BookOpen className="text-green-500" size={20} />
          <div>
            <p className="text-xs md:text-sm text-gray-500">Read This Week</p>
            <p className="text-lg md:text-xl font-bold text-gray-900">{readThisWeek}</p>
          </div>
        </div>
      </div>

      {/* Announcements List */}
      <div className="grid gap-6">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className={`bg-white rounded-xl shadow-sm border border-gray-200 border-l-4 ${getPriorityColor(
              announcement.priority
            )} p-4 md:p-6 hover:shadow-md transition-shadow`}
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                {announcement.title}
              </h3>
              <span
                className={`px-2 py-1 md:px-3 md:py-1 rounded-full text-[10px] md:text-xs font-medium ${
                  announcement.priority === 'high'
                    ? 'bg-red-100 text-red-800'
                    : announcement.priority === 'medium'
                    ? 'bg-orange-100 text-orange-800'
                    : 'bg-blue-100 text-blue-800'
                }`}
              >
                {announcement.priority.toUpperCase()}
              </span>
            </div>

            <p className="text-gray-700 mb-3 md:mb-4 text-sm md:text-base leading-relaxed">
              {announcement.content}
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs md:text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <User size={14} />
                <span>{announcement.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{new Date(announcement.date).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="text-orange-500 hover:text-orange-600 font-medium text-sm md:text-base">
          Load More Announcements
        </button>
      </div>
    </div>
  );
};

export default Announcement;
