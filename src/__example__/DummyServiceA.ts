import { DummyAutofiyable } from './DummyAutofiyable';
import { AutofiyableServiceBase } from '../AutofiyableService';

export class ServiceA extends AutofiyableServiceBase<DummyAutofiyable> {

    private readonly value: string;

    constructor(autofiyable: DummyAutofiyable, value: string = "DEFAULT SERVICE A") {
        super(autofiyable);
        this.value = value;
    }

    public getValue(): string {
        return this.value;
    }

}