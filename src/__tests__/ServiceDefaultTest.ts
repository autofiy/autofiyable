import { mock } from 'jest-mock-extended';
import { ServiceDefault } from '../ServiceDefault';
import { Autofiyable } from './../Autofiyable';
describe("ServiceDefault" , () => {

    it("should return default service" , () => {
        const testService : any = {value : 'test'};
        const autofiyable = mock<Autofiyable>({
            getDefaultServices : () => ({
                test : a => {
                    expect(a).toBe(autofiyable);
                    return testService;
                }
            })
        });
        const serviceDefault = new ServiceDefault(autofiyable);
        const service = serviceDefault.getService("test");
        expect(service).toBe(testService);
    });


    it("should throw exception" , () => {
        const autofiyable = mock<Autofiyable>({
            getDefaultServices : () => ({})
        });
        const serviceDefault = new ServiceDefault(autofiyable);
        expect(() => serviceDefault.getService("test")).toThrowError("Service test not found");
    });

});