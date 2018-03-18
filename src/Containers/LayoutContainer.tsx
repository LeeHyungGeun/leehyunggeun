import * as React from 'react';
import Header from '../Components/Layout/Header';
import {
    bindActionCreators
} from 'redux';
import {
    connect
} from 'react-redux';
import {
    withRouter,
    RouteComponentProps
} from 'react-router-dom';
import * as headerActions from '../actions/headerActions';

type Props = {
    actions: any;
    header: any;
    menu: string;
};
class Layout extends React.Component<Props & RouteComponentProps<any>> {
    constructor(props: Props & RouteComponentProps<any>) {
        super(props);

        this.onChangeMenu = this.onChangeMenu.bind(this);
    }
    onChangeMenu(menu: string) {
        this.props.history.push(`/${menu}`);
    }
    componentDidMount() {
        this.props.actions.changeMenu(this.props.menu);
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));