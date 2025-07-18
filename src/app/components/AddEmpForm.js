import { useEffect, useState } from "react";
import axios from './axiosInstance'; 
import { toast } from "react-toastify";
const AddEmpForm = ({ onSuccess, onClose, initialData }) => {
  const isEdit = !!initialData;

  const [employee, setEmployee] = useState({
    id: null,
    emp_id: '',
    firstName: '',
    lastName: '',
    emailId: '',
    location: '',
  });

  useEffect(() => {
    if (isEdit && initialData) {
      setEmployee({
        id: initialData.id || null,
        emp_id: initialData.emp_id || '',
        firstName: initialData.firstName || '',
        lastName: initialData.lastName || '',
        emailId: initialData.emailId || '',
        location: initialData.location || '',
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEdit) {
        await axios.put(`/emp/${employee.id}`, employee);
        toast.success("Employee details updated successfully");
      } else {
        await axios.post("/emp", employee);
        toast.success("Employee created successfully");
      }
      onSuccess();
      onClose();
    } catch (error) {
    }
  };
  return (
    <div className="fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center">
      <div className="relative bg-white p-6 rounded shadow-lg w-full max-w-md">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl font-bold"
        >
          ×
        </button>
        <h2 className="text-xl font-semibold mb-4 text-center">
          {isEdit ? 'Edit Employee Details' : 'Add Employee Details'}
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="emp_id"
            placeholder="Employee ID"
            value={employee.emp_id}
            onChange={handleChange}
            className="border p-2 mb-2 w-full rounded"
            required
          />
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={employee.firstName}
            onChange={handleChange}
            className="border p-2 mb-2 w-full rounded"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={employee.lastName}
            onChange={handleChange}
            className="border p-2 mb-2 w-full rounded"
            required
          />
          <input
            type="email"
            name="emailId"
            placeholder="Email ID"
            value={employee.emailId}
            onChange={handleChange}
            className="border p-2 mb-2 w-full rounded"
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={employee.location}
            onChange={handleChange}
            className="border p-2 mb-4 w-full rounded"
            required
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
          >
            {isEdit ? 'Update Employee' : 'Add Employee'}
          </button>
        </form>
      </div>
    </div>
  );
};
 
export default AddEmpForm;
 