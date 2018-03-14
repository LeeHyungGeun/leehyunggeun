import * as React from 'react';
import withLayout from '../HOCs/withLayout';

@withLayout
class MainContainer extends React.Component {
    render() {
        return (
            <div>
                This is main page.
            </div>
        );
    }
}

export default MainContainer;