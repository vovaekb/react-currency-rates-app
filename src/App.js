import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import RatesStore from './RatesStore';
import RatesList from './components/RatesList';
import ConverterForm from './components/ConverterForm';
import './App.css';

const store = new RatesStore();

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Row className="show-grid">
            <Col>
              <Navbar collapseOnSelect>
                <Navbar.Collapse>
                  <Nav>
                    <Nav.Item>
                      <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/convert">Convert</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <Switch>
                <Route exact path="/" component={() => <RatesList store={store} />} />
                <Route path="/Convert" component={() => <ConverterForm store={store} />} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}

export default App;
