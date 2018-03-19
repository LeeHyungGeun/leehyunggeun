interface Contact {
    email: string;
    body: string;
}
class Contact implements Contact {
    public email: string;
    public body: string;
}
export default Contact;