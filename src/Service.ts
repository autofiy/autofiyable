import { Autofiyable } from './Autofiyable';

export interface Service<T extends Autofiyable = Autofiyable> {

    getAutofiyable() : T;

}


export class ServiceBase<T extends Autofiyable = Autofiyable> implements Service<T> {

    private readonly autofiyable : T;

    constructor(autofiyable : T) {
        this.autofiyable = autofiyable;
    }

    getAutofiyable() : T {
        return this.autofiyable;
    }

}