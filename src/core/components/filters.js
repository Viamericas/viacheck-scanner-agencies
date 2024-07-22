import React from 'react';
import InputDatePicker from '@viamericas/datepicker-multi-language';
import { Typeahead } from 'react-bootstrap-typeahead';

const filters = ({
  fromDate,
  toDate,
  agencies,
  scannerTypes,
  onHandleChangeDateFrom,
  onHandleChangeDateTo,
  onHandleClickSearch,
  onChangeAgency,
  onChangeScannerType,
  t,
}) => {
  return (
    <div>
      <div className="row scanner-report__no-margin">
        <div className="col-3" />
        <div className="col-3">
          <div className="scanner-report__agencies">
            <span className="scanner-report__label">
              {t('scanner.agencyCode')}
            </span>
            <Typeahead
              id="agencyName"
              labelKey="agencyName"
              multiple={false}
              onChange={e => onChangeAgency(e)}
              onInputChange={e => onChangeAgency(e)}
              options={agencies}
              placeholder={t('scanner.selectAgency')}
              // selected={agencyCode}
              className="border-select font-size-1"
            />
          </div>
        </div>

        <div className="col-3">
          <div className="scanner-report__agencies">
            <span className="scanner-report__label">
              {t('scanner.scannerType')}
            </span>
            <Typeahead
              id="name"
              labelKey="name"
              multiple={false}
              onChange={e => onChangeScannerType(e)}
              onInputChange={e => onChangeScannerType(e)}
              options={scannerTypes}
              placeholder={t('scanner.selectScanner')}
              // selected={agencyCode}
              className="border-select font-size-1"
            />
          </div>
        </div>

        <div className="col-3" />
      </div>
      <br />
      <div className="row scanner-report__no-margin">
        <div className="col-3" />
        <div className="col-3" data-provide="datepicker">
          <div className="scanner-report__agencies">
            <span className="scanner-report__label">
              {t('scanner.dateFrom')}
            </span>
            <div>
              <InputDatePicker
                language="es"
                dateDefault={fromDate}
                handleChange={onHandleChangeDateFrom}
                placeholder="MM/DD/YYYY"
              />
            </div>
          </div>
        </div>

        <div className="col-3">
          <div className="scanner-report__agencies">
            <span className="scanner-report__label">{t('scanner.dateTo')}</span>
            <div>
              <InputDatePicker
                language="es"
                dateDefault={toDate}
                handleChange={onHandleChangeDateTo}
                placeholder="MM/DD/YYYY"
              />
            </div>
          </div>
        </div>
        <div className="col-3" />
      </div>
      <br />
      <div className="row scanner-report__no-margin">
        <div className="col-12">
          <div className="scanner-report__search">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={event => onHandleClickSearch(event)}
            >
              {t('scanner.search')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default filters;
