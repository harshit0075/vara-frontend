import React from 'react';

const Pagination = ({ handleNextPage, handlePreviousPage }) => {
  return (
    <div className="flex justify-between mt-4">
      <button onClick={handlePreviousPage} className="bg-gray-300 px-4 py-2">
        Previous
      </button>
      <button onClick={handleNextPage} className="bg-gray-300 px-4 py-2">
        Next
      </button>
    </div>
  );
};

export default Pagination;
