import * as React from 'react';
import Layout from '../Containers/LayoutContainer';

type Props = {
    menu: string;
};
function withLayout(WrappedComponent: React.ComponentType): any {
    return class WLC extends React.Component<Props> {
        render() {
            return (
                <Layout {...this.props}>
                    <WrappedComponent {...this.props} />
                </Layout>
            );
        }
    };
}

export default withLayout;