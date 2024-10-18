import "./ItemListContainer.css";
import CardItems from "../CardItems/CardItems";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GlobalContext from "../ProviderContext/ProviderContextCart";

const ItemListContainer = () => {
	const [data, SetData] = useState([]);
	let { idCategory } = useParams();

	useEffect(() => {
		if (idCategory === undefined) {
			fetchSimulation(products, 1000)
				.then((response) => SetData(response))
				.catch((error) => console.log(error));
		} else {
			fetchSimulation(
				products.filter((filter) => filter.category == idCategory)
			)
				.then((response) => SetData(response))
				.catch((error) => console.log(error));
		}
	}, [idCategory]);

	return (
		<>
			<Container>
				{data.map((products) => (
					<CardItems
						key={products.id}
						id={products.id}
						image={products.image}
						title={products.title}
						category={products.category}
						price={products.price}
					/>
				))}
			</Container>
		</>
	);
};
export default ItemListContainer;
