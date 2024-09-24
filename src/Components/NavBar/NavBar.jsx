import logo from "../../assets/LogoRF.svg";
import CartWidget from "../CartWidget/CartWidget";
import Container from "react-bootstrap/Container";
import "./NavBar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, Outlet } from "react-router-dom";

function NavBar() {
	return (
		<>
			<Navbar bg="dark" data-bs-theme="dark" expand="lg">
				<Container>
					<Link to={"/"} className="navbar-brand">
						<img
							src={logo}
							width="40"
							height="40"
							className="d-inline-block align-top"
							alt="Logo Tienda"
						/>{" "}
						Richard Store
					</Link>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<Link to={"/"} className="nav-link">
								Inicio
							</Link>
							<NavDropdown title="Categorías" id="basic-nav-dropdown">
								<Link to={"category/Hombres"} className="dropdown-item">
									Hombres
								</Link>
								<NavDropdown.Divider />
								<Link to={"category/Mujeres"} className="dropdown-item">
									Mujeres
								</Link>
								<NavDropdown.Divider />
								<Link to={"category/Ninos"} className="dropdown-item">
									Niños
								</Link>
								<NavDropdown.Divider />
								<Link to={"category/Mascotas"} className="dropdown-item">
									Mascotas
								</Link>
							</NavDropdown>
							<Link to={"contacto"} className="nav-link">
								Contacto
							</Link>
							<CartWidget />
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Outlet />
		</>
	);
}
export default NavBar;
