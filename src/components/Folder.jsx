import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  WindowsOutlined,
  AppleOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import CheckedFolder from './CheckedFolder';
import MoreInfoFolder from './MoreInfoFolder';

function convertTimestamp(timestamp) {
  let d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
    yyyy = d.getFullYear(),
    mm = ('0' + (d.getMonth() + 1)).slice(-2), // Months are zero based. Add leading 0.
    dd = ('0' + d.getDate()).slice(-2), // Add leading 0.
    hh = d.getHours(),
    h = hh,
    min = ('0' + d.getMinutes()).slice(-2), // Add leading 0.
    ampm = 'AM',
    time;

  if (hh > 12) {
    h = hh - 12;
    ampm = 'PM';
  } else if (hh === 12) {
    h = 12;
    ampm = 'PM';
  } else if (hh == 0) {
    h = 12;
  }
  time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;
  return time;
}

const Folder = ({ inputSearch }) => {
  const [hoverFolder, setHoverFolder] = useState(false);
  const [checkedFolder, setCheckedFolder] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const items = useSelector((state) => state.profilePage.profiles);

  return (
    <div className="folders">
      {items
        .filter((item) => {
          if (item.name.toLowerCase().indexOf(inputSearch, 0) !== -1) {
            return item;
          }
        })
        .map((item) => {
          return (
            <div key={item.id} className="folder">
              {checkedFolder == item.id ? (
                <CheckedFolder
                  checkedFolder={checkedFolder}
                  setCheckedFolder={setCheckedFolder}
                  id={item.id}
                />
              ) : (
                <div className="folder__wrapper_blocks">
                  <div className="folder__blocks">
                    <div className="folder__data">
                      <div className="folder__profile">
                        <div
                          onMouseEnter={() => setHoverFolder(item.id)}
                          onMouseLeave={() => setHoverFolder(false)}
                        >
                          {hoverFolder == item.id ? (
                            checkedFolder == item.id ? (
                              'что-то'
                            ) : (
                              <Checkbox
                                onChange={() => setCheckedFolder(item.id)}
                                className="folder__logo folder__logo_check"
                              />
                            )
                          ) : (
                            <div className="folder__logo folder__logo_cicle">
                              {item.name[0].toUpperCase()}
                            </div>
                          )}
                        </div>
                        <div className="folder__description">
                          <span>{item.name}</span>
                          <span style={{ display: 'block' }}>
                            {item.folder}
                          </span>
                        </div>
                      </div>
                      {item.status === 'Ready' ? (
                        <div className="folder__status_ready">
                          <span className="folder__status_circle"></span>Ready
                        </div>
                      ) : (
                        <div className="folder__status_running ">
                          <span
                            style={{ background: '#00A987' }}
                            className="folder__status_circle"
                          ></span>
                          Running
                        </div>
                      )}
                      <div className="folder__os">
                        {item.os == 'windows' ? (
                          <WindowsOutlined style={{ opacity: '0.5' }} />
                        ) : (
                          <AppleOutlined style={{ opacity: '0.5' }} />
                        )}
                      </div>
                    </div>
                    <div className="folder__settings_block">
                      <div className="folder__last_time">
                        {convertTimestamp(item.lastRun)}
                      </div>
                      <div className="folder__status_profile">
                        {item.status === 'Ready' ? (
                          <button
                            style={{
                              background: '#00A987',
                              border: '1px solid #00A987',
                            }}
                          >
                            Stop
                          </button>
                        ) : (
                          <button>Run profile</button>
                        )}
                      </div>
                      <div
                        className="folder__settings"
                        onClick={() =>
                          setShowSettings(
                            item.id === showSettings ? false : item.id
                          )
                        }
                      >
                        <SettingOutlined />
                      </div>
                    </div>
                  </div>
                  {showSettings == item.id ? (
                    <MoreInfoFolder item={item} />
                  ) : (
                    ''
                  )}
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default Folder;
