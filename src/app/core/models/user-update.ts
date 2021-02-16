export class UserUpdate {
    id: number;
    name: string;
    countries: number[];

    constructor(id: number, name: string, countries: number[]) {
        this.id = id;
        this.name = name;
        this.countries = countries;
    }
}