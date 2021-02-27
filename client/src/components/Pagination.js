import React from "react";

const Pagination = ({ productsPerPage, totalProducts, pagination }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center">
      <div className="flex rounded-md m-8">
        {pageNumbers.map((number) => (
          <button
            onClick={() => pagination(number)}
            key={number}
            className="py-2 px-4 leading-tight bg-white border-2 border-gray-200 text-blue-700 ml-0 rounded-l hover:bg-yellow-200 hover:text-gray-600"
          >
            <span>{number}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
