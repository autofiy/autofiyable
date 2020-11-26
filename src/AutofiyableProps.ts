import { ServiceConfiguration } from "./ServiceConfiguration";

export interface AutofiyableProps<SC extends ServiceConfiguration = ServiceConfiguration> {

    services?: Partial<SC>;

}