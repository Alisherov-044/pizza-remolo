export const getAbsolutePrice = (price, discount) => {
  return discount ? price - (price / 100) * discount : price;
};
