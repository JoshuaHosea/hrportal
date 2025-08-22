import React, { useState } from 'react';
import { Search, Filter, Eye } from 'lucide-react';
import Modal from './Modal';

const Employees: React.FC = () => {
  const [selectedEmployee, setSelectedEmployee] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const employees = [
    { id: 1, name: 'John Smith', position: 'Software Engineer', department: 'IT', email: 'john.smith@company.com', phone: '+60123456789' },
    { id: 2, name: 'Sarah Johnson', position: 'HR Manager', department: 'Human Resources', email: 'sarah.johnson@company.com', phone: '+60123456790' },
    { id: 3, name: 'Michael Chen', position: 'Product Manager', department: 'Product', email: 'michael.chen@company.com', phone: '+60123456791' },
    { id: 4, name: 'Emily Davis', position: 'UX Designer', department: 'Design', email: 'emily.davis@company.com', phone: '+60123456792' },
    { id: 5, name: 'David Wilson', position: 'DevOps Engineer', department: 'IT', email: 'david.wilson@company.com', phone: '+60123456793' },
  ];

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
        <div className="relative flex-1 max-w-md">
          <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search employees..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors">
          <Filter size={18} />
          <span>Filters</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-6 font-semibold text-gray-700">Name</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700">Position</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700">Department</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700">Email</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((employee) => (
                <tr 
                  key={employee.id} 
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => setSelectedEmployee(employee)}
                >
                  <td className="py-4 px-6 font-medium text-gray-900">{employee.name}</td>
                  <td className="py-4 px-6 text-gray-600">{employee.position}</td>
                  <td className="py-4 px-6 text-gray-600">{employee.department}</td>
                  <td className="py-4 px-6 text-gray-600">{employee.email}</td>
                  <td className="py-4 px-6">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedEmployee(employee);
                      }}
                      className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                    >
                      <Eye size={18} className="text-gray-600" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedEmployee && (
        <Modal
          isOpen={!!selectedEmployee}
          onClose={() => setSelectedEmployee(null)}
          title="Employee Profile"
        >
          <div className="space-y-4">
            <div className="text-center pb-4 border-b border-gray-200">
              <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-semibold text-gray-600">
                  {selectedEmployee.name.split(' ').map((n: string) => n[0]).join('')}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{selectedEmployee.name}</h3>
              <p className="text-gray-600">{selectedEmployee.position}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                <p className="text-gray-900">{selectedEmployee.department}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <p className="text-gray-900">{selectedEmployee.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <p className="text-gray-900">{selectedEmployee.phone}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Employee ID</label>
                <p className="text-gray-900">EMP{selectedEmployee.id.toString().padStart(3, '0')}</p>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Employees;