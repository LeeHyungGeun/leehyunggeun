import * as React from 'react';
import styled from 'styled-components';
import Message from '../../../server/src/models/Message';
import * as _ from 'lodash';
import * as moment from 'moment';

const View = styled.section`
    margin: 0 auto;
    width: 840px;
    margin-top: 5rem;
    & .message-list {
        list-style: none;
        word-break: break-all;
        & .message-item {
            & + * {
                border-top: 1px solid black;
                padding-top: 1rem;
                margin-top: 1rem;
            }
            & .regdate {
                color: gray;
                font-size: 0.8rem;
            }
            & .body {
                margin-top: 0.5rem;
                color: black;
            }
            & .email {
                margin-top: 0.5rem;
                font-size: 0.9rem;
                color: #343a40;
                display: block;
            }
        }
    }
`;
type Props = {
    messages: Array<Message>;
};
type State = {};
class List extends React.Component<Props, State> {
    render() {
        let {
            messages
        } = this.props;
        messages = _.orderBy(messages, ['regDate'], ['desc']);
        console.log(messages);
        return (
            <View>
                <ul className="message-list">
                    {
                        _.map(messages, (message, key) => {
                            return (
                                <li
                                    key={`message_${key}`}
                                    className="message-item"
                                >
                                    {message.regDate ? <span className="regdate">{moment(message.regDate).format('YYYY年MM月DD日 hh:mm:ss A')}</span> : null}
                                    <p 
                                        className="body"
                                        dangerouslySetInnerHTML={{__html: message.body.replace(/\n|\r|\n\r\r/gim, '<br />')}}
                                    />
                                    <span className="email">{message.email}</span>
                                </li>
                            );
                        })
                    }
                </ul>
            </View>
        );
    }
}
export default List;