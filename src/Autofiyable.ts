import { AutofiyableProps } from "./AutofiyableProps";

export interface Autofiyable<ServiceConfiguration , Props extends AutofiyableProps<ServiceConfiguration>>{
    getProps() : Props;
}