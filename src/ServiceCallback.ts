import { Service } from "./Service";

export type ServiceCallback<T extends Service> = (autofiyable: any) => T;