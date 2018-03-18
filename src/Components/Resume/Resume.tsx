import * as React from 'react';
import styled  from 'styled-components';
import Overview from './Overview';
import ResumeItem from './ResumeItem';
import {
    Resume as MResume
} from '../../Models';
const View = styled.section`
    width: 100%;
    text-align: center;
    & .items {
        margin-bottom: 2rem;
    }
`;
type Props = {
    experience: MResume,
    education: MResume,
    community: MResume
};
type State = {};
class Resume extends React.Component<Props, State> {
    render() {
        const {
            experience,
            education,
            community
        } = this.props;
        return (
            <View>
                <Overview />
                <div className="items">
                    <ResumeItem {...experience} />
                    <ResumeItem {...education} />
                    <ResumeItem {...community} />
                </div>
            </View>
        );
    }
}

export default Resume;