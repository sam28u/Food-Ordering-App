// import { useContext, useState } from 'react';
// import { KeywordContext } from './KeywordContext';

// const Search = () => {
//     const { setKeyword } = useContext(KeywordContext);
//     const [searchTerm, setSearchTerm] = useState('');

//     const handleChange = (e) => {
//         const value = e.target.value;
//         setSearchTerm(value);
//         if (value.trim() === '') {
//             setKeyword('');
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setKeyword(searchTerm.trim());
//     };

//     return (
//         <div className="w-3/4 md:w-full px-4 sm:px-6 md:px-8 lg:px-10 max-w-3xl mx-auto">
//             <form
//                 onSubmit={handleSubmit}
//                 className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 bg-zinc-100 bg-opacity-25 border border-gray-400 rounded-md p-2"
//             >
//                 <input
//                     type="text"
//                     name="text"
//                     placeholder="Search dishes, drinks, or snacks…"
//                     value={searchTerm}
//                     onChange={handleChange}
//                     className="flex-1 rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-black"
//                 />
//                 <button
//                     type="submit"
//                     className="bg-black text-white font-semibold px-5 py-2 rounded-md hover:bg-gray-800 transition"
//                 >
//                     Search
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Search;


import { useContext, useState } from 'react';
import { KeywordContext } from './KeywordContext';

const Search = () => {
  const { setKeyword } = useContext(KeywordContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [priceSort, setPriceSort] = useState('none');

  const handleSubmit = (e) => {
    e.preventDefault();
    setKeyword({
      term: searchTerm.trim(),
      type: typeFilter,
      price: priceSort
    });
  };

  return (
    <div className="w-3/4 md:w-full px-4 sm:px-6 md:px-8 lg:px-10 max-w-3xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 bg-zinc-100 bg-opacity-25 border border-gray-400 rounded-md p-3"
      >
        <input
          type="text"
          name="text"
          placeholder="Search dishes, drinks, or snacks…"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-black text-sm"
        />

        {/* Veg/Non-Veg Filter */}
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none"
        >
          <option value="all">All</option>
          <option value="veg">Veg</option>
          <option value="non-veg">Non-Veg</option>
        </select>

        {/* Price Filter */}
        <select
          value={priceSort}
          onChange={(e) => setPriceSort(e.target.value)}
          className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none"
        >
          <option value="none">Sort by Price</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>

        <button
          type="submit"
          className="bg-black text-white font-semibold px-5 py-2 rounded-md hover:bg-gray-800 transition text-sm"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
