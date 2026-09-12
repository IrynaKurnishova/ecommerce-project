import {it, expect, describe, vi} from 'vitest';
import {render, screen, within} from "@testing-library/react";
import {MemoryRouter, useLocation} from "react-router";
import {PaymentSummary} from "./PaymentSummary.jsx";
import userEvent from "@testing-library/user-event";
import axios from "axios";

vi.mock('axios');

function Location() {
    const location = useLocation();
    return <div data-testid="url-path">{location.pathname}</div>;
}

describe('PaymentSummary component', () => {
    const paymentSummary = {
        totalItems: 5,
        productCostCents: 6455,
        shippingCostCents: 499,
        totalCostBeforeTaxCents: 6954,
        taxCents: 695,
        totalCostCents: 7649
    };

    it('displays the payment summary correctly', () => {
        const loadCart = vi.fn();

        render(
            <MemoryRouter>
                <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
            </MemoryRouter>
        );

        expect(
            within(screen.getByTestId('payment-summary-items')).getByText('$64.55')
        ).toBeInTheDocument();

        expect(
            within(screen.getByTestId('payment-summary-shipping')).getByText('$4.99')
        ).toBeInTheDocument();

        expect(
            within(screen.getByTestId('payment-summary-subtotal')).getByText('$69.54')
        ).toBeInTheDocument();

        expect(
            within(screen.getByTestId('payment-summary-tax')).getByText('$6.95')
        ).toBeInTheDocument();

        expect(
            within(screen.getByTestId('payment-summary-total')).getByText('$76.49')
        ).toBeInTheDocument();

        expect(screen.getByTestId('payment-summary-items')).toHaveTextContent('$64.55');
        expect(screen.getByTestId('payment-summary-shipping')).toHaveTextContent('$4.99');
        expect(screen.getByTestId('payment-summary-subtotal')).toHaveTextContent('$69.54');
        expect(screen.getByTestId('payment-summary-tax')).toHaveTextContent('$6.95');
        expect(screen.getByTestId('payment-summary-total')).toHaveTextContent('$76.49');
    })

    it('places the order when clicking the Place Order button', async () => {
        const loadCart = vi.fn();
        const user = userEvent.setup();

        render(
            <MemoryRouter>
                <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
                <Location />
            </MemoryRouter>
        );

        const placeOrderButton = screen.getByText('Place your order');
        await user.click(placeOrderButton);

        expect(axios.post).toHaveBeenCalledWith('/api/orders');
        expect(loadCart).toHaveBeenCalled();
        expect(screen.getByTestId('url-path')).toHaveTextContent('/orders');
    })
})
