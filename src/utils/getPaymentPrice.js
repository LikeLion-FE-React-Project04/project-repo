export function getPaymentPrice(product) {
  if (product.saleRatio) {
    return product.salePrice;
  } else {
    return product.price;
  }
}
