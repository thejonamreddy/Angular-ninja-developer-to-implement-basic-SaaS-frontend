export class UserDetail {
    id: number;
    name: string;
    services: number[];

    constructor(id: number, name: string, services: number[]) {
        this.id = id;
        this.name = name;
        this.services = services;
    }
}