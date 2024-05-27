import React from 'react';
import TableRow from './tableRow';

const ScannerTable = ({ agenciesArray, t }) => {
  return (
    <table className="scanner-report__table">
      <thead>
        <tr>
          <th>{t('scanner.agency')}</th>
          <th>{t('scanner.type')}</th>
          <th>{t('scanner.userName')}</th>
          <th>{t('scanner.dateCreated')}</th>
        </tr>
      </thead>
      <tbody>
        {agenciesArray.map((item, index) => {
          return <TableRow key={index.toString()} index={index} item={item} />;
        })}
      </tbody>
    </table>
  );
};

export default ScannerTable;
