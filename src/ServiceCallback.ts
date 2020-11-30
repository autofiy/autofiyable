import {Service} from "./AutofiyableService";

export type ServiceCallback<T extends Service> = (autofiyable: any) => T;