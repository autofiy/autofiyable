import { ServiceConfiguration } from './ServiceConfiguration';
import { Autofiyable } from "./Autofiyable";
import { Service } from "./Service";

export type ServiceCallback<T extends Service> = (autofiyable: Autofiyable) => T;