import * as React from 'react';
import styled from 'styled-components';
import variables from '../../styles/variables';
import * as _ from 'lodash';
import { 
    Resume as MResume,
    ResumeDetail
} from '../../Models';

const View = styled.div`
    margin: 0 auto;
    margin-top: 4rem;
    width: 700px;
    text-align: left;
    & .category {
        color: ${(props: any) => { return props.background ? props.background : variables.experienceColor; }};
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 2rem;
    }
    & .item {
        display: flex;
        border-left: 0.3rem ${(props: any) => { return props.background ? props.background : variables.experienceColor; }} solid;
        padding-bottom: 1.5rem;
        & .description {
            left: -1rem;
            position: relative;

            & .company {
                font-size: 2rem;
                font-weight: 200;
                margin-bottom: 0.2rem;
            }
            & .position {
                font-size: 1.1rem;
                color: #888;
                margin-bottom: 0.2rem;
            }
            & .date, .skill {
                font-size: 0.9rem;
                color: #888;
                margin-bottom: 0.2rem;
            }
            & ul {
                margin-top: 1rem;
                padding-left: 1rem;
                list-style: disc outside none;
                line-height: 1.5rem;
                margin-bottom: 0.5rem;
                font-size: 1.1rem;
                color: #333;
                & li {
                    margin-bottom: 0.5rem;
                }
            }
        }
    }
`;

const SpinStyled = styled.div`
    & .spin {
        position: relative;
        left: -2.4rem;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        background: ${(props: any) => { return props.background ? props.background : variables.experienceColor; }};
        top: -1.4rem;
        border: 1rem solid #f9f9f9;
        & .spin-sub {
            position: absolute;
            width: 0.7rem;
            height: 0.7rem;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border: white solid 0.6em;
            border-radius: 50%;
            background: ${(props: any) => { return props.background ? props.background : variables.experienceColor; }};
        }
    }
`;
const Spin = (props: any) => {
    return (
        <SpinStyled
            {...props}
        >
            <div className="spin">
                <div className="spin-sub" />
            </div>
        </SpinStyled>
    );
};
type Props = MResume;
class ResumeItem extends React.Component<Props> {
    render() {
        return (
            <View
                {...this.props}
            >
                <h2 className="category">
                    {this.props.category}
                </h2>
                {
                    _.map(this.props.items, (item: ResumeDetail, key: number) => {
                        return (
                            <div 
                                className="item"
                                key={`item_${key}`}
                            >
                                <Spin background={this.props.background} />
                                <div className="description">
                                    <h3 className="company">
                                        {item.company}
                                    </h3>
                                    <div className="position">
                                        {item.position}
                                    </div>
                                    <div className="date">
                                        {item.date}
                                    </div>
                                    {
                                        item.skill ? 
                                        <div className="skill">
                                            {item.skill}
                                        </div> :
                                        null
                                    }
                                    <ul>
                                        {
                                            _.map(item.details, (detail: string, detailKey: number) => {
                                                return (
                                                    <li key={`detail${detailKey}`}>
                                                        {detail}
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        );
                    })
                }
            </View>
        );
    }
}

export default ResumeItem;