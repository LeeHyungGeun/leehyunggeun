import * as React from 'react';
import styled from 'styled-components';
import * as _ from 'lodash';
const View = styled.div`
    .title {
        margin: 0;
        font-weight: 200;
        margin-bottom: 0.5rem;
    }
    .body {
        margin-bottom: 0.5rem;
    }
    .category {
        /* margin-bottom: 0.5rem; */
        padding: 0;
        margin: 0;
        margin-bottom: 0.5rem;
        .cate-issue {
            background-color: #7057ff;
            color: #ffffff;
            padding: 3px 10px;
        }
        .cate-idea {
            background-color: #128A0C;
            padding: 3px 10px;
            color: #ffffff;
        }
    }
    .image {
        margin-bottom: 0.5rem;
        & > img + img{ 
            margin-left: 2rem;
        }
        /* &img {
            display: inline-block;
        } */
    }
`;
type Props = {
    title: string;
    category: number;
    body?: string;
    images?: Array<string>;
};
type State = {};
class Issue extends React.Component<Props, State> {
    render() {
        const {
            title,
            category,
            body,
            images,
        } = this.props;
        return (
            <View>
                <div className="category">
                {
                    category === 1 ? <span className="cate-issue">issue</span> :
                    category === 2 ? <span className="cate-idea">idea</span> : 
                    null
                }
                </div>
                <h3 className="title">
                    <strong>{title}</strong>
                </h3>
                <p className="body" dangerouslySetInnerHTML={{__html: body || ''}} />
                <div className="image">
                {
                    images ? 
                    _.map(images, (image, key) => {
                        return <img key={`image_${key}`} src={image} width="420" height="auto" />;
                    }) :
                    null
                }
                </div>
            </View>
        );
    }
}
export default Issue;