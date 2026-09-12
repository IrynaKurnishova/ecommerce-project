export function formatMoney(amountCents) {
    const isNegative = amountCents < 0;
    const amount = Math.abs(amountCents / 100).toFixed(2);
    return `${isNegative ? '-' : ''}$${amount}`;
}
