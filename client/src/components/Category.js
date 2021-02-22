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
          className="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
          type="submit"
          value="Categories"
          onClick={() => setShowResults(!showResults)}
        >
          <span className="pr-1 font-semibold flex-1">Categories</span>
          <span>
            <svg
              class="fill-current h-4 w-4 transform group-hover:-rotate-180
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
        <ul className="bg-white border rounded-sm transform group-hover:scale-100 absolute 
        transition duration-150 ease-in-out origin-top min-w-32">
          {categories.map((cat) => {
            return (
              <li
                class="rounded-sm px-3 py-1 hover:bg-gray-100"
                key={cat.id}
                onClick={() =>
                  window.open(
                    `https://www.mercadolibre.com.ar/c/${cat.name
                      .replace(regex, "-")
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                      .replace(",", "")}`,
                    "_blank"
                  )
                }
                style={{ cursor: `pointer` }}
              >
                {cat.name}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

export default Category;