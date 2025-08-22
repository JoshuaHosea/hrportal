import React, { useState } from 'react';
import {
  Edit,
  Lock,
  Shield,
  Briefcase,
  Calendar,
  User,
  FileText,
} from 'lucide-react';

const ProfileSettings: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('personal');

  const [formData, setFormData] = useState({
    name: 'Samrakshini Surantharani',
    email: 'sam.surantharani@hrportal.com',
    phone: '+60 12-345-6789',
    position: 'Senior Software Engineer',
    department: 'Information Technology',
    joinDate: '2022-03-15',
    employeeId: 'EMP001',
    employer: 'Acme Corp',
    address: 'Kuala Lumpur, Malaysia',
    status: 'Active',
  });

  const handleSave = () => {
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-2">Profile & Settings</h1>
        <p className="text-gray-500">
          Manage your personal information and account settings.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Summary */}
        <div className="bg-white shadow-sm rounded-xl p-6 border border-gray-200">
          <div className="flex flex-col items-center space-y-4">
            {/* Avatar */}
            <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-gray-700">
              {formData.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </div>

            {/* Info */}
            <div className="text-center space-y-2">
              <h3 className="text-xl font-semibold">{formData.name}</h3>
              <p className="text-gray-500">{formData.position}</p>
              <span className="px-3 py-1 rounded-full bg-green-500 text-white text-sm">
                {formData.status}
              </span>
            </div>

            <button className="w-full flex items-center justify-center border rounded-lg px-3 py-2 hover:bg-gray-50">
              <Edit className="h-4 w-4 mr-2" />
              Update Photo
            </button>
          </div>

          <hr className="my-6" />

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Briefcase className="h-4 w-4 text-gray-400" />
              <div className="text-sm">
                <div className="font-medium">{formData.department}</div>
                <div className="text-gray-500">Department</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Calendar className="h-4 w-4 text-gray-400" />
              <div className="text-sm">
                <div className="font-medium">{formData.joinDate}</div>
                <div className="text-gray-500">Join Date</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <User className="h-4 w-4 text-gray-400" />
              <div className="text-sm">
                <div className="font-medium">{formData.employeeId}</div>
                <div className="text-gray-500">Employee ID</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <User className="h-4 w-4 text-gray-400" />
              <div className="text-sm">
                <div className="font-medium">{formData.employer}</div>
                <div className="text-gray-500">Employer</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Tabs */}
          <div className="flex border-b mb-4">
            {['personal', 'account', 'documents', 'preferences'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 -mb-px font-medium border-b-2 ${
                  activeTab === tab
                    ? 'border-orange-500 text-orange-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Personal Info */}
          {activeTab === 'personal' && (
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Personal Information</h3>
                {!isEditing ? (
                  <button
                    className="border rounded-lg px-3 py-2 hover:bg-gray-50"
                    onClick={() => setIsEditing(true)}
                  >
                    <Edit className="h-4 w-4 mr-2 inline" />
                    Edit
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <button
                      className="border rounded-lg px-3 py-2 hover:bg-gray-50"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                    <button
                      className="bg-orange-500 text-white rounded-lg px-3 py-2"
                      onClick={handleSave}
                    >
                      Save Changes
                    </button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    disabled={!isEditing}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    disabled={!isEditing}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    disabled={!isEditing}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Job Title
                  </label>
                  <input
                    type="text"
                    value={formData.position}
                    onChange={(e) =>
                      setFormData({ ...formData, position: e.target.value })
                    }
                    disabled={!isEditing}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Address
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  disabled={!isEditing}
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>
            </div>
          )}

          {/* Account */}
          {activeTab === 'account' && (
            <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-6">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Shield className="h-5 w-5" /> Account Security
              </h3>

              {/* Password */}
              <div className="space-y-3">
                <h4 className="font-medium">Change Password</h4>
                <input
                  type="password"
                  placeholder="Current Password"
                  className="w-full border rounded-lg px-3 py-2"
                />
                <input
                  type="password"
                  placeholder="New Password"
                  className="w-full border rounded-lg px-3 py-2"
                />
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  className="w-full border rounded-lg px-3 py-2"
                />
                <button className="bg-orange-500 text-white rounded-lg px-3 py-2">
                  <Lock className="h-4 w-4 inline mr-2" />
                  Update Password
                </button>
              </div>

              <hr />

              {/* Login Activity */}
              <div>
                <h4 className="font-medium mb-2">Login Activity</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium">Current Session</div>
                      <div className="text-sm text-gray-500">
                        Chrome on Windows • Active now
                      </div>
                    </div>
                    <span className="px-3 py-1 border rounded-lg text-sm">
                      Current
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">Previous Login</div>
                      <div className="text-sm text-gray-500">
                        Mobile App • 2 hours ago
                      </div>
                    </div>
                    <button className="text-sm text-orange-600 hover:underline">
                      Revoke
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Documents */}
          {activeTab === 'documents' && (
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                <FileText className="h-5 w-5" /> Documents
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Employment Contract',
                  'Tax Documents',
                  'Benefits Enrollment',
                  'Performance Reviews',
                ].map((doc, idx) => (
                  <div
                    key={idx}
                    className="p-4 border rounded-lg space-y-2 hover:shadow-sm"
                  >
                    <div className="font-medium">{doc}</div>
                    <p className="text-sm text-gray-500">
                      Last updated recently
                    </p>
                    <button className="border rounded-lg px-3 py-1 text-sm hover:bg-gray-50">
                      View Document
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Preferences */}
          {activeTab === 'preferences' && (
            <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-6">
              <h3 className="text-lg font-semibold">Preferences</h3>

              {/* Notifications */}
              <div>
                <h4 className="font-medium mb-2">Notification Settings</h4>
                <div className="space-y-3">
                  {[
                    ['Email Notifications', 'Receive updates via email'],
                    ['Leave Reminders', 'Get notified about leave balances'],
                    ['Payslip Alerts', 'Notification when payslip is ready'],
                  ].map(([title, desc]) => (
                    <div
                      key={title}
                      className="flex items-center justify-between"
                    >
                      <div>
                        <div className="font-medium">{title}</div>
                        <div className="text-sm text-gray-500">{desc}</div>
                      </div>
                      <button className="border rounded-lg px-3 py-1 text-sm hover:bg-gray-50">
                        Configure
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <hr />

              {/* Display */}
              <div>
                <h4 className="font-medium mb-2">Display Settings</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Language</div>
                      <div className="text-sm text-gray-500">English (US)</div>
                    </div>
                    <button className="border rounded-lg px-3 py-1 text-sm hover:bg-gray-50">
                      Change
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Time Zone</div>
                      <div className="text-sm text-gray-500">
                        GMT+8 (Kuala Lumpur)
                      </div>
                    </div>
                    <button className="border rounded-lg px-3 py-1 text-sm hover:bg-gray-50">
                      Change
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
