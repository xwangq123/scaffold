import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom';
const SubMenu = Menu.SubMenu;

class SidebarMenu extends Component {
    rootSubmenuKeys = ['Secutity', 'Channel'];
    state = {
        openKeys: []
    };
    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : []
            });
        }
    };
    render() {
        return (
            <Menu
                mode="inline"
                theme="dark"
                openKeys={this.state.openKeys}
                inlineCollapsed={true}
                onOpenChange={this.onOpenChange}>
                <SubMenu
                    key="Secutity"
                    title={
                        <span>
                            <Icon type="appstore" />
                            <span>权限管理</span>
                        </span>
                    }>
                    <SubMenu key="SecondSecutity" title="权限管理">
                        <Menu.Item key="Organization">组织管理</Menu.Item>
                        <Menu.Item key="Personnel">人员管理</Menu.Item>
                        <Menu.Item key="Role">角色管理</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu
                    key="Channel"
                    title={
                        <span>
                            <Icon type="appstore" />
                            <span>网络渠道</span>
                        </span>
                    }>
                    <SubMenu key="DealerInfo" title="经销商信息管理">
                        <Menu.Item key="/dealer">
                            <NavLink to="/dealer">基本信息管理</NavLink>
                        </Menu.Item>
                        <Menu.Item key="/subDealer">
                            <NavLink to="/subDealer">二级站基本信息管理</NavLink>
                        </Menu.Item>
                        <Menu.Item key="dealerAddress">地址维护(营销公司)</Menu.Item>
                        <Menu.Item key="dealerPersonnel">人员管理</Menu.Item>
                        <Menu.Item key="dealerKeyPosition">岗位管理</Menu.Item>
                    </SubMenu>
                    <SubMenu key="MarketDiscipline" title="市场纪律管理">
                        <Menu.Item key="VehicleModelPrice">车型报备价格维护</Menu.Item>
                        <Menu.Item key="FilingApplication">异地购车备案管理</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <Menu.Item key="Sale">
                    <Icon type="appstore" />
                    <span>整车销售</span>
                </Menu.Item>
                <Menu.Item key="3">
                    <Icon type="appstore" />
                    <span>协同管理</span>
                </Menu.Item>
                <Menu.Item key="4">
                    <Icon type="appstore" />
                    <span>客户关系</span>
                </Menu.Item>
                <Menu.Item key="5">
                    <Icon type="appstore" />
                    <span>整车仓储</span>
                </Menu.Item>
                <Menu.Item key="6">
                    <Icon type="appstore" />
                    <span>整车物流</span>
                </Menu.Item>
                <Menu.Item key="7">
                    <Icon type="appstore" />
                    <span>统计分析</span>
                </Menu.Item>
            </Menu>
        );
    }
}

export default SidebarMenu;
