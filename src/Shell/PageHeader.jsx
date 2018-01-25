import React from 'react';
import { connect } from 'react-redux';
import { IconOAB, IconLogout } from './icons';
import { Icon } from 'antd';

import './page-header.css';

class PageHeader extends React.PureComponent {
    render() {
        return (
            <Icon
                className="trigger"
                type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.props.toggle}
            />
        );
    }
}

const mapStateToProps = state => ({
    inTimeCounts: state.getIn(['shell', 'data', 'inTimeCounts']) || 0,
    outTimeCounts: state.getIn(['shell', 'data', 'outTimeCounts']) || 0
});

export default connect(mapStateToProps, null)(PageHeader);
