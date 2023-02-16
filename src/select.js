import React from 'react';
import { Select, Space } from 'antd';


const App = (props) => (
  <Space wrap>
    <Select
      defaultValue="ALL"
      style={{ width: 120 }}
      onChange={props.selectdropdown}
      options={[
        { value: 'all', label: 'ALL' },
        { value: 'creo', label: 'CREO' },
        { value: 'creo_egs', label: 'EGS' },
        { value: 'pbbip', label: 'PBBIP'},
      ]}
    />
    
  
  </Space>
);

export default App;