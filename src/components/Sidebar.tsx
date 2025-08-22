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
    { name: 'Leave Request', icon: Calendar },
    { name: 'Payslip & Benefits', icon: Receipt },
    { name: 'Announcement', icon: Megaphone },
    { name: 'Profile/Settings', icon: Settings },
    { name: 'Log Out', icon: LogOut },
  ];

  const menuItems = userRole === 'hr_executive' ? hrExecutiveMenuItems : employeeMenuItems;
  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
          <span className="text-xl font-semibold">HRMS</span>
        </div>
        <div className="mt-2 text-xs text-gray-400">
          {userRole === 'hr_executive' ? 'HR Executive' : 'Employee Portal'}
        </div>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeScreen === item.name;
            const isLogOut = item.name === 'Log Out';
            
            return (
              <li key={item.name} className={isLogOut ? 'mt-auto' : ''}>
                <button
                  onClick={() => onNavigate(item.name)}
                  className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-colors ${
                    isActive 
                      ? 'bg-orange-500 text-white' 
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <Icon size={20} />
                  <span className="text-sm">{item.name}</span>
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