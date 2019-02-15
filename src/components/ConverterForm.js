import React, { Component } from 'react';
import { observer } from 'mobx-react';

class ConverterForm extends Component {

    componentDidMount() {
        this.props.store.fetchAllRates();
    }
    
    render() {
        const currencies = this.props.store.getCurrencies;
        console.log("ConverterForm");
        console.log(currencies);
        return (
            <React.Fragment>
                <h2>Converter Form</h2>
                <button
                    onClick={() => this.props.history.push('/')}>
                    Back
              </button>
            </React.Fragment>
        )
    }
}

ConverterForm = observer(ConverterForm);

export default ConverterForm;