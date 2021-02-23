//Un formulario controlado con un input de búsqueda, que dispare los requests a la 
// API (a nuestro BACK-END, no a Mercado Libre).

import React, { useState } from 'react';

const SearchBar = ({onSearch}) => {
    const [input, setInput] = useState("");

    return (
        
        <form 
        onSubmit={(e) => {
            e.preventDefault();
            onSearch(input);
            setInput("");
        }}
        className="relative mt-6 max-w-lg mx-auto">
                <input 
                className="w-full border-none shadow-xl p-2 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline" 
                placeholder="Buscar productos, marcas y más…"
                type="text"
                onChange={(e) => setInput(e.target.value)}
                value={input}
                />
                <span className="absolute border-l-2 inset-y-0 right-2 pl-3 flex items-center">
                    <svg className="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </span>
        </form>
        
    )
}
export default SearchBar;