import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid';

const Emp = ({ emp, deletemp, editemp }) => {
  return (
    <tr>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{emp.emp_id}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{emp.firstName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{emp.lastName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{emp.emailId}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{emp.location}</div>
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap flex items-center justify-end gap-2">
        <a
          onClick={(e) => editemp(e, emp)}
          href="#"
          className="text-indigo-600 hover:text-cyan-400 hover:cursor-pointer text-sm px-2 py-1"
        >
          Edit
        </a>
        <a
          onClick={(e) => deletemp(e, emp.id)}
          href="#"
          className="p-1 bg-[rgba(100,77,237,0.08)] rounded-full cursor-pointer"
        >
          <TrashIcon className="w-4 h-4 text-indigo-600" />
        </a>
      </td>
    </tr>
  );
};

export default Emp;
