import React, { Component } from 'react';
import { observer } from 'mobx-react';

class RatesList extends Component {

    componentDidMount() {
        this.props.store.fetchAllRates();
    }
    
    render() {
        const rates = this.props.store.rates;
        return (
            <React.Fragment>
                <h2>Rates List</h2>
            </React.Fragment>
        )
    }
}

RatesList = observer(RatesList);
export default RatesList;