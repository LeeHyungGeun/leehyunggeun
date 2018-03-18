interface ResumeDetail {
    company: string;
    position: string;
    date: string;
    skill?: string;
    details: Array<string>;
}
class ResumeDetail implements ResumeDetail {
    company: string;
    position: string;
    date: string;
    skill?: string;
    details: Array<string>;
}
export default ResumeDetail;