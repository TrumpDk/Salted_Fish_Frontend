import React from 'react';

export default function asyncComponent(lazyLoadComponent) {
    return class AsyncComponent extends React.Component {
        state = {
            component: null
        }

        async componentWillMount() {
            const { default: component } = await lazyLoadComponent();
            this.state = ({
                component: component
            });
        }

        render() {
            const AsyncCom = this.state.component;
            return AsyncCom ? <AsyncCom {...this.props}></AsyncCom> : null;
        }
    };
}