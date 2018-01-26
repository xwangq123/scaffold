import React, { Component } from 'react';
import { Row, Col, Form, Input, Button, Card } from 'antd';

import PageHeader from './PageHeader';
import './DealerPost.css';

class DealerPost extends Component {
    render() {
        return (
            <div>
                <PageHeader />
                <Card style={{ marginTop: '10px' }} bordered={false}>
                    <div className="tableListForm">
                        <Form layout="inline">
                            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                                <Col md={8} sm={24}>
                                    <Form.Item label="分公司名称">
                                        <Input placeholder="请输入" />
                                    </Form.Item>
                                </Col>
                                <Col md={8} sm={24}>
                                    <Form.Item label="岗位编号">
                                        <Input placeholder="请输入" />
                                    </Form.Item>
                                </Col>
                                <Col md={8} sm={24}>
                                    <span>
                                        <Button type="primary" htmlType="submit">
                                            查询
                                        </Button>
                                    </span>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </Card>
            </div>
        );
    }
}

export default DealerPost;
