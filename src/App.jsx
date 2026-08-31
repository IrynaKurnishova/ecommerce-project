import { Routes, Route } from "react-router";
import { HomePage } from "./pages/home/HomePage.jsx";
import {CheckoutPage} from "./pages/checkout/CheckoutPage.jsx";
import './App.css'
import {OrdersPage} from "./pages/orders/OrdersPage.jsx";
import {TrackingPage} from "./pages/TrackingPage.jsx";
import {NotFoundPage} from "./pages/NotFoundPage.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchAppData = async () => {
            const response = await axios.get('/api/cart-items?expand=product')
            setCart(response.data);
        };

        fetchAppData();
    }, [])

  return (
      <Routes>
          <Route index element={<HomePage  cart={cart} />} />
          <Route path="checkout" element={<CheckoutPage cart={cart} />} />
          <Route path="orders" element={<OrdersPage cart={cart} />} />
          <Route path="tracking" element={<TrackingPage />} />
          <Route path="*" element={<NotFoundPage />} />
      </Routes>
  )
}

export default App
