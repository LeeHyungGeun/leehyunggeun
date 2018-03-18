import ResumeDetail from './ResumeDetail';
interface Resume {
    background?: string;
    category: string;
    items: Array<ResumeDetail>;
}
class Resume implements Resume {
    public background?: string;
    public category: string;
    public items: Array<ResumeDetail>;
}
export default Resume;