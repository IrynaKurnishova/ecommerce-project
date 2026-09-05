import {OrderProductGrid} from "./OrderProductGrid.jsx";

export function OrderDetails({order, loadCart}) {
    return (
        <div className="order-details-grid">
            {order.products.map((orderProduct) => {
                return (
                    <OrderProductGrid
                        key={orderProduct.productId}
                        orderProduct={orderProduct}
                        order={order}
                        loadCart={loadCart}
                    />
                )
            })}
        </div>

    )
}
