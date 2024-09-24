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
					<Link to={"/Preentrega2-React-Flores/"} className="navbar-brand">
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
							<Link to={"/Preentrega2-React-Flores/"} className="nav-link">
								Inicio
							</Link>
							<NavDropdown title="Categorías" id="basic-nav-dropdown">
								<Link
									to={"/Preentrega2-React-Flores/category/Hombres"}
									className="dropdown-item">
									Hombres
								</Link>
								<NavDropdown.Divider />
								<Link
									to={"/Preentrega2-React-Flores/category/Mujeres"}
									className="dropdown-item">
									Mujeres
								</Link>
								<NavDropdown.Divider />
								<Link
									to={"/Preentrega2-React-Flores/category/Ninos"}
									className="dropdown-item">
									Niños
								</Link>
								<NavDropdown.Divider />
								<Link
									to={"/Preentrega2-React-Flores/category/Mascotas"}
									className="dropdown-item">
									Mascotas
								</Link>
							</NavDropdown>
							<Link
								to={"/Preentrega2-React-Flores/contacto"}
								className="nav-link">
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
