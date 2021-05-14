import {
  CopyOutlined,
  DeleteOutlined,
  FileAddOutlined,
  FolderAddOutlined,
  MobileOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';

const CheckedFolder = ({ checkedFolder, setCheckedFolder, id }) => {
  return (
    <div className="folder__wrapper_checked">
      <div>
        <input
          type="checkbox"
          checked={checkedFolder}
          onChange={() => setCheckedFolder(false)}
        />
      </div>
      <div style={{ display: 'flex' }}>
        <Button>
          <ShareAltOutlined />
          Share Profiles
        </Button>
        <Button>
          <FileAddOutlined />
          Add to Folder
        </Button>
        <Button>
          <CopyOutlined />
          Clone
        </Button>
        <Button>
          <MobileOutlined />
          New Fingerprint
        </Button>
        <Button style={{ border: '2px solid #E9515C', color: '#E9515C' }}>
          <DeleteOutlined style={{ color: '#E9515C' }} />
          Delete
        </Button>
      </div>
    </div>
  );
};

export default CheckedFolder;
