import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { ListGroupItem } from 'react-bootstrap';

class RateView extends Component {

    componentDidMount() {
        this.props.store.fetchAllRates();
    }

    render() {
      const rate = this.props.rate;
        return (
          <React.Fragment>
            <ListGroupItem key={rate.code}>
              <span>{rate.country} {rate.name}</span><br/>
              <b>Rate:</b>
              <span>{rate.in_count}</span> -
              <span>{rate.out_count}</span>
              <hr/>
            </ListGroupItem>
          </React.Fragment>
        )
    }
}

RateView = observer(RateView);
export default RateView;