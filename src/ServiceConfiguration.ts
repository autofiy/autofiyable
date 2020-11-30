import {Service} from "./AutofiyableService";
import {ServiceCallback} from "./ServiceCallback";

export interface ServiceConfiguration { 
    [serviceName : string] : ServiceCallback<Service>;
}