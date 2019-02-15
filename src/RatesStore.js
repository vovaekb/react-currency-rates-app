import { observable, action, decorate, computed } from 'mobx';
import { createTransformer } from 'mobx-utils';
import * as RatesAPI from './RatesAPI';
import { Currency } from './Currency';

class RatesStore {
    rates = [];
    destination_currency = null;

    setDestinationCurrency (val) {
        this.destination_currency = val;
    }

    fetchAllRates () {
        RatesAPI.getRates().then((data) => this.rates = data);
    }

    get getCurrencies () {
        console.log('Get currencies');
        return this.rates.map(rate => new Currency(rate.country, rate.name, rate.code));
    }

    get getRateConversion () {
        return createTransformer((sum) => {
            console.log('Get rate conversion');
            console.log(this.destination_currency);
            const out_currency_rate = this.rates.filter(rate => rate.code === this.destination_currency)[0];

            if(!out_currency_rate) return null;
            const result = parseFloat( out_currency_rate.in_count / out_currency_rate.out_count ) * sum;
            return result;
        });
    }
}

decorate(RatesStore, {
    rates: observable,
    fetchAllRates: action,
    getCurrencies: computed,
    getRateConversion: computed,
});

export default RatesStore;