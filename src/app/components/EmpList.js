'use client';
import AddEmpForm from './AddEmpForm';
import React, { useState, useEffect } from 'react';
import axios from './axiosInstance';
import Emp from './Emp';
import { toast } from "react-toastify";

function EmpList() {
 
  const [employee, setemployee] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/emps");
      setemployee(response.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSuccess = () => {
    fetchData();
    setShowForm(false);
    setSelectedEmployee(null);
  };

  const deletemp = async (e, id) => {
    e.preventDefault();
    const confirm = window.confirm("Are you sure you want to delete this employee?");
    if (!confirm) return;
    try {
      await axios.delete(`/emp/${id}`);
      setemployee(employee.filter(emp => emp.id !== id));
      fetchData();
      toast.success("Employee Deleted Successfully");
    } catch (error) {
    }
  };

  const editemp = (e, emp) => {
    e.preventDefault();
    setSelectedEmployee(emp);
    setShowForm(true);
  };

  const filteredEmployees = employee.filter((emp) =>
    (`${emp.firstName} ${emp.lastName} ${emp.location} ${emp.emp_id}`.toLowerCase().includes(search.toLowerCase()))
  );




  return (
    <div className='container mx-auto my-8'>
      <div className='flex justify-between items-center h-12'>
        <button
          onClick={() => {
            setSelectedEmployee(null);
            setShowForm(true);
          }}
          className='rounded bg-slate-600 text-white px-6 py-1.5 mb-8 mm-8 text-sm font-medium hover:bg-green-500 cursor-pointer'
        >
          Create Employee
        </button>

        <input
          type="text"
          placeholder="Search"
          className="w-full max-w-[150px] h-[30px] px-3 py-1.5 rounded-[12px] border-[1.5px] border-gray-300 outline-none transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)]
           shadow-[0px_0px_20px_-18px_rgba(0,0,0,0.3)] hover:border-[2px] hover:shadow-[0px_0px_20px_-17px_rgba(0,0,0,0.3)]
            active:scale-[0.95] focus:border-[2px] focus:border-gray-500 mb-8 ml-4 text-sm font-medium"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {showForm && (
        <AddEmpForm
          onSuccess={handleSuccess}
          onClose={() => setShowForm(false)}
          initialData={selectedEmployee}
        />
      )}

      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-2 px-4">EMP Id</th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-2 px-4">First Name</th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-2 px-4">Last Name</th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-2 px-4">Email Id</th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-2 px-4">Location</th>
              <th className="text-right font-medium text-gray-500 uppercase tracking-wide py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {loading ? (
              <tr>
                <td colSpan="6" className="text-center py-4">Loading...</td>
              </tr>
            ) : (
              filteredEmployees.map((emp) => (
                <Emp emp={emp} key={emp.id} deletemp={deletemp} editemp={editemp} />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmpList;
