import React, { useState } from "react";

const Category = ({ searchCategory, categories }) => {

  const [input, setInput] = useState("");
  const [showResults, setShowResults] = useState(false);

  const regex = / /gi;
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchCategory(input);
          setInput("")
        }}
      >
        <input
          type="submit"
          value="Categories"
          onClick={() => setShowResults(!showResults)}
        />
      </form>

      {showResults ? (
        <select>
          {categories.map((cat) => {
            return (
              <option
                
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
              </option>
            );
          })}
        </select>
      ) : null}
    </>
  );
}

export default Category;