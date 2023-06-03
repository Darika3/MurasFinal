// products quality in Cart
export function getCountProductsInCart() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  return cart ? cart.products.length : 0;
}
// cost oneProduct, кол-во * стоимость 1 го продукта
export const calcSubPrice = (product) => {
  return +product.count * product.item.price;
};
//  Calc cost totalPrice
export const calcTotalPrice = (products) => {
  return products.reduce((acc, curr) => {
    return (acc += curr.subPrice);
  }, 0);
};

export function getCountProductsInFavs() {
  const favorite = JSON.parse(localStorage.getItem("favs"));
  return favorite ? favorite.products.length : 0;
}
