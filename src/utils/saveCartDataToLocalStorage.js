export const saveCartDataToLocalStorage = (id, count) => {
  let cartItems = localStorage.getItem('cartItems');
  let cartItemIndex;

  if (!cartItems) {
    cartItems = [{ productId: id, quantity: count }];
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    return;
  } else {
    cartItems = JSON.parse(cartItems);
    cartItemIndex = cartItems.findIndex((item) => item.productId == id);
  }

  if (cartItemIndex == -1) {
    console.log(`못찾음 ${cartItemIndex}`);
    cartItems.push({ productId: id, quantity: count });
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    return;
  } else {
    const addCount = cartItems[cartItemIndex].quantity + count;

    cartItems[cartItemIndex].quantity = addCount;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    return;
  }
};
