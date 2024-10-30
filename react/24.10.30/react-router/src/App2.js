import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  Outlet,
} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Link to={"/"}>Home</Link>
      <Link to={"/cart"}>Cart</Link>
      <Link to={"/users"}>User</Link>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/product/:id/notive" />
        <Route path="/users" element={<User />}>
          <Route path="coupon" element={<Coupon />} />
          <Route path="question" element={<Question />} />
          <Route path="notice" element={<Notice />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Index() {
  return (
    <>
      <h1>Home Page</h1>
      <Link to={"/product/:id"}>Product</Link>
      <Outlet />
    </>
  );
}

function Product() {
  return <h1>Product1</h1>;
}

function Cart() {
  return <h1>CartPage</h1>;
}

function User() {
  return (
    <>
      <h1>User Page</h1>
      <button>
        <Link to={"/users/coupon"}>Coupon</Link>
      </button>
      <button>
        <Link to={"/users/question"}>Question</Link>
      </button>
      <button>
        <Link to={"/users/notice"}>Notice</Link>
      </button>
      <div>
        <Outlet />
      </div>
    </>
  );
}

function Coupon() {
  return <h2>Coupon Page</h2>;
}

function Question() {
  return <h2>Question</h2>;
}

function Notice() {
  return <h2>Notice</h2>;
}
