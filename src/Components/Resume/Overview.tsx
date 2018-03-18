import * as React from 'react';
import styled from 'styled-components';
import variables from '../../styles/variables';

const View = styled.div`
    margin: 0 auto;
    margin-top: 4rem;
    width: 700px;
    text-align: left;
    & .title {
        color: ${variables.color};
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 2rem;
    }
    & .description {
        font-size: 1.2rem;
        line-height: 2rem;
        color: ${variables.resumeColor};
    }
`;
class Overview extends React.Component {
    render() {
        return (
            <View>
                <h2 className="title">
                    Overview
                </h2>
                <p className="description">
                    I am working as a Front End Developer in Naver (LINE Works).
                    Also, I mange of the Web Service team as a Team Lead. It is not only managing of Front End,
                    but also prototyping of Web Service between Front End and Back End for over half a million customers in Korea and Japan.
                </p>
            </View>
        );
    }
}

export default Overview;