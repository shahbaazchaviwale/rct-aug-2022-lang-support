import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./top-nav.css";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

import { language } from "../../Services/lang-list";

function TopNavbar() {
  const { t } = useTranslation();
  const [lang, setLang] = useState("English");
  const HandleLanguage = (code, type) => {
    i18next.changeLanguage(code);
    setLang(type);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">DevApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">{t("top_nav.home")}</Nav.Link>
            <Nav.Link href="#action2">{t("top_nav.link")}</Nav.Link>
            <NavDropdown
              title="language"
              id="navbarScrollingDropdown"
            >
              {language.map((item) => (
                <NavDropdown.Item key={item.code}
                  onClick={() => {
                    HandleLanguage(item.code, item.type);
                  }}
                  active={item.type === lang}
                >
                  {item.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
