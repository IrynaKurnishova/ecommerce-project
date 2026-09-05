import './HomePage.css';
import {useEffect, useState} from "react";
import axios from 'axios';
import {Header} from "../../components/Header.jsx";
import {ProductsGrid} from "./ProductsGrid.jsx";
import {useSearchParams} from "react-router";

export function HomePage ({cart, loadCart}) {
    const [products, setProducts] = useState([]);
    const [searchParams] = useSearchParams();
    const search = searchParams.get('search');

    useEffect( () => {
        const getHomeData = async () => {
            let url = '/api/products';

            if (search) {
                url = `/api/products?search=${search}`;
            }
            const response = await axios.get(url);
            setProducts(response.data);
        };

        getHomeData();
    }, [search])

    return(
        <>
            <link rel="icon" type="image/svg+xml" href="/home-favicon.png" />

            <Header  cart={cart} />

            <div className="home-page">
                <ProductsGrid products={products} loadCart={loadCart}/>
            </div>
        </>
    )
}
