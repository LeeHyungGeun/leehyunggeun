import * as React from 'react';
// import styled from 'styled-components';
import styled from 'styled-components';
import variables from '../../styles/variables';

const MeWrapper = styled.section`
    width: 100%;
    background: ${variables.background};
    & .profile {
        text-align: center;
        & .image {
            margin-top: 5rem;
            margin-bottom: 5rem;
            border-radius: 50%;
            width: 13rem;
            height: 13rem;
        }
        & .description {
            font-size: 3rem;
            color: #fff;
            font-weight: 600;
            margin-bottom: 5rem;
        }
        & .link {
            a {
                text-decoration: none;
                color: inherit;
                & + a {
                    margin-left: 3rem;
                }
                & i {
                    font-size: 3rem;
                }
                & i:hover {
                    cursor: pointer;
                    color: white;
                }
            }
        }
    }
`;

class Me extends React.Component {
    render() {
        return (
            <MeWrapper>
                <div className="profile">
                    <img className="image" src="https://avatars1.githubusercontent.com/u/2471651?s=460&v=4" />
                    {/* <img className="image" src="https://avatars1.githubusercontent.com/u/2471651?s=460&v=4" /> */}
                    <p className="description">
                        Hello, I'm Ken!
                    </p>
                    <div className="link">
                        <a 
                            href="https://github.com/leehyunggeun"
                            target="_blank"
                        >
                            <i className="fa fa-github" title="Github" />
                        </a>
                        <a 
                            href="https://linkedin.com/in/leehyunggeun"
                            target="_blank"
                        >
                            <i className="fa fa-linkedin" title="Linkedin" />
                        </a>
                    </div>
                </div>
            </MeWrapper>
        );
    }
}

export default Me;