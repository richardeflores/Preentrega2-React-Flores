import FetchSimulation from "../../FetchSimulation";
import products from "../Products/products";
import { useParams } from "react-router-dom";
import Spinner from "./Loading";
import ItemDetailed from "./ItemDetailed";
import { useState } from "react";
import { useEffect } from "react";

function DetailedCard() {
	const [data, SetData] = useState([]);
	const { id } = useParams();
	console.log(id);

	useEffect(() => {
		SetData([]);
		FetchSimulation(
			products.filter((filtered) => filtered.id == id),
			2000
		)
			.then((response) => SetData(response))
			.catch((error) => console.log(error));
	}, [id]);

	return data.length === 0 ? (
		<Spinner />
	) : (
		data.map((item) => (
			<>
				<ItemDetailed
					key={item.id}
					nombre={item.title}
					description={item.description}
					imagen={item.imagen}
					category={item.category}
					precio={item.price}
				/>
			</>
		))
	);
}
export default DetailedCard;
