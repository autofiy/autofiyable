import {AutofiyableProps} from "./AutofiyableProps";
import {ServiceConfiguration} from "./ServiceConfiguration";
import React from "react";
import {IServiceProvider} from "./ServiceProvider";

export interface Autofiyable<SC extends ServiceConfiguration = ServiceConfiguration,
    Props extends AutofiyableProps<SC> = AutofiyableProps<SC>> {
    getProps(): Props;

    getDefaultServices(): SC;

    getServiceProvider(): IServiceProvider;
}


export abstract class AutofiyableComponent<Props extends AutofiyableProps<SC>, State, SC extends ServiceConfiguration>
    extends React.Component<Props, State>
    implements Autofiyable<SC, Props> {

    protected constructor(props: Props) {
        super(props);
        this.initializeServices();
    }

    protected abstract initializeServices(): void;

    getProps(): Props {
        return this.props;
    }

    abstract getDefaultServices(): SC;


    abstract getServiceProvider(): IServiceProvider;
}




