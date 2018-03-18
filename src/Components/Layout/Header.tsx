import * as React from 'react';
import styled from 'styled-components';
import * as _ from 'lodash';
import variables from '../../styles/variables';

const Navigation = styled.nav`
    width: 100%;
    background-color: ${variables.headerBackground};
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
                background: ${variables.background};
            }
            &.active, :active {
                background: ${variables.background};
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
                                        onClick={() => { onChangeMenu(_menu); }}
                                        key={`menu_${key}`}
                                    >
                                        <a 
                                            href="javascript:;"
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