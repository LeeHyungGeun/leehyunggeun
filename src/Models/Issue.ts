interface Issue {
    title: string;
    category: number;
    body?: string;
    images?: Array<string>;
}
class Issue implements Issue {
    public title: string;
    public category: number;
    public body?: string;
    public images?: Array<string>;
    constructor(props: Issue) {
        this.title = props.title;
        this.category = props.category;
        this.body = props.body;
        this.images = props.images;
    }
}
export default Issue;