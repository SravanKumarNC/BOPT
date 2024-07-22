import React from "react";

const TableData = ({ data }) => {
  return (
    <tr className="hover:bg-opacity-10 bg-gray-100">
      <td className="text-center  py-4 whitespace-nowrap">
        <div className="text-sm font-semibold">{data.sno}</div>
      </td>
      <td className="text-center  py-4 whitespace-nowrap">
        <div className="text-sm font-semibold uppercase">{data.id}</div>
      </td>
      <td className="text-center  py-4 whitespace-nowrap">
        <div className="text-sm font-semibold uppercase">{data.status}</div>
      </td>
      <td className="text-center  py-4 whitespace-nowrap">
        <div className="text-sm font-semibold uppercase">{data.timestamp}</div>
      </td>
    </tr>
  );
};

export default TableData;
