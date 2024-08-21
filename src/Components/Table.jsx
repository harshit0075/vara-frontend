import React from 'react';

const Table = ({ data, selectedRows, selectedColumns, onRowSelect, onColumnSelect }) => {
  return (
    <table className="min-w-full table-auto border-collapse border border-gray-400">
      <thead>
        <tr>
          {Object.keys(data[0]).map((header, index) => (
            <th
              key={index}
              onClick={() => onColumnSelect(index)}
              className={`px-4 py-2 border ${
                selectedColumns.includes(index) ? 'bg-blue-200' : ''
              } cursor-pointer`}
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className={`${
              selectedRows.includes(rowIndex) ? 'bg-blue-100' : ''
            }`}
          >
            {Object.values(row).map((value, colIndex) => (
              <td key={colIndex} className="px-4 py-2 border">
                <input
                  type="checkbox"
                  checked={selectedRows.includes(rowIndex)}
                  onChange={() => onRowSelect(rowIndex)}
                />
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
