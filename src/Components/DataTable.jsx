import React, { useState } from 'react';
import Table from './Table';
import Pagination from './Pagination';

const DataTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage] = useState(10); // Display 10 rows per page
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedColumns, setSelectedColumns] = useState([]);

  const currentTableData = data.slice(
    currentPage * rowsPerPage,
    (currentPage + 1) * rowsPerPage
  );

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % Math.ceil(data.length / rowsPerPage));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) =>
      prev === 0 ? Math.ceil(data.length / rowsPerPage) - 1 : prev - 1
    );
  };

  const handleRowSelect = (index) => {
    setSelectedRows((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const handleColumnSelect = (index) => {
    setSelectedColumns((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="p-4">
      <Table
        data={currentTableData}
        selectedRows={selectedRows}
        selectedColumns={selectedColumns}
        onRowSelect={handleRowSelect}
        onColumnSelect={handleColumnSelect}
      />
      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
      />
    </div>
  );
};

export default DataTable;
