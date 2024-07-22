import React from 'react';

const tableRow = ({ index, item }) => {
  return (
    <tr className="scanner-report__row" key={index.toString()}>
      <td className="scanner-report__text-left">{item.agency}</td>
      <td className="scanner-report__text-left">{item.branchName}</td>
      <td className="scanner-report__text-left">{item.chainId}</td>
      <td className="scanner-report__text-left">{item.scannerType}</td>
      <td className="scanner-report__text-left">{item.ip}</td>
      <td className="scanner-report__text-left">{item.country}</td>
      <td className="scanner-report__text-left">{item.city}</td>
      <td className="scanner-report__text-right">{item.postalCode}</td>
      <td className="scanner-report__text-right">{item.longitude}</td>
      <td className="scanner-report__text-right">{item.latitude}</td>
      <td className="scanner-report__text-left">{item.version}</td>
      <td className="scanner-report__text-left">{item.userName}</td>
      <td className="scanner-report__text-left">{item.creationDate}</td>
    </tr>
  );
};

export default tableRow;
