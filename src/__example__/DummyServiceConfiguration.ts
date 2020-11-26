import { DummyAutofiyable } from './DummyAutofiyable';
import { ServiceA } from './DummyServiceA';
import { ServiceCallback } from './../ServiceCallback';
import { ServiceConfiguration } from './../ServiceConfiguration';
import { ServiceB } from './DummyServiceB';

export interface DummyServiceConfiguration extends ServiceConfiguration {
    serviceA: ServiceCallback<ServiceA , DummyAutofiyable>;
    serviceB: ServiceCallback<ServiceB , DummyAutofiyable>;
}