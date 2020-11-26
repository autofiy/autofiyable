import { mock } from "jest-mock-extended";
import { Autofiyable } from "../Autofiyable";
import { ServiceBase } from "../Service";

describe("ServiceBase", () => {

    it("should return autofiyable instance", () => {
        const autofiyable = mock<Autofiyable>();
        const service = new ServiceBase(autofiyable);
        expect(service.getAutofiyable()).toBe(autofiyable);
    });

});