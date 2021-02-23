import React, { useState } from "react";
import './Category.css'

const Category = ({ searchCategory, categories }) => {

  const [input, setInput] = useState("");
  const [showResults, setShowResults] = useState(false);

  const regex = / /gi;
  return (
    <div>
      <form
        className="group inline-block"
        onSubmit={(e) => {
          e.preventDefault();
          searchCategory(input);
          setInput("")
        }}
      >
        <button
          className="outline-none focus:outline-none border-none px-3 py-1 rounded-sm flex items-center min-w-32"
          type="submit"
          value="Categories"
          onClick={() => setShowResults(!showResults)}
        >
          <span className="pr-1 font-light text-gray-600 flex-1">Categorías</span>
          <span>
            <svg
              className="fill-current h-4 w-4 transform group-hover:-rotate-180
              transition duration-150 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </span>
        </button>
      </form>

      {showResults ? (
        <ul className="bg-gray-800 z-10 text-white border rounded-sm transform group-hover:scale-100 absolute 
        transition duration-150 ease-in-out origin-top min-w-32">
          {categories.map((c) => {
            return (
              <li
                className="rounded-sm px-3 py-1 hover:bg-gray-600"
                key={c.id}
                onClick={() =>
                  window.open(
                    `https://www.mercadolibre.com.ar/c/${c.name
                      .replace(regex, "-")
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                      .replace(",", "")}`,
                    "_blank"
                  )
                }
                style={{ cursor: `pointer` }}
              >
                {c.name}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

export default Category;