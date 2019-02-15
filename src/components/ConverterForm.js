import React, { Component } from 'react';
import { observer } from 'mobx-react';

class ConverterForm extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
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