import { Autofiyable } from './Autofiyable';

export interface Service<T extends Autofiyable = Autofiyable> {

    getAutofiyable() : T;

}