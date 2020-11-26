import { Autofiyable } from "./Autofiyable";
import { ServiceConfiguration } from "./ServiceConfiguration";
import { ServiceDefault } from "./ServiceDefault";

export interface IServiceProvider<SC extends ServiceConfiguration = ServiceConfiguration> {
    getService<T = any>(key: keyof SC, defaultService?: () => T | undefined): T;
}

export class ServiceProvider<SC extends ServiceConfiguration = ServiceConfiguration> implements IServiceProvider<SC> {

    private readonly autofiyable: Autofiyable<SC>;

    constructor(autofiyable: Autofiyable<SC>) {
      this.autofiyable = autofiyable;
    }

    getService<T = any>(serviceName: keyof SC, defaultService?: () => T | undefined): T {
      let serviceCallback: any = this.autofiyable.getProps().services?.[serviceName];

      if (serviceCallback) {
          return serviceCallback(this.autofiyable);
      }

      if (defaultService) {
          const service = defaultService();
          if (service) {
              return service;
          }
      }

      const serviceDefault = new ServiceDefault(this.autofiyable);
      serviceDefault.getService(serviceName);
  }
}
