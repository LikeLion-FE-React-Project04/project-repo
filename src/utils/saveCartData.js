import { cartDataState } from '@/store/cartModalState.js';
import { useRecoilState } from 'recoil';

export function saveCartData(id, count, cartData, setCartData) {
  let cartItems = [...cartData];
  let cartItemIndex;

  cartItemIndex = cartItems.findIndex((item) => item.productId == id);
  console.log('cartItemIndex', cartItemIndex);
  if (cartItemIndex == -1) {
    console.log(`못찾음 ${cartItemIndex}`);
    cartItems.push({ productId: id, quantity: count });
    setCartData(cartItems);

    return;
  } else {
    const addCount = cartItems[cartItemIndex].quantity + count;
    // console.log(typeof cartItems[cartItemIndex].quantity);

    cartItems[cartItemIndex] = {
      ...cartItems[cartItemIndex],
      quantity: addCount,
    };
    setCartData(cartItems);

    return;
  }
}
