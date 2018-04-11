import * as React from 'react';
import withLayout from '../HOCs/withLayout';
import Auditor from '../Components/Auditor/Auditor';
import {
    connect
} from 'react-redux';
// import { bindActionCreators } from 'redux';
import {
    RouteComponentProps,
    withRouter
} from 'react-router-dom';
import { Issue } from '../Models';

type Props = {
    iauditor: {
        issues: Array<Issue>;
    };
};
type State = {};
@withLayout
class AuditorContainer extends React.Component<Props & RouteComponentProps<any>, State> {
    constructor(props: Props & RouteComponentProps<any>) {
        super(props);
    }
    render() {
        const {
            iauditor
        } = this.props;
        return (
            <Auditor 
                iauditor={iauditor}
            />
        );
    }
}
const mapStateToProps = function (state: any) {
    const iauditor: {
        issues: Array<Issue>;
    } = state.iauditor;
    return {
        iauditor
    };
};
const mapDispatchToProps = function (dispatch: any) {
    return {

    };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuditorContainer));