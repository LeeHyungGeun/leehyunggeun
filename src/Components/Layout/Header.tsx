import * as React from 'react';
import styled from 'styled-components';
import * as _ from 'lodash';

const Navigation = styled.nav`
    width: 100%;
    background-color: #94d82d;
    & .menu-container {
        display: flex;
        justify-content: flex-end;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        list-style-type: none;
        overflow: hidden;
        margin-right: 2rem;
        & .menu-item {
            padding: 1rem;
            border-radius: 5px;
            cursor: pointer;
            & a {
                text-decoration: none;
                color: #fff;
                outline: none;
                user-select: none;
            }
            &:hover {
                background: #82c91e;
            }
            &.active, :active {
                background: #82c91e;
            }
            & + .menu-item {
                margin-left: 1rem;
            }
        }
    }
`;

type Props = {
    menus: Array<string>;
    menu: string;
    onChangeMenu: Function;
};
type State = {};
class Header extends React.Component<Props, State> {
    render() {
        const {
            onChangeMenu,
            menus,
            menu
        } = this.props;
        return (
            <div>
                <Navigation>
                    <ul className="menu-container">
                        {
                            _.map(menus, (_menu: string, key: number) => {
                                return (
                                    <li 
                                        className={`menu-item ${_menu === menu ? 'active' : ''}`}
                                        key={`menu_${key}`}
                                    >
                                        <a 
                                            href="javascript:;"
                                            onClick={() => { onChangeMenu(_menu); }}
                                        >
                                            {_menu}
                                        </a>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </Navigation>
            </div>
        );
    }
}

export default Header;