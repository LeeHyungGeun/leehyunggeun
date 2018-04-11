import * as React from 'react';
import styled from 'styled-components';
import Issue from './Issue';
import TestEnvironment from './TestEnvironment';
import * as _ from 'lodash';
import {
    Issue as MIssue
} from '../../Models';

const View = styled.section`
    margin: 0 auto;
    width: 920px;
    margin-top: 1rem;
    .issues {
        margin-top: 1rem;
        & > div {
            & + * {
                margin-top: 2rem;
            }
        }
    }
    .thankyou {
        margin-top: 2rem;
        margin-bottom: 5rem;
        font-size: 2rem;
    }
`;
type Props = {
    iauditor: {
        issues: Array<MIssue>;
    }
};
type State = {};
class Auditor extends React.Component<Props, State> {
    render() {
        const {
            iauditor
        } = this.props;
        console.log(iauditor);
        return (
            <View>
                <p>
                    Hello. I am Lee. For the interview of Safety Culture, I have used iAuditor for over a week.<br />
                    I think it helps me understand about Safety Culture's product, and I would like to start developing quickly as soon as I possible.<br />
                    <br />
                    The below are my result using iAuditor, and there are two types: issue and idea.<br />
                    The issue is I think it should be fixed.<br />
                    The idea is my idea to improve the iAuditor in my experience of developing for global market.<br />
                    <br />
                    In my writing is not very well, and I worry it makes you unhappy because I could be use wrong word.<br />
                    However, it was not my purpose. I just want it to help Safety Culture.
                </p>
                <br />
                <TestEnvironment
                    appVersion={`iAuditor 6.3.2 (11076)`}
                    osVersion={`iOS 11.3`}
                    date={`07.APR.18`}
                    browser={`Safari`}

                />
                <div className="issues">
                {
                    iauditor ? _.map(iauditor.issues, (issue: MIssue, key) => {
                        const {
                            title,
                            category,
                            body,
                            images
                        } = issue;
                        return (
                            <Issue
                                key={`issue_${key}`}
                                title={`${key + 1}. ${title}`}
                                category={category}
                                body={body}
                                images={images}
                            />
                        );
                    }) : 
                    null
                }
                </div>
                <div className="thankyou">
                    Thank You.
                </div>
            </View>
        );
    }
}
export default Auditor;