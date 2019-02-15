import { Rate } from './Rate';

const getCurrentDate = () => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;

    let yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    return (dd + '.' + mm + '.' + yyyy);
}

const api = 'http://www.cnb.cz/cs/financni_trhy/devizovy_trh/kurzy_devizoveho_trhu/denni_kurz.txt?date=' + getCurrentDate(); // 'DD.MM.YYYY'


export const getRates = () =>
    fetch(api)
    .then(res => res.text())
    .then((data) => data
        .split("\n")
        .slice(2)
        .filter(line => line !== '')
        .map(line => new Rate(...line.split("|")))
    );