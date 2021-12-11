import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import './Header.scss';

Header.propTypes = {};

function Header() {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
        <Col xs="auto">
            <NavLink
              exact
              className="header__link"
              to="/smarthome"
              activeClassName="header__link--active"
            >
              Smart Home
            </NavLink>
          </Col>

          <Col xs="auto">
            <NavLink
              exact
              className="header__link"
              to="/smarthome/controllers"
              activeClassName="header__link--active"
            >
              Controllers
            </NavLink>
          </Col>

          <Col xs="auto">
            <NavLink
              exact
              className="header__link"
              to="/smarthome/history"
              activeClassName="header__link--active"
            >
              History
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;