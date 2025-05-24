// import React, { useEffect, useState } from 'react';

// export default function MyOrders() {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     try {
//       const raw = localStorage.getItem('orders');
//       const parsed = raw ? JSON.parse(raw) : [];
//       setOrders(Array.isArray(parsed) ? parsed : []);
//     } catch (err) {
//       console.error("Failed to load orders from localStorage:", err);
//       setOrders([]); // fallback to empty
//     }
//   }, []);

//   return (
//     <div className="min-h-[100vh] my-5 max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8 border-b pb-5">
//         My Orders
//       </h2>

//       {orders.length === 0 ? (
//         <p className="text-gray-600 text-center">You have no orders yet.</p>
//       ) : (
//         orders.map((order, i) => (
//           <div
//             key={i}
//             className="mb-8 p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
//           >
//             <h3 className="text-xl font-semibold mb-4 text-indigo-700">
//               Order #{i + 1}
//             </h3>

//             <div className="space-y-3">
//               {order.items.map((item, j) => (
//                 <div
//                   key={j}
//                   className="flex justify-between items-center text-gray-700"
//                 >
//                   <span className="font-medium">{item.name}</span>
//                   <span className="text-sm text-gray-500">x {item.quantity}</span>
//                   <span className="font-semibold">₹{item.price * item.quantity}</span>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-6 flex justify-between items-center border-t pt-4">
//               <p className="text-lg font-bold">Total: ₹{order.total}</p>
//               <p
//                 className={`font-semibold ${order.status === 'Delivered'
//                     ? 'text-green-600'
//                     : order.status === 'Pending'
//                       ? 'text-yellow-600'
//                       : 'text-red-600'
//                   }`}
//               >
//                 Status: {order.status}
//               </p>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }



import React, { useEffect, useState } from 'react';

const STATUS_FLOW = ['Preparing', 'Ready to Pickup', 'Delivering', 'Delivered'];

export default function MyOrders() {
  const [orders, setOrders] = useState([]);

  // Load orders from localStorage initially
  useEffect(() => {
    try {
      const raw = localStorage.getItem('orders');
      const parsed = raw ? JSON.parse(raw) : [];
      setOrders(Array.isArray(parsed) ? parsed : []);
    } catch (err) {
      console.error("Failed to load orders from localStorage:", err);
      setOrders([]);
    }
  }, []);

  // Update status of pending orders periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setOrders(prevOrders => {
        const updatedOrders = prevOrders.map(order => {
          const currentIndex = STATUS_FLOW.indexOf(order.status);
          if (currentIndex !== -1 && currentIndex < STATUS_FLOW.length - 1) {
            // Progress only if not yet 'Delivered'
            return {
              ...order,
              status: STATUS_FLOW[currentIndex + 1],
            };
          }
          return order; // leave 'Delivered' as is
        });

        // Save updated orders to localStorage
        localStorage.setItem('orders', JSON.stringify(updatedOrders));
        return updatedOrders;
      });
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="min-h-[100vh] my-5 max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8 border-b pb-5">
        My Orders
      </h2>

      {orders.length === 0 ? (
        <p className="text-gray-600 text-center">You have no orders yet.</p>
      ) : (
        orders.map((order, i) => (
          <div
            key={i}
            className="mb-8 p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-4 text-indigo-700">
              Order #{i + 1}
            </h3>

            <div className="space-y-3">
              {order.items.map((item, j) => (
                <div
                  key={j}
                  className="flex justify-between items-center text-gray-700"
                >
                  <span className="font-medium">{item.name}</span>
                  <span className="text-sm text-gray-500">x {item.quantity}</span>
                  <span className="font-semibold">₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-between items-center border-t pt-4">
              <p className="text-lg font-bold">Total: ₹{order.total}</p>
              <p
                className={`font-semibold ${
                  order.status === 'Delivered'
                    ? 'text-green-600'
                    : order.status === 'Pending'
                      ? 'text-yellow-600'
                      : order.status === 'Ready to Pickup'
                        ? 'text-blue-600'
                        : 'text-orange-600'
                }`}
              >
                Status: {order.status}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
