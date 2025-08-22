import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  UserPlus,
  TrendingUp,
  GraduationCap,
  Award,
  Calendar, 
  Receipt, 
  Megaphone, 
  Settings, 
  LogOut 
} from 'lucide-react';

interface SidebarProps {
  activeScreen: string;
  onNavigate: (screen: string) => void;
  userRole: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeScreen, onNavigate, userRole }) => {
  const employeeMenuItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Leave Request', icon: Calendar },
    { name: 'Payslip & Benefits', icon: Receipt },
    { name: 'Performance Management', icon: TrendingUp },
    { name: 'Training & Development', icon: GraduationCap },
    { name: 'Announcement', icon: Megaphone },
    { name: 'Profile/Settings', icon: Settings },
    { name: 'Log Out', icon: LogOut },
  ];

  const hrExecutiveMenuItems = [
    { name: 'HR Executive Dashboard', icon: LayoutDashboard },
    { name: 'Employees', icon: Users },
    { name: 'Recruitment', icon: UserPlus },
    { name: 'Performance Management', icon: TrendingUp },
    { name: 'Training & Development', icon: GraduationCap },
    { name: 'Rewards & Recognition', icon: Award },
    { name: 'Payslip & Benefits', icon: Receipt },
    { name: 'Announcement', icon: Megaphone },
    { name: 'Profile/Settings', icon: Settings },
    { name: 'Log Out', icon: LogOut },
  ];

  const menuItems = userRole === 'hr_executive' ? hrExecutiveMenuItems : employeeMenuItems;

  const handleClick = (screen: string) => {
    if (screen !== activeScreen) {
      onNavigate(screen);
    }
  };

  return (
    <div className="w-62 md:w-64 bg-gray-800 text-white flex flex-col h-screen">
      {/* Header */}
      <div className="p-4 md:p-6 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 md:w-6 md:h-6 bg-orange-500 rounded-full"></div>
          <span className="text-sm md:text-xl font-semibold">Cursor IT</span>
        </div>
        <div className="mt-1 md:mt-2 text-xs text-gray-400">
          {userRole === 'hr_executive' ? 'HR Executive' : 'Employee'} Portal
        </div>
      </div>
      
      {/* Menu */}
      <nav className="flex-1 overflow-y-auto p-2 md:p-4">
        <ul className="space-y-1 md:space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeScreen === item.name;
            const isLogOut = item.name === 'Log Out';
            
            return (
              <li key={item.name} className={isLogOut ? 'mt-auto' : ''}>
                <button
                  onClick={() => handleClick(item.name)}
                  className={`w-full flex items-center gap-2 md:gap-3 px-2 md:px-3 py-2 md:py-3 rounded-lg text-left transition-colors ${
                    isActive 
                      ? 'bg-orange-500 text-white' 
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <Icon size={18} className="md:w-5 md:h-5" />
                  <span className="text-xs md:text-sm">{item.name}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
