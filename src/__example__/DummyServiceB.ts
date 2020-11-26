import { ServiceBase } from './../Service';
import { DummyAutofiyable } from './DummyAutofiyable';
export class ServiceB extends ServiceBase {

    private readonly value: string;

    constructor(autofiyable: DummyAutofiyable, value: string = "DEFAULT SERVICE B") {
        super(autofiyable);
        this.value = value;
    }

    public getValue(): string {
        return this.value;
    }

}