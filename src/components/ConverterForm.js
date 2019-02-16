import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Col, Form, FormGroup, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import Select from 'react-select';

class ConverterForm extends Component {
    constructor() {
        super();

        this.state = {
            selectedCurrencyOption: null,
            sum: null,
            out_currency: null
        };

        this.changeSum = this.changeSum.bind(this);
        this.changeCurrency = this.changeCurrency.bind(this);
        this.convertSum = this.convertSum.bind(this);
    }

    componentDidMount() {
        this.props.store.fetchAllRates();
        this.props.store.conversionResult = null;
    }

    changeCurrency = (selectedOption) => {
        this.setState({ selectedCurrencyOption: selectedOption, out_currency: selectedOption.value });
      }

    changeSum(e) {
        const value = e.target.value;
        if(e.target.validity.valid) this.setState({ sum: value });
    }

    convertSum(e) {
        const sum = this.state.sum;
        const out_currency = this.state.out_currency;
        this.props.store.convertCurrency(sum, out_currency);
    }
    
    render() {
        const currencies = this.props.store.getCurrencies;
        const currencyOptions = currencies.map(currency => Object.assign({ 'label': currency.code, 'value': currency.code }, {}));
        const conversionResult = this.props.store.conversionResult;
        return (
            <React.Fragment>
                <h2>Converter Form</h2>
                <button
                    onClick={() => this.props.history.push('/')}>
                    Back
              </button>
              <Form horizontal>
              <FormGroup>
              <Col sm={1}>Currency</Col>
                <Col sm={4}>
                  <Select
                    value={this.state.selectedCurrencyOption} 
                    onChange={this.changeCurrency}
                    options={currencyOptions} />
                </Col>
                <Col sm={7}>
                    <label>Sum</label>
                    <input type="tel" value={this.state.sum}
                    inputmode="numeric"
                    pattern="^[0-9]\d*\.?\d*$"
                    onChange={this.changeSum}
                    placeholder="Sum" />
                </Col>
              </FormGroup>
              <FormGroup>
                  <Button 
                   onClick={this.convertSum}>Convert</Button>
              </FormGroup>
            </Form>
            {conversionResult ? (
                <div>{conversionResult}</div>
            ) : ('')}
            </React.Fragment>
        )
    }
}

ConverterForm = observer(ConverterForm);

export default withRouter(ConverterForm);