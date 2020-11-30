import {Autofiyable} from './Autofiyable';


export interface Service {

}

export interface AutofiyableService<T extends Autofiyable = Autofiyable> extends Service {
    getAutofiyable(): T;
}

export class AutofiyableServiceBase<T extends Autofiyable = Autofiyable> implements AutofiyableService<T> {

    private readonly autofiyable: T;

    constructor(autofiyable: T) {
        this.autofiyable = autofiyable;
    }

    getAutofiyable(): T {
        return this.autofiyable;
    }

}