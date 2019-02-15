import React, { Component } from 'react';
import { observer } from 'mobx-react';

class RatesList extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
    }
    
    render() {
        return (
            <React.Fragment>
                <h2>Rates List</h2>
            </React.Fragment>
        )
    }
}

RatesList = observer(RatesList);
export default RatesList;