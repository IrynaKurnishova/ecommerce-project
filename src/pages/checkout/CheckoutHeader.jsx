import './CheckoutHeader.css';
import {Link} from "react-router";

export function CheckoutHeader() {
    return (
        <div className="checkout-header">
            <div className="header-content">
                <div className="checkout-header-left-section">
                    <Link to="/public">
                        <img className="logo" src="../public/images/logo.png"/>
                        <img className="mobile-logo" src="../public/images/mobile-logo.png"/>
                    </Link>
                </div>

                <div className="checkout-header-middle-section">
                    Checkout (<Link className="return-to-home-link"
                                 to="/public">3 items</Link>)
                </div>

                <div className="checkout-header-right-section">
                    <img src="../public/images/icons/checkout-lock-icon.png"/>
                </div>
            </div>
        </div>
    )
}
