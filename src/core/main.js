import React, { useState, useEffect } from 'react';
import { Services, Validation } from '@viamericas/viam-utils';
import Loading from '@viamericas/viam-loading';
import MessageInformation from '@viamericas/viam-message-information';
import moment from 'moment';
import ScannerTable from './components/scannerTable';
import Filters from './components/filters';

const dateIso = new Date();
const currentDate = moment(dateIso.toISOString()).format('MM/DD/YYYY');

const Main = ({
  className,
  agenciesUrl,
  token,
  axiosInstance,
  loadingImage,
  t,
}) => {
  const [agenciesArray, setAgenciesArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fromDate, setFromDate] = useState(currentDate);
  const [toDate, setToDate] = useState(currentDate);
  const [agencyCodeArray, setAgencyCodeArray] = useState([]);
  const [agencies, setAgencies] = useState([]);

  const [message, setMessage] = useState({
    show: false,
    uxMessage: '',
    textMessage: '',
  });

  const getAllAgencies = async () => {
    try {
      const result = await Services.Rest.instance({
        url: `${agenciesUrl}/agencies/all-active-agencies`,
        token,
        method: 'GET',
        axiosInstance,
      });

      if (result.status === 200) {
        setAgencies(result.data.agencies);
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(`Error on getAgencies error: ${e}`);
    }
  };

  const onGetScanners = () => {
    setIsLoading(true);

    Services.Rest.instance({
      url: `${agenciesUrl}/agencies/get-scanners-installed`,
      data: {
        dateFrom: fromDate,
        dateTo: toDate,
        agency:
          agencyCodeArray.length > 0 ? agencyCodeArray[0].agencyName : null,
      },
      token,
      method: 'POST',
      axiosInstance,
    })
      .then(response => {
        if (response?.data && response.data) {
          setAgenciesArray(response.data);
          if (response.data.length === 0) {
            setMessage({
              show: true,
              textMessage: t('scanner.noData'),

              uxMessage: { typeMessageClass: 'alert-warning', close: 'close' },
            });
          }
        } else {
          setAgenciesArray([]);
        }
      })
      .catch(e => {
        // eslint-disable-next-line no-console
        console.log('error agencies:', e);
        setMessage({
          show: true,
          textMessage: Validation.Message.isNetwork(e.message)
            ? t('scanner.networkMessage')
            : t('scanner.errorOperation'),
          uxMessage: { typeMessageClass: 'alert-danger', close: 'close' },
        });
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const validateDates = (from, to) => {
    if (!from) {
      setMessage({
        textMessage: t('msgWithOutFromDate'),
        show: true,
        type: 'error',
        uxMessage: { typeMessageClass: 'alert-danger', close: 'close' },
      });

      return false;
    }
    // validate the dates
    if (!to) {
      setMessage({
        textMessage: t('msgWithOutToDate'),
        show: true,
        type: 'error',
        uxMessage: { typeMessageClass: 'alert-danger', close: 'close' },
      });
      return false;
    }
    // validate range the dates
    if (moment(to) > moment(currentDate)) {
      setMessage({
        textMessage: t('msgToDateGreaterCurrentDate'),
        show: true,
        type: 'error',
        uxMessage: { typeMessageClass: 'alert-danger', close: 'close' },
      });

      return false;
    }

    if (moment(from) > moment(to)) {
      setMessage({
        textMessage: t('msgFromGreaterToDate'),
        show: true,
        type: 'error',
        uxMessage: { typeMessageClass: 'alert-danger', close: 'close' },
      });

      return false;
    }
    return true;
  };

  const onSearch = () => {
    setMessage({ show: false });
    if (validateDates(fromDate, toDate)) {
      onGetScanners();
    } else {
      setAgenciesArray([]);
    }
  };

  useEffect(() => {
    getAllAgencies();
    // onGetScanners();
  }, []);

  const onHandleCloseMessage = () => {
    setMessage({ show: false, uxMessage: '', textMessage: '' });
  };

  const onHandleChangeDateTo = date => {
    setToDate(
      date === '' || date === undefined
        ? ''
        : moment(date.toISOString()).format('MM/DD/YYYY')
    );
  };

  const onHandleChangeDateFrom = date => {
    setFromDate(
      date === '' || date === undefined
        ? ''
        : moment(date.toISOString()).format('MM/DD/YYYY')
    );
  };

  const onChangeAgency = event => {
    // when the user click on agency in dropdown list the component return array
    if (Array.isArray(event)) {
      if (event.length > 0) {
        setAgencyCodeArray(event);
      } else {
        setAgencyCodeArray([]);
      }
    }
  };

  return (
    <div data-testid="scanner-agencies" className={className}>
      <div className="scanner__container-title">
        <h2>{t('scanner.scannerAgencies')}</h2>
      </div>
      <br />
      {message.show && (
        <div>
          <MessageInformation
            message={message.textMessage}
            onHandleCloseMessage={onHandleCloseMessage}
            uxMessage={message.uxMessage}
          />
        </div>
      )}
      {isLoading && (
        <Loading
          loadingImage={loadingImage}
          uxLoading={{
            mainContainer: 'scanner__modal-loading-frame scanner__zindex1000',
            subContainer:
              'scanner__modal-dialog scanner__notice-modal scanner__align-loading ',
            image: 'img-fluid',
            loadingImage,
          }}
        />
      )}

      <div>
        <Filters
          fromDate={fromDate}
          toDate={toDate}
          agencies={agencies}
          agencyCodeArray={agencyCodeArray}
          onHandleChangeDateTo={onHandleChangeDateTo}
          onHandleChangeDateFrom={onHandleChangeDateFrom}
          onHandleClickSearch={onSearch}
          onChangeAgency={onChangeAgency}
          t={t}
        />
      </div>

      <div className="scanner__table-container">
        {agenciesArray && agenciesArray.length > 0 ? (
          <ScannerTable agenciesArray={agenciesArray} t={t} />
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Main;
