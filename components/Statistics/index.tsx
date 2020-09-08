import React from 'react';
import { Card, Col, PageHeader, Row, Statistic, Table, Tag, Input } from 'antd';
import { PhoneOutlined, GlobalOutlined } from '@ant-design/icons';

const columns = [
  {
    title: 'Name',
    key: 'name',
    render: (row) => (
      <>
        <a>{row.name}</a>
        <br />
        {row.address}
        <br />
        Last updated at {new Date(row.lastUpdated).toDateString()}
        <br />
        <PhoneOutlined />
        &nbsp;
        {row.contactNumber.map((res) => (
          <a href={`tel:${res}`}>{res}</a>
        ))}
        &nbsp;
        <GlobalOutlined />
        &nbsp;
        <a href="location">Location</a>
      </>
    ),
    width: '75%',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    render: (row) => row && <Tag>{row}</Tag>,
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'Total',
  },
  {
    title: 'Vacant',
    key: 'vacant',
    dataIndex: 'vacant',
  },
];

export function Statistics({ input }: { input: any[] }) {
  return (
    <>
      <style jsx global>{`
        .card-container {
          margin-top: 32px;
        }
      `}</style>
      <Row>
        <Col span={24 / 3}>
          <Card>
            <Statistic title="Total" value={112893} />
          </Card>
        </Col>
        <Col span={24 / 3}>
          <Card>
            <Statistic title="Occupied" value={112893} />
          </Card>
        </Col>
        <Col span={24 / 3}>
          <Card>
            <Statistic title="Vacant" value={112893} />
          </Card>
        </Col>
      </Row>
      <div className="card-container">
        <Card bodyStyle={{ padding: 0 }}>
          <PageHeader
            className="site-page-header"
            backIcon={null}
            onBack={() => null}
            title="Hospitals"
            extra={
              <>
                <Input.Search placeholder="Search hospital" />
              </>
            }
          />
        </Card>
        <Table columns={columns} dataSource={input} />
      </div>
    </>
  );
}
