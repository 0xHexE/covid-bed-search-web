import { Button, Popover } from 'antd';
import React, { useState } from 'react';

export default function ChangeLanguage() {
  const [visible, setVisible] = useState(false);

  return (
    <Popover
      content={<a onClick={() => setVisible(true)}>Close</a>}
      title="Language"
      trigger="click"
      visible={visible}
      onVisibleChange={setVisible}
    >
      <Button type="primary">Click me</Button>
    </Popover>
  );
}
