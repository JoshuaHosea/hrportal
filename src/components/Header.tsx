import React from 'react';
import { Search, ArrowLeft, Bell, User, Menu } from 'lucide-react';

interface HeaderProps {
  activeScreen: string;
  userRole: 'employee' | 'hr_executive';
  setUserRole: (role: 'employee' | 'hr_executive') => void;
  onBack?: () => void;
  canGoBack?: boolean;
  onToggleSidebar?: () => void;
  onNavigate?: (screen: string) => void; // 👈 add this
}

const Header: React.FC<HeaderProps> = ({ 
  activeScreen, 
  userRole, 
  onBack, 
  canGoBack, 
  onToggleSidebar,
  onNavigate
}) => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4">
      <div className="flex items-center justify-between">
        
        {/* Left Section */}
        <div className="flex items-center gap-3">
          {/* Mobile hamburger */}
          <button 
            onClick={onToggleSidebar} 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <Menu size={22} className="text-gray-700" />
          </button>

          {/* Back button */}
          {canGoBack && (
            <button onClick={onBack} className="p-1 hover:bg-gray-100 rounded-full">
              <ArrowLeft size={20} className="text-gray-600" />
            </button>
          )}

          {/* Page title */}
          <h1 className="text-xl font-semibold text-gray-900 truncate max-w-[140px] sm:max-w-none">
            {activeScreen}
          </h1>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Role display */}
          <div className="hidden sm:flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1">
            <span className="text-sm text-gray-600">
              {userRole === 'hr_executive' ? 'HR Executive' : 'Employee'}
            </span>
          </div>

          {/* Search - hidden on mobile */}
          <div className="relative hidden md:block">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="pl-9 pr-4 py-2 bg-gray-100 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-orange-500 w-48 lg:w-80"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Bell → Announcements */}
            <button
              onClick={() => onNavigate && onNavigate('Announcement')}
              className="w-9 h-9 sm:w-10 sm:h-10 bg-orange-500 rounded-full flex items-center justify-center hover:opacity-90 transition"
            >
              <Bell size={14} className="text-white" />
            </button>

            {/* User → Profile/Settings */}
            <button
              onClick={() => onNavigate && onNavigate('Profile/Settings')}
              className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-400 rounded-full flex items-center justify-center hover:opacity-90 transition"
            >
              <User size={14} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
