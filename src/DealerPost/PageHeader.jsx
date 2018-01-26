import React, { Component } from 'react';
import style from './PageHeader.css';
import { Breadcrumb } from 'antd';

class PageHeader extends Component {
    render() {
        return (
            <div className={style.PageHeader}>
                <Breadcrumb>
                    <Breadcrumb.Item>网络渠道</Breadcrumb.Item>
                    <Breadcrumb.Item>经销商信息管理</Breadcrumb.Item>
                    <Breadcrumb.Item>经销商岗位管理</Breadcrumb.Item>
                </Breadcrumb>
                {this.props.children}
            </div>
        );
    }
}

export default PageHeader;
