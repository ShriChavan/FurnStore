import './App.css';
import { useEffect, useState } from "react";
import Header from './components/layout/Header/Header.js';
import Footer from './components/layout/Footer/Footer.js';
import Home from './components/Home/Home.js';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import WebFont from 'webfontloader';
import React from 'react';
import ProductDetails from './components/Product/ProductDetails.js';
import Products from './components/Product/Products.js';
import Search from './components/Product/Search.js';
import LoginSignUp from './components/User/LoginSignUp';
import store from "./store";
import { loadUser } from './actions/userAction.js';
import UserOptions from "./components/layout/Header/Useroptions.js";
import { useSelector } from 'react-redux';
import Profile from "./components/User/Profile.js";
import ProtectedRoute from "./components/Route/ProtectedRoute.js";
import AdminRoute from "./components/Route/AdminRoute.js";
import UpdateProfile from "./components/User/UpdateProfile.js";
import UpdatePassword from "./components/User/UpdatePassword.js";
import ForgotPassword from "./components/User/ForgotPassword.js";
import ResetPassword from "./components/User/ResetPassword.js";
import Cart from "./components/Cart/Cart.js";
import Shipping from "./components/Cart/Shipping.js";
import ConfirmOrder from "./components/Cart/ConfirmOrder.js";
import axios from "axios";
import Payment from "./components/Cart/Payment.js";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./components/Cart/OrderSuccess.js";
import MyOrders from "./components/Order/MyOrders.js";
import OrderDetails from "./components/Order/OrderDetails.js";
import Dashboard from "./components/Admin/Dashboard.js";
import ProductList from "./components/Admin/ProductList.js";
import NewProduct from './components/Admin/NewProduct.js';
import UpdateProduct from './components/Admin/UpdateProduct.js';
import OrderList from './components/Admin/OrderList.js';
import ProcessOrder from './components/Admin/ProcessOrder.js';
import UsersList from './components/Admin/UsersList.js';
import UpdateUser from './components/Admin/UpdateUser.js';
import ProductReviews from './components/Admin/ProductReviews.js';
import Contact from './components/layout/Contact/Contact.js';
import NotFound from './components/layout/NotFound/NotFound.js';
import About from './components/layout/About/About.js';
import Model from './components/Product/Model.js';

function App() {
	const { isAuthenticated, user } = useSelector((state) => state.user);

	const [stripeApiKey, setStripeApiKey] = useState("");

	async function getStripeApiKey() {
		const { data } = await axios.get("/api/v1/stripeapikey");

		setStripeApiKey(data.stripeApiKey);
	}

  	useEffect(() => {
	WebFont.load({
		google: {
		families: ['Roboto','Droid Sans','Chilanka']
		}
	});

	store.dispatch(loadUser());

	getStripeApiKey();
},[]);

// window.addEventListener("contextmenu", (e) => e.preventDefault());

return(
	<Router>

		<Header />

		{isAuthenticated && <UserOptions user={user} />}
		
		<Routes>
			<Route index element={<Home/>}/>
			
			<Route path="/product/:id" element={<ProductDetails/>}/>
			<Route path="/product/:id/model" element={<Model/>}/>
			<Route path="/products" element={<Products/>}/>
			<Route path="/products/:keyword" element={<Products/>}/>

			<Route path="/search" element={<Search/>}/>
			<Route path="/login" element={<LoginSignUp/>}/>
			<Route path="/password/forgot" element={<ForgotPassword />}/>
			<Route path="/password/reset/:token" element={<ResetPassword />}/>
			<Route path="/cart" element={<Cart/>}/>
			<Route path="/contact" element={<Contact/>}/>
			<Route path="/about" element={<About/>}/>

			<Route element={<ProtectedRoute/>}>
				<Route path="/account" element={<Profile />}/>
				<Route path="/me/update" element={<UpdateProfile />}/>
				<Route path="/password/update" element={<UpdatePassword />}/>
				<Route path="/shipping" element={<Shipping />}/>
				<Route path="/order/confirm" element={<ConfirmOrder />}/>
				<Route path="/success" element={<OrderSuccess />}/>
				<Route path="/orders" element={<MyOrders />}/>
				<Route path="/order/:id" element={<OrderDetails />}/>
			</Route>

			<Route element={<AdminRoute />}>
				<Route path="/admin/dashboard" element={<Dashboard />}/>
				<Route path="/admin/products" element={<ProductList />}/>
				<Route path="/admin/product" element={<NewProduct />}/>
				<Route path="/admin/product/:id" element={<UpdateProduct />}/>
				<Route path="/admin/orders" element={<OrderList />}/>
				<Route path="/admin/order/:id" element={<ProcessOrder />}/>
				<Route path="/admin/users" element={<UsersList />}/>
				<Route path="/admin/user/:id" element={<UpdateUser />}/>
				<Route path="/admin/reviews" element={<ProductReviews />}/>
			</Route>

			{stripeApiKey && (
				<Route element={<ProtectedRoute/>}>
					<Route 
						path="/process/payment"
						element = {(
							<Elements stripe = {loadStripe(stripeApiKey)}>
								<Payment />
							</Elements>
						)}
					/>
				</Route>
			)}

			<Route path='/*' element={<NotFound />}/>
		</Routes>
		
		<Footer />

	</Router>
)}

export default App;
