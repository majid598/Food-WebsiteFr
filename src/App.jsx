import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

import React, { Suspense, useEffect } from "react";
import Header from "./Components/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/Footer";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Shipping from "./Pages/Shipping";
import ConfirmOrder from "./Pages/ConfrimOrder";
import PaymentSuccess from "./Pages/PaymentSuccess";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import MyOrders from "./Pages/MyOrders";
import About from "./Pages/About";
import OrderDetails from "./Pages/OrderDetails";
import Dashboard from "./Pages/Admin/Dashboard";
import Users from "./Pages/Admin/Users";
import Orders from "./Pages/Admin/Order";
import NotFound from "./Components/NotFound";
import Loader from "./Components/Loader";
import { useDispatch, useSelector } from "react-redux";
import ProtectedRopute from "./Components/ProtectedRopute";
import SignUp from "./Pages/Signup";
import axios from "axios";
import { server } from "./redux/api/api";
import { userExists, userNotExists } from "./redux/reducers/userReducer";
import Payment from "./Pages/Payment";

const App = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${server}/api/v1/user/me`, { withCredentials: true })
      .then(({ data }) => dispatch(userExists(data?.user)))
      .catch((err) => dispatch(userNotExists()));
  }, [dispatch]);

  return (
    <Router>
      <Header user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route
          path="/login"
          element={
            <ProtectedRopute isAuthenticated={user ? false : true}>
              <Login />
            </ProtectedRopute>
          }
        />
        <Route
          path="/sign-up"
          element={
            <ProtectedRopute isAuthenticated={user ? false : true}>
              <SignUp />
            </ProtectedRopute>
          }
        />
        <Route
        // element={<ProtectedRopute isAuthenticated={user ? true : false} />}
        >
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/order/confrim" element={<ConfirmOrder />} />
          <Route path="/pay" element={<Payment />} />
          <Route path="/order/success" element={<PaymentSuccess />} />
          <Route path="/me" element={<Profile user={user} />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/order/:id" element={<OrderDetails />} />
        </Route>

        <Route
          element={
            <ProtectedRopute
              isAuthenticated={true}
              adminOnly={true}
              admin={user?.role === "admin" && true}
            />
          }
        >
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/orders" element={<Orders />} />
        </Route>
        <Route path="/lotu" element={<Loader />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer pauseOnHover={false} />
      <Footer />
    </Router>
  );
};

export default App;
