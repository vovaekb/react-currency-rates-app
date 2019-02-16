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
              <h3>{rate.country} {rate.name}</h3><br/>
              <b>Rate: </b>
              <span>{rate.in_count} CZK</span> :
              <span> {rate.out_count} {rate.code}</span>
            </ListGroupItem>
          </React.Fragment>
        )
    }
}

RateView = observer(RateView);
export default RateView;