import { getAbsolutePrice } from "./getAbsolutePrice";

export const getTotalPrice = (products) => {
  return products
    .map((product) =>
      product.discount
        ? getAbsolutePrice(product.price, product.discount) * product.quantity
        : product.price * product.quantity
    )
    .reduce((x, y) => x + y, 0);
};
