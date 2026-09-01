import './OrdersPage.css';
import {Header} from "../../components/Header.jsx";
import {Link} from "react-router";
import BuyAgain from "../../assets/images/icons/buy-again.png";
import axios from "axios";
import {useState, useEffect, Fragment} from "react";
import dayjs from "dayjs";
import {formatMoney} from "../../utils/money.js";
import {OrdersGrid} from "./OrdersGrid.jsx";

export function OrdersPage({ cart }) {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getOrderData = async () => {
            const response = await axios.get('/api/orders?expand=products');
            setOrders(response.data);
        }

        getOrderData();
    }, [])

    return(
        <>
            <link rel="icon" type="image/svg+xml" href="/orders-favicon.png"/>

            <title>Orders</title>

            <Header cart={cart} />

            <div className="orders-page">
                <div className="page-title">Your Orders</div>
                <OrdersGrid orders={orders}/>
            </div>
        </>
    )
}
