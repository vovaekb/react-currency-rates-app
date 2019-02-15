import { observable, action, decorate, computed } from 'mobx';
import * as RatesAPI from './RatesAPI';

class RatesStore {
    rates = [];
    destination_currency = null;

    setDestinationCurrency (val) {
    }

    fetchAllRates () {
    }

    get getRateConversion () {
    }
}

decorate(RatesStore, {
    rates: observable,
    fetchAllRates: action,
    getRateConversion: computed
});

export default RatesStore;