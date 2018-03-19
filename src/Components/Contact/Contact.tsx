import * as React from 'react';
import styled from 'styled-components';
import variables from '../../styles/variables';
import {
    Contact as MContact
} from '../../Models';

const View = styled.section`
    margin: 0 auto;
    width: 34rem;
    margin-top: 5rem;
    & .container {
        flex: 1;
        & .title {
            color: #333;
            font-size: 3rem;
            font-weight: 400;
            margin-bottom: 0.7rem;
        }
        & .description {
            font-size: 1.2rem;
            color: #888;
            margin-bottom: 0.7rem;
        }
        & .email {
            display: block;
            border-radius: 7px;
            padding: 0.5rem;
            border: 2px solid #888;
            font-size: 1.5rem;
            line-height: 2.5rem;
            outline: none;
            margin-bottom: 0.7rem;
            font-weight: 200;
            & :active, :focus {
                border-color: ${variables.color};
            }
            & ::placeholder {
                color: #8A8A8A;
            }
        }
        & .body {
            border-radius: 7px;
            border: 2px solid #888;
            padding: 0.5rem;
            resize: none;
            overflow: auto;
            width: 100%;
            height: 20rem;
            font-size: 1.5rem;
            line-height: 2.5rem;
            outline: none;
            font-weight: 200;
            margin-bottom: 0.7rem;
            & :active, :focus {
                border-color: ${variables.color};
            }
            & ::placeholder {
                color: #8A8A8A;
            }
        }
        & .btn-send {
            border: 2px solid #888;
            padding: 0.4rem 1rem;
            font-size: 1.3rem;
            font-weight: 200;
            border-radius: 5px;
            outline: none;
            user-select: none;
            &:focus {
                border-color: ${variables.color};
            }
            &:hover,:active {
                background: rgba(92, 124, 250, 0.5);
                border-color: ${variables.color};
                cursor: pointer;
            }
        }
    }
`;

type Props = {
    contact: MContact;
    onChangeEmail: React.ChangeEventHandler<HTMLInputElement>;
    onChangeBody: React.ChangeEventHandler<HTMLTextAreaElement>;
    onSendMessage: Function;
};
class Contact extends React.Component<Props> {
    render() {
        return (
            <View>
                <div className="container">
                    <h2 className="title">Hi, mate!</h2>
                    <p className="description">
                        If you want to contact to me, do not hesitate to send a message!!
                    </p>
                    <input 
                        type="text"
                        className="email"
                        tabIndex={1}
                        onChange={this.props.onChangeEmail}
                        placeholder={`Your email address`}
                        value={this.props.contact.email}
                    />
                    <textarea
                        className="body"
                        tabIndex={2}
                        onChange={this.props.onChangeBody}
                        placeholder={`Message`}
                        value={this.props.contact.body}
                    />
                    <button 
                        className="btn-send"
                        tabIndex={3}
                        onClick={() => { this.props.onSendMessage(this.props.contact.email, this.props.contact.body); }}
                    >
                        Send
                    </button>
                </div>
            </View>
        );
    }
}

export default Contact;