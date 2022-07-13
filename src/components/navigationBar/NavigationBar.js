import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./NavigationBar.css";
import { NavLink } from "react-router-dom";

function NavigationBar() {




  return (
    <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
      <Container fluid>
        <Navbar.Brand>
          <NavLink to="/">
            <img id="logo" alt="logo" src="/logo.png"></img>
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>
              <NavLink to="/">Home</NavLink>
            </Nav.Link>
            {/* nav drop down 1 */}
            <NavDropdown title="Employee" id="navbarScrollingDropdown">
              <NavLink to="/employess">View All Employee</NavLink>
              {/* </NavDropdown.Item> */}
              <NavDropdown.Divider />

              <NavLink data-rr-ui-dropdown-item="" to="/underconstruction">Service</NavLink>
            </NavDropdown>

            {/* Nav dropdown 2 */}
            <NavDropdown title="Customer" id="navbarScrollingDropdown">
              <NavLink to="/customers">View All Customer</NavLink>

              <NavDropdown.Divider />

              <NavLink to="/underconstruction">On The Way!</NavLink>
            </NavDropdown>

            <Nav.Link disabled>
              <NavLink to="/underconstruction" className="disabled">How We Work</NavLink>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
