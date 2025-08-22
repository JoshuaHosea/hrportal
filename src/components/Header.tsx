import React from 'react';
import { Search, ArrowLeft, Bell, Mail, User, ToggleLeft, ToggleRight } from 'lucide-react';

interface HeaderProps {
  activeScreen: string;
  userRole: string;
  setUserRole: (role: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeScreen, userRole, setUserRole }) => {
  const toggleRole = () => {
    setUserRole(userRole === 'employee' ? 'hr_executive' : 'employee');
  };

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <ArrowLeft size={20} className="text-gray-600" />
          <h1 className="text-xl font-semibold text-gray-900">{activeScreen}</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1">
            <span className="text-sm text-gray-600">Employee</span>
            <button onClick={toggleRole} className="text-orange-500">
              {userRole === 'hr_executive' ? <ToggleRight size={20} /> : <ToggleLeft size={20} />}
            </button>
            <span className="text-sm text-gray-600">HR Executive</span>
          </div>
          
          <div className="relative">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 bg-gray-100 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-orange-500 w-80"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
              <Bell size={18} className="text-white" />
            </div>
            <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center">
              <Mail size={18} className="text-white" />
            </div>
            <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center">
              <User size={18} className="text-white" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex gap-2 mt-4">
        {[1,2,3,4,5,6,7,8].map((item, index) => (
          <div 
            key={item} 
            className={`h-2 rounded-full ${index === 0 ? 'bg-gray-800 w-8' : 'bg-gray-300 w-6'}`}
          ></div>
        ))}
      </div>
    </header>
  );
};

export default Header;