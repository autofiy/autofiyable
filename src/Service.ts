import { Autofiyable } from './Autofiyable';

export interface Service<T extends Autofiyable<any,any>>{

    getAutofiyable() : T;

}