import React from 'react';

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu__items">
        <ul>
          <li className="menu__item active">ALL Profiles</li>
          <li>SellerProiles</li>
          <li>JustFolder</li>
          <li>More Folder</li>
        </ul>
      </div>
      <div className="menu__filter">
        <span className="menu__delimiter"></span>
        <select>
          <option value="Last Update">Last Update</option>
        </select>
      </div>
    </div>
  );
};

export default Menu;
