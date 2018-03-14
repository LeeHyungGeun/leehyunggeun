import * as React from 'react';
import Header from '../Components/Layout/Header';
import {
    bindActionCreators
} from 'redux';
import {
    connect
} from 'react-redux';
import * as headerActions from '../actions/headerActions';

type Props = {
    actions: any;
    header: any;
};
class Layout extends React.Component<Props> {
    constructor(props: Props) {
        super(props);

        this.onChangeMenu = this.onChangeMenu.bind(this);
    }
    onChangeMenu(menu: string) {
        const {
            actions
        } = this.props;
        actions.changeMenu(menu);
    }
    render() {
        const {
            header,
            children
        } = this.props;
        return (
            <div>
                <Header 
                    menus={header.menus}
                    menu={header.menu}
                    onChangeMenu={this.onChangeMenu}
                />
                {children}
            </div>
        );
    }
}
const mapStateToProps = function(state: any) {
    return {
        header: state.header
    };
};
const mapDispatchToProps = function(dispatch: any) {
    return {
        actions: bindActionCreators(headerActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);