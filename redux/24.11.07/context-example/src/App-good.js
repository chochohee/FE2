import { createContext, useContext, useState } from "react";

const UserContext = createContext();
const AlamContext = createContext();
const CartContext = createContext();

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    name: "재현",
    email: "test@test.com",
    alam: {
      theme: "dark",
      fontSize: "16",
    },
    cart: {
      items: [],
      totalPrice: 0,
    },
  });

  const updateCartTotal = (value) => {
    setUserData((prev) => {
      return {
        ...prev,
        cart: {
          items: [],
          totalPrice: value,
        },
      };
    });
  };

  return (
    <UserContext.Provider value={{ userData, updateCartTotal }}>
      {children}
    </UserContext.Provider>
  );
};

const AlamProvider = ({ children }) => {
  const [alamData, setAlamData] = useState({
    alam: {
      theme: "dark",
      fontSize: "16",
    },
  });

  return (
    <AlamContext.Provider value={{ alamData }}>{children}</AlamContext.Provider>
  );
};

const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState({
    cart: {
      items: [],
      totalPrice: 0,
    },
  });

  const updateCartTotal = (value) => {
    setCartData((prev) => {
      return {
        ...prev,
        cart: {
          items: [],
          totalPrice: value,
        },
      };
    });
  };

  return (
    <CartContext.Provider value={{ cartData, updateCartTotal }}>
      {children}
    </CartContext.Provider>
  );
};

const CartTotal = () => {
  const { cartData } = useContext(CartContext);

  return (
    <strong style={{ display: "block" }}>
      총 금액 : {cartData.cart.totalPrice}
    </strong>
  );
};

const Alam = () => {
  const { alamData } = useContext(AlamContext);

  return (
    <strong style={{ display: "block" }}> 테마 : {alamData.alam.theme}</strong>
  );
};

const UpdateCartTotal = () => {
  const { updateCartTotal } = useContext(CartContext);

  return <button onClick={() => updateCartTotal(10)}>버튼!!</button>;
};

const Email = () => {
  const { userData } = useContext(UserContext);

  return (
    <strong style={{ display: "block" }}> 이메일 : {userData.email}</strong>
  );
};

function App() {
  return (
    <div>
      <UserProvider>
        <Email />
      </UserProvider>
      <AlamProvider>
        <Alam />
      </AlamProvider>
      <CartProvider>
        <CartTotal />
        <UpdateCartTotal />
      </CartProvider>
    </div>
  );
}
export default App;
