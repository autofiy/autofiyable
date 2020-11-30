import {Autofiyable} from "./Autofiyable";
import {Service} from "./AutofiyableService";
import {ServiceConfiguration} from "./ServiceConfiguration";
import {ServiceDefault} from "./ServiceDefault";

export interface IServiceProvider<SC extends ServiceConfiguration = ServiceConfiguration> {
    getService<T extends Service>(key: keyof SC, customHandling?: () => T | undefined): T;
}

export class ServiceProvider<SC extends ServiceConfiguration = ServiceConfiguration> implements IServiceProvider<SC> {

    private readonly autofiyable: Autofiyable<SC>;

    constructor(autofiyable: Autofiyable<SC>) {
        this.autofiyable = autofiyable;
    }

    getService<T extends Service>(serviceName: keyof SC, customHandling?: () => T | undefined): T {
        let serviceCallback: any = this.autofiyable.getProps().services?.[serviceName];

        if (serviceCallback) {
            return serviceCallback(this.autofiyable);
        }

        if (customHandling) {
            const service = customHandling();
            if (service) {
                return service;
            }
        }

        const serviceDefault = new ServiceDefault(this.autofiyable);
        return serviceDefault.getService(serviceName) as T;
    }
}
