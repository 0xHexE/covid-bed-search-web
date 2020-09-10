import React from 'react';
import './styles.less';
import { Form, Input } from 'antd';

export default function SearchPlace() {
  const [form] = Form.useForm();

  return (
    <>
      <div className="search-wrapper">
        <Form form={form}>
          <Form.Item>
            <Input.Search
              size="large"
              className="search-input"
              placeholder="Search place"
            />
          </Form.Item>
        </Form>
      </div>
    </>
  );
}
