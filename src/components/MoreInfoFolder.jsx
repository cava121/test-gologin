import Modal from './Modal';
import React, { useState } from 'react';

const MoreInfoFolder = ({ item }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="folder__info_wrapper">
      {showModal && (
        <Modal
          showModal={showModal}
          proxy={item.proxy}
          id={item.id}
          setShowModal={setShowModal}
        />
      )}
      <div className="folder__info_block">
        <div>
          <b>Proxy</b>
          <span>{item.proxy.type}</span>
          <span
            className="folder__edit_proxy"
            onClick={() => setShowModal(true)}
          >
            edit
          </span>
        </div>
        <div>
          <b>Language</b>
          <span>{item.language}</span>
        </div>
        <div>
          <b>Timezone</b>
          <span>{item.timezone}</span>
        </div>
      </div>
      <div className="folder__info_block">
        <div>
          <b>Resolution</b>
          <span>{item.resolution}</span>
        </div>
        <div>
          <b>Geolocation</b>
          <span>{item.geo}</span>
        </div>
        <div>
          <b>Cookie</b>
          <span>{item.cookie}</span>
        </div>
      </div>
      <div className="folder__info_block">
        <div>
          <b>Notes:</b>
          <span>{item.notes}</span>
        </div>
        <div>
          <b>Profile ID</b>
          <span>{item.id}</span>
        </div>
        <div>
          <b>Folders</b>
          <span>{item.folders.map((folder) => `${folder} `)}</span>
        </div>
      </div>
    </div>
  );
};

export default MoreInfoFolder;
