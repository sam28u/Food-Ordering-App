import React from 'react';
import { Minus, Plus, Trash } from 'lucide-react'; // Optional: icons for modern look

export default function Cart({ cart, updateQuantity, removeItem, placeOrder }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-200 shadow-xl rounded-xl w-80 max-h-[80vh] overflow-y-auto p-5 z-50">
      <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">🛒 Your Cart</h3>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">No items in cart</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div key={index} className="border-b pb-2">
              <div className="flex justify-between text-gray-800 font-medium">
                <span>{item.name}</span>
                <span>₹{item.price * item.quantity}</span>
              </div>
              <div className="flex items-center justify-between mt-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item, item.quantity - 1)}
                    className="w-7 h-7 flex items-center justify-center rounded bg-gray-100 hover:bg-gray-200"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="mx-1">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item, item.quantity + 1)}
                    className="w-7 h-7 flex items-center justify-center rounded bg-gray-100 hover:bg-gray-200"
                  >
                    <Plus size={14} />
                  </button>
                </div>
                <button
                  onClick={() => removeItem(item)}
                  className="text-red-500 hover:text-red-600"
                  title="Remove"
                >
                  <Trash size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <>
          <div className="mt-4 flex justify-between text-lg font-semibold text-gray-700">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button
            onClick={placeOrder}
            className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium transition"
          >
            Place Order
          </button>
        </>
      )}
    </div>
  );
}
