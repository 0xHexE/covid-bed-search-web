import { PageHeader } from 'antd';
import React from 'react';

export default function Header() {
  return (
    <>
      <style jsx global>{`
        .app-header {
          background-color: #eee;
          box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
            0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
        }
      `}</style>
      <PageHeader
        backIcon={null}
        className="app-header"
        title="Covid Bed Search"
        subTitle="Kolhapur"
      />
    </>
  );
}
