import React, { useState } from 'react';

const ResponseFilter = ({ apiResponse }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = ['Alphabets', 'Numbers', 'Highest Lowercase Alphabet'];

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedOptions(
      selectedOptions.includes(value)
        ? selectedOptions.filter((option) => option !== value)
        : [...selectedOptions, value]
    );
  };

  const filteredResponse = () => {
    const filteredData = {};
    if (selectedOptions.includes('Alphabets')) {
      filteredData.alphabets = apiResponse.alphabets;
    }
    if (selectedOptions.includes('Numbers')) {
      filteredData.numbers = apiResponse.numbers;
    }
    if (selectedOptions.includes('Highest Lowercase Alphabet')) {
      filteredData.highestLowercaseAlphabet = apiResponse.highest_lowercase_alphabet;
    }
    return filteredData;
  };

  return (
    <div>
      <div>
        {options.map((option) => (
          <label key={option}>
            <input
              type="checkbox"
              value={option}
              checked={selectedOptions.includes(option)}
              onChange={handleChange}
            />
            {option}
          </label>
        ))}
      </div>
      <div>
        <h3>Filtered Response</h3>
        <pre>{JSON.stringify(filteredResponse(), null, 2)}</pre>
      </div>
    </div>
  );
};

export default ResponseFilter;
