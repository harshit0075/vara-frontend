import React, { useState } from 'react';
import CsvUploader from './Components/CsvUploader';
import DataTable from './Components/DataTable';



const App = () => {
  const [tableData, setTableData] = useState([]);

  const handleUpload = (data) => {
    setTableData(data);
  };

  return (
    <div className="App p-4">
      <h1 className="text-2xl font-bold mb-4">CSV Table Uploader</h1>
      <CsvUploader onUpload={handleUpload} />
      {tableData.length > 0 && <DataTable data={tableData} />}
    </div>
  );
};

export default App;
