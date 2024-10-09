import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import ButtonAddToCart from "./AddToCart";

function CardItems(props) {
	return (
		<Col className="columna">
			<Card style={{ width: "18rem" }}>
				<Card.Img variant="top" src={props.imagen} />
				<Card.Body>
					<Card.Title>{props.nombre}</Card.Title>
					<Card.Text>{props.category}</Card.Text>
					<h6 className="card-price" variant="primary">
						{props.precio}
					</h6>
					<div className="card-buttons">
						<Link
							className="btn btn-primary btn-lg"
							to={`/Preentrega2-React-Flores/item/${props.id}`}>
							See More
						</Link>{" "}
						<ButtonAddToCart id={props.id} />
					</div>
				</Card.Body>
			</Card>
		</Col>
	);
}

export default CardItems;
