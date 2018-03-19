import * as React from 'react';
import {
    bindActionCreators
} from 'redux';
import {
    connect
} from 'react-redux';
import {
    RouteComponentProps,
    withRouter
} from 'react-router-dom';
import { Contact as MContact } from '../Models';
import withLayout from '../HOCs/withLayout';
import Contact from '../Components/Contact/Contact';
import * as contactActions from '../actions/contactActions';

type Props = {
    contact: MContact;
    actions: any;
};
type State = {};
@withLayout
class ContactContainer extends React.Component<Props & RouteComponentProps<any>, State> {
    constructor(props: Props & RouteComponentProps<any>) {
        super(props);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeBody = this.onChangeBody.bind(this);
        this.onSendMessage = this.onSendMessage.bind(this);
    }
    onChangeEmail(e: React.ChangeEvent<HTMLInputElement>) {
        this.props.actions.changeEmail(e.target.value);
    }
    onChangeBody(e: React.ChangeEvent<HTMLTextAreaElement>) {
        this.props.actions.changeBody(e.target.value);
    }
    onSendMessage(email: string, body: string) {
        this.props.actions.sendMessage(email, body, this.props.history);
    }
    render() {
        return (
            <Contact 
                onChangeEmail={this.onChangeEmail}
                onChangeBody={this.onChangeBody}
                onSendMessage={this.onSendMessage}
                {...this.props}
            />
        );
    }
}

const mapStateToProps = function(state: any) {
    return {
        contact: state.contact
    };
};
const mapDispatchToProps = function(dispatch: any) {
    return {
        actions: bindActionCreators(contactActions, dispatch)
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContactContainer));