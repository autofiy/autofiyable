import { AutofiyableProps } from './../AutofiyableProps';
import { DummyServiceConfiguration } from './DummyServiceConfiguration';

export interface DummyProps extends AutofiyableProps<DummyServiceConfiguration> {
    dummyProps: any;
}