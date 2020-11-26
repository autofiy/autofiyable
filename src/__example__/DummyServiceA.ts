import { DummyAutofiyable } from './DummyAutofiyable';
import { ServiceBase } from './../Service';

export class ServiceA extends ServiceBase<DummyAutofiyable> {

    private readonly value: string;

    constructor(autofiyable: DummyAutofiyable, value: string = "DEFAULT SERVICE A") {
        super(autofiyable);
        this.value = value;
    }

    public getValue(): string {
        return this.value;
    }

}