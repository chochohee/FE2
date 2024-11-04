import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // cart에 item을 추가하는 함수
  const addToCart = (product) => {
    setCart((prevCart) => {
      const exsisting = prevCart.find((item) => item.id === product.id);

      // 이미 동일한 상품이 장바구니에 있는 경우
      if (exsisting) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        );
      }
      // 장바구니에 내가 선택한 상품이 없는 경우
      return [...prevCart, { ...product, count: 1 }];
    });
  };
  // cart의 item을 삭제하는 함수
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id != productId));
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.count, 0);
  };

  return (
    <CartContext.Provider value={{ addToCart, cart, removeFromCart, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

const Header = () => {
  const { getTotal } = useCart();
  return (
    <header>
      <h1>쇼핑몰</h1>
      <p>카드에 들어있는 상품 개수: {getTotal()}</p>
    </header>
  );
};

const ProductList = () => {
  const products = [
    { id: 1, name: "노트북", price: 1000 },
    { id: 2, name: "스마트폰", price: 500 },
    { id: 3, name: "태블릿", price: 300 },
  ];

  const { addToCart } = useCart();

  return (
    <>
      <h2>상품 목록</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ₩{product.price}
            <button onClick={() => addToCart(product)}>상품 추가하기</button>
          </li>
        ))}
      </ul>
    </>
  );
};

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <>
      <h2>장바구니</h2>

      {cart.length === 0 ? (
        <p>장바구니가 비었습니다.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - 수량 : {item.count}
              <button onClick={() => removeFromCart(item.id)}>삭제하기</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default function ContextCart() {
  return (
    <CartProvider>
      <Header />
      <ProductList />
      <Cart />
    </CartProvider>
  );
}
