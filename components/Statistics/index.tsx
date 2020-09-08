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
        Last updated at {row.lastUpdated.toDateString()}
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

const data = [
  {
    key: '1',
    name: 'John Brown',
    type: 'PVT',
    address: 'New York No. 1 Lake Park',
    lastUpdated: new Date(),
    contactNumber: ['8788339915'],
    location: [12, 123],
    total: 12,
    vacant: 123,
  },
  {
    key: '2',
    name: 'Jim Green',
    type: 'PVT',
    address: 'London No. 1 Lake Park',
    lastUpdated: new Date(),
    contactNumber: ['8788339915'],
    location: [12, 123],
    total: 12,
    vacant: 123,
  },
  {
    key: '3',
    name: 'Joe Black',
    type: 'PVT',
    address: 'Sidney No. 1 Lake Park',
    lastUpdated: new Date(),
    contactNumber: ['8788339915'],
    location: [12, 123],
    total: 12,
    vacant: 123,
  },
];

export function Statistics() {
  return (
    <>
      <Row gutter={16}>
        <Col span={6}>
          <Card>
            <Statistic title="Total" value={112893} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Occupied" value={112893} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Vacant" value={112893} />
          </Card>
        </Col>
      </Row>
      <div style={{ marginTop: '24px' }}>
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
        <Table columns={columns} dataSource={data} />
      </div>
    </>
  );
}
