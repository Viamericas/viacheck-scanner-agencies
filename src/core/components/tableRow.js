import React from 'react';

const tableRow = ({ index, item }) => {
  return (
    <tr className="scanner__row" key={index.toString()}>
      <td>{item.agency}</td>
      <td>{item.scannerType}</td>
      <td>{item.creationDate}</td>
    </tr>
  );
};

export default tableRow;
