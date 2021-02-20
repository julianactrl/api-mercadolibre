import React, { useState } from "react";

export default function Category({ searchCategory, categories }) {

  const [input, setInput] = useState("");
  const [showResults, setShowResults] = useState(false);

  return (
    <>
      <form
        className="orderCat"
        onSubmit={(e) => {
          e.preventDefault();
          searchCategory(input);
          setInput("");
        }}
      >
        <input
          className="send"
          type="submit"
          value="Categories"
          onClick={() => setShowResults(!showResults)}
        />
      </form>

      {showResults ? (
        <div className="results">
          {categories.map((cat) => {
            return (
              <option
                className="list"
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
        </div>
      ) : null}
    </>
  );
}
