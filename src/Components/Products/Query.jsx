/* import {
	collection,
	getDocs,
	getFirestore,
	query,
	where,
} from "firebase/firestore";
import { useEffect } from "react";

function Query() {
	const db = getFirestore();

	const refItems = collection(db, "items");

	useEffect(() => {
		const q = query(refItems, where("price", ">", 1));

		getDocs(q).then((snapshot) => {
			if (snapshot.size === 0) {
				console.log("There's no data available");
			} else {
				snapshot.docs.map((prod) => console.log(prod.data()));
			}
		});
	});
	return <div>Query</div>;
}

export default Query;
 */
