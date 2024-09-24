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
				<Route path="/" element={<ItemListContainer />} />
				<Route path="contacto" element={<Contacto />} />
				<Route path="item/:idItem" element={<DetailedCard />} />
				<Route
					exact
					path="category/:idCategory"
					element={<ItemListContainer />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
