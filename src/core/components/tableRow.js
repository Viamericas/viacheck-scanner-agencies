import React from 'react';

const tableRow = ({ index, item }) => {
  return (
    <tr className="scanner-report__row" key={index.toString()}>
      <td>{item.agency}</td>
      <td>{item.scannerType}</td>
      <td>{item.userName}</td>
      <td>{item.creationDate}</td>
    </tr>
  );
};

export default tableRow;
