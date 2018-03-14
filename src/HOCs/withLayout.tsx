import * as React from 'react';
import Layout from '../Containers/LayoutContainer';

function withLayout(WrappedComponent: React.ComponentType): any {
    return class WLC extends React.Component {
        render() {
            return (
                <Layout>
                    <WrappedComponent {...this.props} />
                </Layout>
            );
        }
    };
}

export default withLayout;