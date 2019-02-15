import React, { Component } from 'react';
import { observer } from 'mobx-react';

class ConverterForm extends Component {

    componentDidMount() {
        this.props.store.fetchAllRates();
    }
    
    render() {
        return (
            <React.Fragment>
                <h2>Converter Form</h2>
            </React.Fragment>
        )
    }
}

ConverterForm = observer(ConverterForm);

export default ConverterForm;