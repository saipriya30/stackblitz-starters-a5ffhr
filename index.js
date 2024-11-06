import React from 'react';

const NumberPrinter = () => {
  const getNumberOrCompany = (num) => {
    if (num % 3 === 0 && num % 5 === 0) return 'amazon';
    if (num % 3 === 0) return 'google';
    if (num % 5 === 0) return 'facebook';
    return num;
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">1-100 Number Printer</h1>
      <div className="grid grid-cols-5 gap-2">
        {Array.from({ length: 100 }, (_, i) => i + 1).map((num) => (
          <div
            key={num}
            className={`p-2 text-center rounded ${
              typeof getNumberOrCompany(num) === 'string'
                ? 'bg-blue-100'
                : 'bg-gray-100'
            }`}
          >
            {getNumberOrCompany(num)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumberPrinter;
