let DOLLAR = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function formatCurrency(number) {
  return DOLLAR.format(number);
}