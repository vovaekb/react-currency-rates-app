import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RatesStore from './RatesStore';
import RatesList from './components/RatesList';
import ConverterForm from './components/ConverterForm';
import './App.css';

const store = new RatesStore();

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/" component={() => <RatesList store={store} />} />
            <Route path="/Convert" component={() => <ConverterForm store={store} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
