import React from 'react';
import TableRow from './tableRow';

const ScannerTable = ({ agenciesArray, t }) => {
  return (
    <table className="scanner-report__table">
      <thead>
        <tr>
          <th className="scanner-report__text-left">{t('scanner.agency')}</th>
          <th className="scanner-report__text-left">
            {t('scanner.branchName')}
          </th>
          <th className="scanner-report__text-left">{t('scanner.chainId')}</th>
          <th className="scanner-report__text-left">{t('scanner.type')}</th>
          <th className="scanner-report__text-left">{t('scanner.ip')}</th>
          <th className="scanner-report__text-left">{t('scanner.country')}</th>
          <th className="scanner-report__text-left">{t('scanner.city')}</th>
          <th className="scanner-report__text-right">
            {t('scanner.postalCode')}
          </th>
          <th className="scanner-report__text-right">
            {t('scanner.longitude')}
          </th>
          <th className="scanner-report__text-right">
            {t('scanner.latitude')}
          </th>
          <th className="scanner-report__text-left">{t('scanner.version')}</th>
          <th className="scanner-report__text-left">{t('scanner.userName')}</th>
          <th className="scanner-report__text-left">
            {t('scanner.dateCreated')}
          </th>
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
