import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import RateView from './RateView';

class RatesList extends Component {

    componentDidMount() {
        this.props.store.fetchAllRates();
    }
    
    render() {
        const rates = this.props.store.rates;
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col><h2>Rates List</h2></Col>
                        <Col>
                            <Button variant="secondary" onClick={() => this.props.history.push('/convert')}>Convert currency</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ListGroup>
                                {rates.map(rate =>
                                    <RateView key={rate.code} rate={rate} store={this.props.store}></RateView>
                                )}
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

RatesList = observer(RatesList);
export default withRouter(RatesList);