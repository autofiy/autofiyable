import { Service } from "./Service";
import { ServiceCallback } from "./ServiceCallback";

export interface ServiceConfiguration { 
    [serviceName : string] : ServiceCallback<Service<any>>;
}