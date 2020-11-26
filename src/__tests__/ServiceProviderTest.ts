import { ServiceProvider } from './../ServiceProvider';
import { Autofiyable } from './../Autofiyable';
import {mock} from "jest-mock-extended";

describe("ServiceProvider" , () => {

    it("should return service from passed service" , () => {
        const testService : any = {value : 'test'};

        const autofiyable = mock<Autofiyable>({
            getProps: () => ({
                services : {
                    "test" : (a:Autofiyable) => {
                        expect(a).toBe(autofiyable);
                        return testService;
                    }
                }
            })
        });

        const serviceProvider = new ServiceProvider(autofiyable);
        const service = serviceProvider.getService("test");
        expect(service).toBe(testService);
    });


    it("should return service using custom handling" , () => {
        const testService : any = {value : 'test'};
        const autofiyable = mock<Autofiyable>({
            getProps: () => ({})
        });
        const serviceProvider = new ServiceProvider(autofiyable);
        const service = serviceProvider.getService("test" , () => testService);
        expect(service).toBe(testService);
    });


    it("should return service from default services" , () => {
        const testService : any = {value : 'test'};
        const autofiyable = mock<Autofiyable>({
            getProps : () => ({}),
            getDefaultServices: () => ({
                test : () => testService
            })
        });
        const serviceProvider = new ServiceProvider(autofiyable);
        const service = serviceProvider.getService("test");
        expect(service).toBe(testService);
    });


    it("should not use custom handling when returning undefined and return service from default services" , () => {
        const testService : any = {value : 'test'};
        const autofiyable = mock<Autofiyable>({
            getProps : () => ({}),
            getDefaultServices: () => ({
                test : () => testService
            })
        });
        const serviceProvider = new ServiceProvider(autofiyable);
        const service = serviceProvider.getService("test" , () => undefined);
        expect(service).toBe(testService);
    });


});