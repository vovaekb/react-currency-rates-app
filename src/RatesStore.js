import { observable, action, decorate, computed } from 'mobx';
import { createTransformer } from 'mobx-utils';
import * as RatesAPI from './RatesAPI';
import { Currency } from './Currency';

class RatesStore {
    rates = [];
    conversionResult = null;

    fetchAllRates () {
        RatesAPI.getRates().then((data) => this.rates = data);
    }

    get getCurrencies () {
        console.log('Get currencies');
        return this.rates.map(rate => new Currency(rate.country, rate.name, rate.code));
    }

    convertCurrency(sum, out_currency) {
        console.log('Get rate conversion');
        const out_currency_rate = this.rates.filter(rate => rate.code === out_currency)[0];

        if (!out_currency_rate) return null;
        this.conversionResult = parseFloat(out_currency_rate.in_count / out_currency_rate.out_count) * sum;
    }
}

decorate(RatesStore, {
    rates: observable,
    conversionResult: observable,
    fetchAllRates: action,
    convertCurrency: action,
    getCurrencies: computed,
});

export default RatesStore;