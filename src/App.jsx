import { Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage.jsx";
import {CheckoutPage} from "./pages/checkout/CheckoutPage.jsx";
import './App.css'
import {OrdersPage} from "./pages/OrdersPage.jsx";

function App() {
  return (
      <Routes>
          <Route index element={<HomePage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="orders" element={<OrdersPage />} />
      </Routes>
  )
}

export default App
