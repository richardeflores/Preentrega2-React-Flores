import FetchSimulation from "../../FetchSimulation";
import Products from "../Products/products";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Spinner from "./Loading";
import ItemDetailed from "./ItemDetailed";

const DetailedCard = () => {
	const [data, SetData] = useState([]);
	let { idItem } = useParams();

	useEffect(() => {
		SetData([]);
		FetchSimulation(
			Products.filter((filtered) => filtered.id == idItem),
			2000
		)
			.then((response) => SetData(response))
			.catch((error) => console.log(error));
	}, [idItem]);

	return data.length === 0 ? (
		<Spinner />
	) : (
		data.map((item) => (
			<>
				<ItemDetailed
					key={item.id}
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
