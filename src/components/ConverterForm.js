import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Row, Col, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
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
        this.setState({ sum: value });
    }

    convertSum(e) {
        const sum = this.state.sum;
        const out_currency = this.state.out_currency;
        this.props.store.convertCurrency(sum, out_currency);
    }
    
    render() {
        const currencies = this.props.store.getCurrencies;
        const currencyOptions = currencies.map(currency =>
             Object.assign({ 'label': currency.code, 'value': currency.code }, {}
             ));
        
        const conversionResult = this.props.store.conversionResult;
        return (
            <React.Fragment>
                <Button variant="secondary"
                                onClick={() => this.props.history.push('/')}>Back</Button>
              <h2>Converter Form</h2>
                <Form>
                    <Form.Group as={Row} controlId="formCurrency">
                        <Form.Label column sm={2}>
                        Currency
                        </Form.Label>
                        <Col sm={10}>
                        <Select
                                value={this.state.selectedCurrencyOption}
                                onChange={this.changeCurrency}
                                options={currencyOptions} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formSum">
                        <Form.Label column sm={2}>
                        Sum
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control
                                type="number"
                                min="0" step="0.01"
                                onChange={this.changeSum} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button variant="primary"
                                className="btn btn-primary"
                                onClick={this.convertSum}>Convert</Button>
                        </Col>
                    </Form.Group>

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