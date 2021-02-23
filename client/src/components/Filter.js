import React from "react";

const Filter = (props) => {
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-2">
        {/* <div>
          <h2 className="text-2xl font-semibold leading-tight">Store</h2>
        </div> */}
        <div className="my-2 flex justify-center sm:flex-row flex-col">
          <div className="flex flex-row mb-1 sm:mb-0 ">
            <div className="relative">
              <select 
              value={props.sort} onChange={props.sortProducts}
              style={{background:`#fee600`}}
              className="h-full border-none block appearance-none w-full text-gray-600 py-2 px-4 pr-8">
                <option value="price">Precio</option>
                <option value="lowest">El precio más bajo</option>
                <option value="highest">El precio más alto</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <div className="relative">
              <select 
              value={props.condition} onChange={props.filterProducts}
              style={{background:`#fee600`}}
              className="h-full border-none block appearance-none w-full text-gray-600 py-2 px-4 pr-8 ">
                <option>Condicion</option>
                <option value="Nuevo">Nuevo</option>
                <option value="Usado">Usado</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <div className="relative">
                <div 
                className="appearance-none h-full block appearance-none w-full text-gray-600 py-2 px-4 pr-8 leading-tight focus:outline-none ">
                  {/* <div> <b>{props.input}</b></div> */}
                  <div>{props.count} Resultados </div>
                </div>            
              </div>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Filter;
