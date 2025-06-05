export const currencyFormatter = (value, currency = "USD") => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: `${currency}`,
    }).format(value);
};
