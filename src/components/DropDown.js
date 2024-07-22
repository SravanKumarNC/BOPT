import React from "react";

const DropDown = ({ title, data, selectedValue, onChange }) => {
  return (
    <div className="w-[25%]">
      <select
        className="w-full font-semibold rounded-md text-center px-4 py-3"
        value={selectedValue}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" selected disabled hidden className="font-bold">
          {title}
        </option>
        {data.map((data, index) => (
          <option key={index} value={data} className="option">
            {data}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
