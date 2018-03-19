import * as React from 'react';
import styled from 'styled-components';
import withLayout from '../../HOCs/withLayout';

const View = styled.section`
    margin: 0 auto;
    margin-top: 6rem;
    margin-left: 5rem;
    width: 100vw;
    .title {
        font-size: 2.5rem;
        font-weight: 400;
        margin-bottom: 1rem;
    }
    .description {
        font-size: 1.2rem;
        color: #888;
    }
`;
@withLayout
class ThankYou extends React.Component {
    render() {
        return (
            <View>
                <h2 className="title">
                    Thank You!
                </h2>
                <p className="description">
                    I just got an email, and I will get back to you soon.
                </p>
            </View>
        );
    }
}

export default ThankYou;