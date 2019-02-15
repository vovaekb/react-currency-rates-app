import React, { Component } from 'react';
import { observer } from 'mobx-react';

class RateView extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
    }

    render() {
        return (
          <React.Fragment>
            <h2>Rate View</h2>
          </React.Fragment>
        )
    }
}

RateView = observer(RateView);
export default RateView;