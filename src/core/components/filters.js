import React from 'react';
import InputDatePicker from '@viamericas/datepicker-multi-language';
import { Typeahead } from 'react-bootstrap-typeahead';

const filters = ({
  fromDate,
  toDate,
  agencies,
  agencyCodeArray,
  onHandleChangeDateFrom,
  onHandleChangeDateTo,
  onHandleClickSearch,
  onChangeAgency,
  t,
}) => {
  return (
    <div>
      <div className="row scanner__no-margin">
        <div className="col-12">
          <div className="scanner__agencies">
            <span className="scanner__label">{t('scanner.agencyCode')}</span>
            <Typeahead
              id="agencyName"
              labelKey="agencyName"
              multiple={false}
              onChange={e => onChangeAgency(e)}
              onInputChange={e => onChangeAgency(e)}
              options={agencies}
              placeholder={t('scanner.selectAgency')}
              selected={agencyCodeArray}
              className="border-select font-size-1"
            />
          </div>
        </div>
      </div>
      <br />
      <div className="row scanner__no-margin">
        <div className="col-3" />
        <div className="col-3" data-provide="datepicker">
          <div className="scanner__agencies">
            <span className="scanner__label">{t('scanner.dateFrom')}</span>
            <div>
              <InputDatePicker
                language="es"
                dateDefault={fromDate}
                handleChange={onHandleChangeDateFrom}
              />
            </div>
          </div>
        </div>

        <div className="col-3">
          <div className="scanner__agencies">
            <span className="scanner__label">{t('scanner.dateTo')}</span>
            <div>
              <InputDatePicker
                language="es"
                dateDefault={toDate}
                handleChange={onHandleChangeDateTo}
              />
            </div>
          </div>
        </div>
        <div className="col-3" />
      </div>
      <br />
      <div className="row scanner__no-margin">
        <div className="col-12">
          <div className="scanner__search">
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
