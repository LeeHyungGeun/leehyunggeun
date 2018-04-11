import state from '../state';
interface Message {
    email: string;
    body: string;
    regDate?: number;
}

class Message implements Message {
    public email: string;
    public body: string;
    public regDate?: number;
    constructor(message: Message = state.message) {
        this.email = message.email;
        this.body = message.body;
        this.regDate = message.regDate;
    }
}

export default Message;