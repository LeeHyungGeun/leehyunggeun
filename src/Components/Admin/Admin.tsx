import * as React from 'react';
import * as _ from 'lodash';
import Message from '../../../server/src/models/Message';
import styled from 'styled-components';

const View = styled.section`
    & .message-table {
        width: 640px;
        margin: 0 auto;
        border: 1px solid rgb(51, 51, 51);
        border-collapse: collapse;
        & th, td {
            padding: 1rem;
            border: 1px solid rgb(51, 51, 51);
        }
    }
`;
type Props = {
    messages: Array<Message>;
};
type State = {

};
class Admin extends React.Component<Props, State> {
    render() {
        const {
            messages
        } = this.props;
        return (
            <View>
                <h2>
                    Admin Page
                </h2>
                <table className="message-table">
                    <thead>
                        <tr>
                            <th className="emailtd">Email</th>
                            <th>Body</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            _.map(messages, (message, key) => {
                                return (
                                    <tr
                                        key={`message_${key}`}
                                        className="message-item"
                                    >
                                        <td className="email">
                                            {message.email}
                                        </td>
                                        <td className="body">
                                            {message.body}
                                        </td>
                                        <td className="regdate">
                                            {message.regDate}
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </View>
        );
    }
}
export default Admin;