import { Autofiyable } from './Autofiyable';
import { ServiceConfiguration } from './ServiceConfiguration';
import { Service } from './Service';

export class ServiceDefault<SC extends ServiceConfiguration = ServiceConfiguration> {

    private readonly autofiyable: Autofiyable<SC>;

    constructor(autofiyable: Autofiyable<SC>) {
        this.autofiyable = autofiyable;
    }

    public getService<T extends Service>(serviceName: keyof SC): T {
        const defaultService = this.autofiyable.getDefaultServices();
        const callback = defaultService[serviceName];

        if (callback) {
            return callback(this.autofiyable) as T;
        }

        throw new Error(`Service ${serviceName} found`);
    }
}