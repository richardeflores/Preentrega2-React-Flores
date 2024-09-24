import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import DetailedCard from "./components/CardItems/DetailedCardContainer";
import Contacto from "./components/Contacto/Contacto";

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route
					path="/Preentrega2-React-Flores/"
					element={<ItemListContainer />}
				/>
				<Route
					path="/Preentrega2-React-Flores/contacto"
					element={<Contacto />}
				/>
				<Route
					path="/Preentrega2-React-Flores/item/:id"
					element={<DetailedCard />}
				/>
				<Route
					path="/Preentrega2-React-Flores/category/:idCategory"
					element={<ItemListContainer />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
