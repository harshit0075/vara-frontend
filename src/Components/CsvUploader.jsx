import React, { useState } from 'react';
import Papa from 'papaparse';

const CsvUploader = ({ onUpload }) => {
  const [error, setError] = useState('');

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (file && file.type === 'text/csv') {
      Papa.parse(file, {
        complete: (result) => {
          onUpload(result.data);
          setError('');
        },
        header: true,
        skipEmptyLines: true,
      });
    } else {
      setError('Please upload a valid CSV file.');
    }
  };

  return (
    <div className="p-4">
      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        className="mb-2"
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default CsvUploader;
