import { Button, Input } from 'antd';
import React from 'react';
import {
  ArrowDownOutlined,
  FolderOpenOutlined,
  PlusOutlined,
  SearchOutlined,
} from '@ant-design/icons';

const Header = ({ setInputSearch }) => {
  return (
    <div className="header">
      <div className="header__seach">
        <h1>Profiles</h1>
        <div>
          <Input
            onChange={(e) => setInputSearch(e.target.value)}
            style={{ position: 'relative' }}
            addonBefore={<SearchOutlined style={{ position: 'absolute' }} />}
            placeholder="Search in profiles…"
          />
        </div>
      </div>
      <div className="header__profile">
        <Button type="primary" shape="round" icon={<PlusOutlined />}>
          Create new profile
        </Button>
        <div
          style={{
            margin: '0px 40px 0px 10px',
            color: '#BDBDBD',
            cursor: 'pointer',
          }}
        >
          <FolderOpenOutlined style={{ marginRight: '5px' }} /> Folders
        </div>
        <div style={{ cursor: 'pointer' }}>
          <span className="header__logo">S</span>
          <ArrowDownOutlined
            style={{
              color: '#fff',
              fontSize: '12px',
              verticalAlign: '0.125em',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
