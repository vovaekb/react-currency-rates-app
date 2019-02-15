export class Rate {
    constructor(country, name, in_count, code, out_count) {
        this.country = country;
        this.name = name;
        this.in_count = parseFloat(in_count);
        this.code = code;
        this.out_count = parseFloat(out_count);
    }
}