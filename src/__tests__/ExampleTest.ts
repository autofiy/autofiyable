import {ServiceA} from '../__example__/DummyServiceA';
import {DummyProps} from '../__example__/DummyProps';
import {DummyAutofiyable} from '../__example__/DummyAutofiyable';

describe("ExampleTest", () => {

    it("should return props", () => {
        const props: DummyProps = {
            dummyProps: 'DUMMY VALUE',
            services: {
                serviceA: (autofiyable: any) => new ServiceA(autofiyable, "PASSED SERVICE A"),
            }
        };
        const autofiyable = new DummyAutofiyable(props);
        expect(autofiyable.getProps()).toEqual(props);
    });

    it("should use passed service and default service", () => {
        const props: DummyProps = {
            dummyProps: 'DUMMY VALUE',
            services: {
                serviceA: (autofiyable: any) => new ServiceA(autofiyable, "PASSED SERVICE A")
            }
        };
        const autofiyable = new DummyAutofiyable(props);

        const aValue = autofiyable.a().getValue();
        const bValue = autofiyable.b().getValue();
        expect(aValue).toEqual("PASSED SERVICE A");
        expect(bValue).toEqual("DEFAULT SERVICE B");
    });

});