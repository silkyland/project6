import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import {
  Jumbotron,
  Button,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import Post from "../screen/admin/post";
import User from "../screen/admin/user";

const AdminMaster = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Container>
        <Jumbotron className="mb-0 bg-gradient">
          <div className="d-flex">
            <div>
              <img src="https://via.placeholder.com/150x150" />
            </div>
            <div className="pl-3">
              <h1 className="display-3">ระบบหลังบ้าน</h1>
              <p>v1.0.0</p>
            </div>
          </div>
        </Jumbotron>
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/admin">ADMIN</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/admin/post">ข่าว</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/admin/banner">แบนเนอร์</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/admin/category">หมวดหมู่ข่าว</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/admin/user">ผู้ใช้งาน</NavLink>
                </NavItem>
              </Nav>
              <NavbarText>ออกจากระบบ</NavbarText>
            </Collapse>
          </Navbar>
        </div>
        <div className="bg-white p-3">
          <Switch>
            <Route
              path="/admin"
              exact
              render={(props) => <Post {...props} />}
            />
            <Route path="/admin/post" render={(props) => <Post {...props} />} />
            <Route path="/admin/user" render={(props) => <User {...props} />} />
          </Switch>
        </div>
        &copy; 2021 Mywebsite
      </Container>
    </div>
  );
};
export default AdminMaster;
