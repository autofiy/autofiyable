import { ServiceProvider } from './../ServiceProvider';
import { DummyProps } from './DummyProps';
import { ServiceB } from './DummyServiceB';
import { DummyServiceConfiguration } from './DummyServiceConfiguration';
import { Autofiyable } from './../Autofiyable';
import { ServiceA } from './DummyServiceA';


export class DummyAutofiyable implements Autofiyable<DummyServiceConfiguration, DummyProps> {

    private readonly props: DummyProps;

    private readonly serviceA: ServiceA;
    private readonly serviceB: ServiceB;

    constructor(props: DummyProps) {
        this.props = props;
        const serviceProvider = new ServiceProvider<DummyServiceConfiguration>(this);
        this.serviceA = serviceProvider.getService<ServiceA>("serviceA");
        this.serviceB = serviceProvider.getService<ServiceB>("serviceB");
    }

    getProps(): DummyProps {
        return this.props;
    }

    getDefaultServices(): DummyServiceConfiguration {
        return {
            serviceA: () => new ServiceA(this),
            serviceB: () => new ServiceB(this)
        };
    }

    public a(): ServiceA {
        return this.serviceA;
    }

    public b(): ServiceB {
        return this.serviceB;
    }

}