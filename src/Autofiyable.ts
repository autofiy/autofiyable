import { AutofiyableProps } from "./AutofiyableProps";
import { ServiceConfiguration } from "./ServiceConfiguration";

export interface Autofiyable<SC extends ServiceConfiguration = ServiceConfiguration,
    Props extends AutofiyableProps<SC> = AutofiyableProps<SC>> {
    getProps(): Props;

    getDefaultServices(): SC;
}