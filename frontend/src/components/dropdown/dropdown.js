import React from 'react';

const Dropdown = ({
  label, value, list, hideLabel,
  getActiveDD, setActiveDD, updateDD, removeActiveDD, getActiveDDIcon
}) => {

  const lis = list.map((item, idx) => {
    return (
      <li key={idx} onClick={updateDD([label, item])}><span>{item}</span></li>
    );
  });

  return (
    <div className="dd-outer">
      {hideLabel ? null : (<label>{label}</label>)}
      <div className="dd-wrapper">
        <button className={"dd" + getActiveDD(label)}
          onClick={setActiveDD(label)}
          onBlur={removeActiveDD(label)}
        >
          <p className="dd-value">
            <span>{value}</span>
            <i className="material-icons">{"arrow_drop_" + getActiveDDIcon(label)}</i>
          </p>
          <div className="dd-inner">
            <ul className="dd-list">
              {lis}
            </ul>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Dropdown;