import * as React from 'react';
// import Admin from '../Components/Admin/Admin';
import axios from 'axios';
import Message from '../../server/src/models/Message';
import List from '../Components/Admin/List';

type Props = {

};
type State = {
    messages: Array<Message>;
};
class AdminContainer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            messages: []
        };
    }
    componentDidMount() {
        axios({
            url: '/api/getMessages'
        })
        .then((response) => {
            return response.data;
        })
        .then(({
            code,
            message,
            data
        }) => {
            if (code === '00') {
                this.setState({
                    messages: data
                });
            }
        });
    }
    render() {
        return (
            <section className="admin-wrapper">
                {/* <Admin
                    messages={this.state.messages}
                /> */}
                <List
                    messages={this.state.messages}
                />
            </section>
        );
    }
}
export default AdminContainer;