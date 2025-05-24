import React from 'react';

export default function MenuItem({ item, addToCart }) {
  return (
    <div className="rounded p-4 shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1)] group hover:bg-zinc-300 trasition duration-300">
      <div className='overflow-hidden rounded-md'>
        <img src={item.image} alt={item.name} className="w-full h-64 object-cover rounded transform transition duration-300 group-hover:scale-120" />
      </div>
      <h2 className="text-lg font-bold mt-2">{item.name}</h2>
      <p>{item.description}</p>
      <p className="text-green-600 font-semibold">₹{item.price}</p>
      <button
        onClick={() => addToCart(item)}
        className="mt-2 bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}