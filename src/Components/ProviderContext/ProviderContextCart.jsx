import { createContext, useEffect, useState } from "react";
import {
	getFirestore,
	collection,
	getDocs,
	addDoc,
	serverTimestamp,
} from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCJOr024yRAMFcTqnSqvNwKWdkR4O5rVKI",
	authDomain: "richardstore-af657.firebaseapp.com",
	projectId: "richardstore-af657",
	storageBucket: "richardstore-af657.appspot.com",
	messagingSenderId: "596971287963",
	appId: "1:596971287963:web:3cfa3271e24424f89f5d3e",
	measurementId: "G-JMST2ZW0QD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const GlobalContext = createContext([]);
export const GlobalProvider = ({ children }) => {
	//Item Status from firebase
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	//Cart Status
	const [cart, setCart] = useState([]);
	const [orderId, setOrderId] = useState(null);

	//Getting products from Firebase
	useEffect(() => {
		const fetchData = async () => {
			try {
				const itemCollection = collection(db, "items");
				const snapshot = await getDocs(itemCollection);
				const itemDB = snapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
				setData(itemDB);
				setLoading(false);
			} catch (error) {
				console.log("Error Fetching data", error);
			}
		};

		fetchData();
	}, []);

	const addToCart = (item, qtySelected = 0) => {
		const itemStock = cart.findIndex((prod) => prod.id === item.id);
		if (itemStock >= 0) {
			const newCart = [...cart];
			if (qtySelected <= 1) {
				newCart[itemStock].qty++;
			} else {
				newCart[itemStock].qty += qtySelected;
			}
			setCart(newCart);
		} else {
			item.qty = qtySelected;
			setCart([...cart, item]);
		}
	};

	const removeFromCart = (id) => {
		setCarrito((prevCart) => prevCart.filter((prod) => prod.id !== id));
		Swal.fire({
			icon: "success",
			title: "Product out of the cart",
			toast: true,
			position: "top-end",
			showConfirmButton: false,
			timer: 2000,
			timerProgressBar: true,
			didOpen: (toast) => {
				toast.onmouseenter = Swal.stopTimer;
				toast.onmouseleave = Swal.resumeTimer;
			},
		});
	};

	const clearCart = () => {
		setCart([]);
	};

	const totalItemsInCart = cart.reduce((acc, item) => acc + item.qty, 0);
	const subtotal = cart.reduce((acc, item) => acc + item.qty * item.price, 0);

	//Order
	const createOrder = async (buyerInfo) => {
		const items = cart.map((item) => ({
			id: item.id,
			title: item.title,
			price: item.price,
			qty: item.qty,
		}));

		const order = {
			buyer: buyerInfo,
			items: items,
			total: subtotal,
			date: serverTimestamp(),
		};

		try {
			const docRef = await addDoc(collection(db, "orders"), order);
			setOrderId(docRef.id);
			clearCart()("Order Created wit ID: ", docRef.id);
		} catch (error) {
			console.log("Error creating order: ", error);
		}
	};

	return (
		<GlobalContext.Provider
			value={{
				data,
				loading,
				carrito,
				setCarrito,
				addToCart,
				removeFromCart,
				clearCart,
				totalItemsInCart,
				totalPrice,
				createOrder,
				fetchOrderById, // CreateOrder function
				orderId, // CreatedOrderID
			}}>
			{children}
		</GlobalContext.Provider>
	);
};
export default GlobalContext;
