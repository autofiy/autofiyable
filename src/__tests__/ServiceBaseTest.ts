import { mock } from "jest-mock-extended";
import { Autofiyable } from "../Autofiyable";
import { AutofiyableServiceBase } from "../AutofiyableService";

describe("ServiceBase", () => {

    it("should return autofiyable instance", () => {
        const autofiyable = mock<Autofiyable>();
        const service = new AutofiyableServiceBase(autofiyable);
        expect(service.getAutofiyable()).toBe(autofiyable);
    });

});