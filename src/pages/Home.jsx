import React, { useState } from 'react';
import { useContext } from 'react';
import MenuItem from '../components/MenuItem';
import Cart from '../components/Cart';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import Frontpage from '../components/Frontpage';
import { KeywordContext } from '../components/KeywordContext';



export default function Home() {
  const { keyword } = useContext(KeywordContext);
  const [cart, setCart] = useState([]);

  // const sampleMenu = [


  //   { name: "Veg Sandwich", description: "Toasted sandwich with veggies", price: 40, category: "Snacks", image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  //   { name: "Maggie", description: "Hot & spicy noodles", price: 30, category: "Snacks", image: "https://images.unsplash.com/photo-1722853440598-75e66ace0a13?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  //   { name: "French Fries", description: "Golden fried potato sticks", price: 30, category: "Snacks", image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },

  //   { name: "Pasta in White Sauce", description: "Creamy white sauce pasta", price: 60, category: "Main Course", image: "https://images.unsplash.com/photo-1724116382285-f4fcbe27f6a1?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  //   { name: "Cheese Garlic Bread", description: "Crispy bread with cheese", price: 35, category: "Main Course", image: "https://images.unsplash.com/photo-1676976198051-47f719bd687e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },

  //   { name: "Cold Coffee", description: "Chilled creamy coffee", price: 50, category: "Beverages", image: "https://images.unsplash.com/photo-1625242662341-5e92c5101338?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  //   { name: "Lemon Iced Tea", description: "Lemon-flavored chilled tea", price: 25, category: "Beverages", image: "https://images.unsplash.com/photo-1583571560278-e6799a3b98da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },

  //   { name: "Choco Lava Cake", description: "Warm chocolate cake", price: 45, category: "Desserts", image: "https://images.unsplash.com/photo-1581357618913-4f0b7ccf5909?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3" },
  // ];

  const sampleMenu = [
  // Snacks
  { 
    name: "Veg Sandwich", 
    description: "Toasted sandwich with veggies", 
    price: 40, 
    category: "Snacks", 
    type: "veg",
    image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },
  { 
    name: "Chicken Sandwich", 
    description: "Toasted sandwich with grilled chicken", 
    price: 55, 
    category: "Snacks", 
    type: "non-veg",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },
  { 
    name: "Maggie", 
    description: "Hot & spicy noodles", 
    price: 30, 
    category: "Snacks", 
    type: "veg",
    image: "https://images.unsplash.com/photo-1722853440598-75e66ace0a13?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },
  { 
    name: "French Fries", 
    description: "Golden fried potato sticks", 
    price: 30, 
    category: "Snacks", 
    type: "veg",
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },

  // Main Course
  { 
    name: "Pasta in White Sauce", 
    description: "Creamy white sauce pasta", 
    price: 60, 
    category: "Main Course", 
    type: "veg",
    image: "https://images.unsplash.com/photo-1724116382285-f4fcbe27f6a1?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },
  { 
    name: "Chicken Pasta", 
    description: "Pasta with grilled chicken pieces", 
    price: 75, 
    category: "Main Course", 
    type: "non-veg",
    image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },
  { 
    name: "Cheese Garlic Bread", 
    description: "Crispy bread with cheese", 
    price: 35, 
    category: "Main Course", 
    type: "veg",
    image: "https://images.unsplash.com/photo-1676976198051-47f719bd687e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },

  // Beverages
  { 
    name: "Cold Coffee", 
    description: "Chilled creamy coffee", 
    price: 50, 
    category: "Beverages", 
    type: "veg",
    image: "https://images.unsplash.com/photo-1625242662341-5e92c5101338?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },
  { 
    name: "Lemon Iced Tea", 
    description: "Lemon-flavored chilled tea", 
    price: 25, 
    category: "Beverages", 
    type: "veg",
    image: "https://images.unsplash.com/photo-1583571560278-e6799a3b98da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },

  // Desserts
  { 
    name: "Choco Lava Cake", 
    description: "Warm chocolate cake", 
    price: 45, 
    category: "Desserts", 
    type: "veg",
    image: "https://images.unsplash.com/photo-1581357618913-4f0b7ccf5909?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },
  { 
    name: "Egg Pudding", 
    description: "Creamy egg-based dessert", 
    price: 40, 
    category: "Desserts", 
    type: "non-veg",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  }
];
  const filteredMenu = keyword.term
    ? sampleMenu.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(keyword.term.toLowerCase());
      const matchesType = keyword.type === 'all' || item.type === keyword.type;
      return matchesSearch && matchesType;

    })
    :  keyword.type !== 'all'
    ? sampleMenu.filter(item => item.type === keyword.type)
    : sampleMenu;

    
  const sortedMenu = [...filteredMenu].sort((a, b) => {
    if (keyword.price === 'low') return a.price - b.price;
    if (keyword.price === 'high') return b.price - a.price;
    return 0; // no sorting
  });

  const addToCart = item => {
    const existing = cart.find(i => i.name === item.name);
    if (existing) {
      setCart(cart.map(i => i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  {
    filteredMenu.length === 0 && keyword && (
      <p className="text-center text-gray-500">No items found matching "{typeof keyword === 'object' ? keyword.value : keyword}"</p>
    )
  }

const groupedMenu = sortedMenu.reduce((groups, item) => {
  if (!groups[item.category]) groups[item.category] = [];
  groups[item.category].push(item);
  return groups;
}, {});

  const updateQuantity = (item, qty) => {
    if (qty <= 0) {
      removeItem(item);
    } else {
      setCart(cart.map(i => i.name === item.name ? { ...i, quantity: qty } : i));
    }
  };

  const removeItem = item => setCart(cart.filter(i => i.name !== item.name));

  const placeOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const newOrder = {
      items: cart,
      total,
      status: "Preparing",
      placedAt: new Date().toISOString()
    };

    try {
      const existing = JSON.parse(localStorage.getItem('orders')) || [];
      localStorage.setItem('orders', JSON.stringify([newOrder, ...existing]));
      setCart([]);
      alert("Order placed successfully!");
    } catch (error) {
      console.error("Failed to save order:", error);
      alert("An error occurred while placing your order.");
    }
  };

  return (
    <>
      <Frontpage />

      <div className="p-4">
        <h1 className="text-2xl text-center w-full font-bold my-10">
          {keyword.term ? `Search Results for "${keyword.term}"` : "Today's Menu"}
        </h1>
        <hr className="mb-7" />

        {Object.entries(groupedMenu).map(([category, items]) => (
          <div key={category} className="mb-10">
            <h2 className="text-xl font-semibold mb-4 border-b pb-1">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {items.map((item, index) => (
                <MenuItem key={index} item={item} addToCart={addToCart} />
              ))}
            </div>
          </div>
        ))}

        {sortedMenu.length === 0 && keyword.term && (
          <p className="text-center text-gray-500">No items found matching "{keyword.term}"</p>
        )}

        {cart.length > 0 && (
          <Cart
            cart={cart}
            updateQuantity={updateQuantity}
            removeItem={removeItem}
            placeOrder={placeOrder}
          />
        )}
      </div>
    </>
  );
}