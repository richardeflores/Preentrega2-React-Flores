import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import DetailedCard from "./Components/CardItems/DetailedCardContainer";
import Contacto from "./components/Contacto/Contacto";
import ProviderContextCart from "./Components/ProviderContext/ProviderContextCart";

function App() {
	return (
		<ProviderContextCart>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route
						main
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
		</ProviderContextCart>
	);
}

export default App;
