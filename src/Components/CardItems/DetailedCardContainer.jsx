import FetchSimulation from "../../FetchSimulation";
import products from "../Products/products";
import { useParams } from "react-router-dom";
import Spinner from "./Loading";
import ItemDetailed from "./ItemDetailed";
import { useState } from "react";
import { useEffect } from "react";

const DetailedCard = () => {
	const [data, SetData] = useState([]);
	let { idItem } = useParams();

	useEffect(() => {
		SetData([]);
		FetchSimulation(
			products.filter((filtered) => filtered.id == idItem),
			2000
		)
			.then((response) => SetData(response))
			.catch((error) => console.log(error));
	}, [idItem]);

	const filteredProducts = products.filter(
		(filtered) => filtered.id === parseInt(idItem)
	);

	if (filteredProducts.length === 0) {
		console.log("No se encontró ningún producto con el ID:", idItem);
	}

	return data.length === 0 ? (
		<Spinner />
	) : (
		data.map((item) => (
			<>
				<ItemDetailed
					key={item.id}
					id={item.id}
					title={item.title}
					description={item.description}
					image={item.image}
					category={item.category}
					price={item.price}
				/>
			</>
		))
	);
};
export default DetailedCard;
