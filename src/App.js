import React, { useState } from 'react';
import JsonInputForm from './components/JsonInputForm';

import ResponseFilter from './components/ResponseFilter';

const App = () => {
  const [apiResponse, setApiResponse] = useState(null);

  const handleApiResponse = (response) => {
    setApiResponse(response);
  };

  return (
    <div>
      <h1>JSON Processor</h1>
      <JsonInputForm onApiResponse={handleApiResponse} />
      {apiResponse && <ResponseFilter apiResponse={apiResponse} />}
    </div>
  );
};

export default App;
