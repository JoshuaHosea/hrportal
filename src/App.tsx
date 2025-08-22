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
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userRole, setUserRole] = useState('employee'); // 'employee' or 'hr_executive'

  const handleNavigation = (screen: string) => {
    if (screen === 'Log Out') {
      setIsLoggedIn(false);
      setActiveScreen('Login');
    } else {
      setActiveScreen(screen);
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setActiveScreen('Dashboard');
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  const renderActiveScreen = () => {
    switch (activeScreen) {
      case 'Dashboard':
        return userRole === 'hr_executive' ? <HRExecutiveDashboard /> : <Dashboard />;
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
      <Sidebar activeScreen={activeScreen} onNavigate={handleNavigation} userRole={userRole} />
      <div className="flex-1 flex flex-col">
        <Header activeScreen={activeScreen} userRole={userRole} setUserRole={setUserRole} />
        <main className="flex-1 p-6 overflow-auto">
          {renderActiveScreen()}
        </main>
      </div>
    </div>
  );
}

export default App;