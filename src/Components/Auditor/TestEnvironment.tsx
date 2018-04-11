import * as React from 'react';
import styled from 'styled-components';

const View = styled.div`
    .item {
        display: inline-block;
        width: 15rem;
    }
    .item + .item {
        margin-left: 3rem;
    }
`;
type Props = {
    appVersion: string;
    osVersion: string;
    date: string;
    browser: string;
};
type State = {};
class TestEnvironment extends React.Component<Props, State> {
    render() {
        const {
            appVersion,
            osVersion,
            date,
            browser,
        } = this.props;
        return (
            <View>
                <h2>
                    Test Environment
                </h2>
                <div>
                    <span className="item">App Version: {appVersion}</span>
                    <span className="item">OS Version: {osVersion}</span><br />
                    <span className="item">Browser: {browser}</span>
                    <span className="item">DNS: China Telecom, Optus</span><br />
                    <span className="item">Date: {date}</span>
                    <span className="item">Total: 10 items (Issue: 3, Idea: 7)</span>
                </div>
            </View>
        );
    }
}
export default TestEnvironment;