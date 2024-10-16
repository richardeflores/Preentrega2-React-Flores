import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
const analytics = getAnalytics(app);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>
);
