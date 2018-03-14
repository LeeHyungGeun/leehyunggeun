import * as React from 'react';
import Me from '../Components/Me/Me';
import withLayout from '../HOCs/withLayout';

@withLayout
class MeContainer extends React.Component {
    render() {
        return (
            <Me />
        );
    }
}

export default MeContainer;