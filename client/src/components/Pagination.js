import React from 'react';

const Pagination = ({ productsPerPage, totalProducts, pagination }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
      pageNumbers.push(i);
    }

    return(
        <div class="flex justify-center">
            <div class="flex rounded-md mt-8">
            {pageNumbers.map((number) => (
                <button
                 onClick={() => pagination(number)}
                 key={number}
                 class="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-blue-500 hover:text-white">
                    <span>{number}</span>
                </button>
                
                
            ))}
            </div>
        </div>
    )
}

export default Pagination;