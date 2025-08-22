import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import HRExecutiveDashboard from './components/HRExecutiveDashboard';
import Employees from './components/Employees';
import Recruitment from './components/Recruitment';
import Performance from './components/Performance';
import Training from './components/Training';
import Rewards from './components/Rewards';
import LeaveRequest from './components/LeaveRequest';
import PayslipBenefits from './components/PayslipBenefits';
import Announcement from './components/Announcement';
import ProfileSettings from './components/ProfileSettings';
import Login from './components/Login';

function App() {
  const [activeScreen, setActiveScreen] = useState('Dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<'employee' | 'hr_executive' | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false); // 👈 for mobile sidebar toggle
  const [history, setHistory] = useState<string[]>([]); // track visited screens

  const handleNavigation = (screen: string) => {
    if (screen === 'Log Out') {
      setIsLoggedIn(false);
      setActiveScreen('Login');
      setUserRole(null);
      setHistory([]);
    } else {
      setHistory((prev) => [...prev, activeScreen]); // push current
      setActiveScreen(screen);
    }
    setSidebarOpen(false); // close sidebar on mobile after navigation
  };

  const handleBack = () => {
    setHistory((prev) => {
      if (prev.length === 0) return prev;
      const newHistory = [...prev];
      const lastScreen = newHistory.pop()!;
      setActiveScreen(lastScreen);
      return newHistory;
    });
  };

  // called after login
  const handleLogin = (role: 'employee' | 'hr_executive') => {
    setUserRole(role);
    setIsLoggedIn(true);
    setActiveScreen(role === 'employee' ? 'Dashboard' : 'HR Executive Dashboard');
    setHistory([]);
  };

  if (!isLoggedIn || !userRole) {
    return <Login onLogin={handleLogin} />;
  }

  const renderActiveScreen = () => {
    switch (activeScreen) {
      case 'Dashboard':
        return <Dashboard />;
      case 'HR Executive Dashboard':
        return <HRExecutiveDashboard />;
      case 'Employees':
        return <Employees />;
      case 'Recruitment':
        return <Recruitment />;
      case 'Performance Management':
        return <Performance />;
      case 'Training & Development':
        return <Training />;
      case 'Rewards & Recognition':
        return <Rewards />;
      case 'Leave Request':
        return <LeaveRequest />;
      case 'Payslip & Benefits':
        return <PayslipBenefits />;
      case 'Announcement':
        return <Announcement />;
      case 'Profile/Settings':
        return <ProfileSettings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex">
        <Sidebar
          activeScreen={activeScreen}
          onNavigate={handleNavigation}
          userRole={userRole}
        />
      </div>

      {/* Mobile Sidebar Drawer */}
      {sidebarOpen && (
  <div className="fixed inset-0 z-40 flex md:hidden">
    <div className="fixed inset-0 bg-black opacity-50" onClick={() => setSidebarOpen(false)} />
    <div className="relative flex w-64 flex-col bg-gray-800 text-white 
                    transform transition-transform duration-300 ease-in-out 
                    -translate-x-full animate-slide-in-left"
         style={{ transform: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)' }}>
      <Sidebar activeScreen={activeScreen} onNavigate={handleNavigation} userRole={userRole} />
    </div>
  </div>
)}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header
          activeScreen={activeScreen}
          userRole={userRole}
          setUserRole={setUserRole}
          onBack={handleBack}
          canGoBack={history.length > 0}
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} // 👈 pass to Header
        />
        <main className="flex-1 p-4 sm:p-6 overflow-auto">
          {renderActiveScreen()}
        </main>
      </div>
    </div>
  );
}

export default App;
