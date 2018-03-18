import * as React from 'react';
import withLayout from '../HOCs/withLayout';
import Resume from '../Components/Resume/Resume';
import {
    bindActionCreators
} from 'redux';
import {
    connect
} from 'react-redux';
import * as resumeActions from '../actions/resumeActions';

type Props = {
    resume: any,
    actions: any,
};
type State = {};
@withLayout
class ResumeContainer extends React.Component<Props, State> {
    render() {
        return (
            <Resume {...this.props.resume}/>
        );
    }
}
const mapStateToProps = function(state: any) {
    return {
        resume: state.resume
    };
};
const mapDispatchToProps = function(dispatch: any) {
    return {
        actions: bindActionCreators(resumeActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResumeContainer);