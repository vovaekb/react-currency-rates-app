import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { ListGroup } from 'react-bootstrap';
import RateView from './RateView';

class RatesList extends Component {

    componentDidMount() {
        this.props.store.fetchAllRates();
    }
    
    render() {
        const rates = this.props.store.rates;
        return (
            <React.Fragment>
                <h2>Rates List</h2>
                <Link to={'/convert'}>Convert currency</Link>
                <ListGroup>
                    {rates.map(rate => 
                    <RateView key={rate.code} rate={rate} store={this.props.store}></RateView>
                    )}
                </ListGroup>
            </React.Fragment>
        )
    }
}

RatesList = observer(RatesList);
export default RatesList;