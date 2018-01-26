import React, { Component } from 'react';
import { Layout } from 'antd';
import PageHeader from './PageHeader';
import SidebarMenu from './SidebarMenu';
import PageFooter from './PageFooter';
import styles from './shell.css';

const { Header, Sider, Content } = Layout;

class Shell extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collapsed: false
        };
    }

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    render() {
        return (
            <Layout>
                {/*菜单栏*/}
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                    className={styles.sider}
                    breakpoint="lg"
                    width={256}>
                    <SidebarMenu />
                </Sider>
                <Layout>
                    <Header className="header">
                        <PageHeader toggle={this.toggleCollapsed} collapsed={this.state.collapsed} />
                    </Header>
                    <Content style={{ margin: '24px 24px 0', height: '100%' }}>{this.props.children}</Content>
                    <PageFooter copyright="&copy;&nbsp;2018 上海晨阑数据技术股份有限公司" />
                </Layout>
            </Layout>
        );
    }
}
export default Shell;
