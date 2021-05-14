import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Modal = ({ id, proxy, showModal, setShowModal }) => {
  const dispatch = useDispatch();
  const { profiles } = useSelector((state) => state.profilePage.profiles);
  const typeProxy = useRef();
  const countryProxy = useRef();
  const saveProxy = () => {
    const newTypeProxy = typeProxy.current.value;
    const newCountryProxy = countryProxy.current.value;
    dispatch({
      type: 'UPDATE_PROXY_TYPE',
      payload: {
        type: newTypeProxy,
        country: newCountryProxy,
        id,
      },
    });
    setShowModal(false);
  };
  const proxyType = ['HTTP Proxy', 'With Proxy'];
  const proxyCountry = ['US', 'Russia'];

  return (
    <div
      className={showModal ? 'modal active' : 'modal'}
      onClick={() => setShowModal(false)}
    >
      <div
        className={showModal ? 'modal__content active' : 'modal__content'}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Edit Proxy</h2>
        <div className="modal__form">
          <div className="modal__form_block">
            <p>Proxy Type</p>
            <select ref={typeProxy} size="1">
              <option value={proxy.type}>{proxy.type}</option>
              <option value={proxyType.filter((type) => type != proxy.type)}>
                {proxyType.filter((type) => type != proxy.type)}
              </option>
            </select>
          </div>
          <div className="modal__form_block modal__line">
            <p>County</p>
            <select ref={countryProxy}>
              <option value={proxy.country}>{proxy.country}</option>
              <option
                value={proxyCountry.filter((type) => type != proxy.country)}
              >
                {proxyCountry.filter((type) => type != proxy.country)}
              </option>
            </select>
          </div>
          <div className="modal__form_buttons">
            <button onClick={saveProxy} className="modal__form_button_green">
              Save
            </button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
