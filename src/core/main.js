import React, { useState, useEffect, useRef } from 'react';
import { Services, Validation } from '@viamericas/viam-utils';
import Loading from '@viamericas/viam-loading';
import MessageInformation from '@viamericas/viam-message-information';
import Pagination from '@viamericas/viam-pagination-reports';
import moment from 'moment';
import * as XLSX from 'xlsx';
import ScannerTable from './components/scannerTable';
import Filters from './components/filters';

const dateIso = new Date();
const currentDate = moment(dateIso.toISOString()).format('MM/DD/YYYY');

const Main = ({
  itemsPage,
  className,
  maxButtonsArea,
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
  // const [agencyCodeArray, setAgencyCodeArray] = useState([]);
  const [agencies, setAgencies] = useState([]);
  const [totalTransactions, setTotalTransactions] = useState(0);
  const [agencyCode, setAgencyCode] = useState('');
  const [message, setMessage] = useState({
    show: false,
    uxMessage: '',
    textMessage: '',
  });

  const [paginationSelected, setPaginationSelected] = useState(
    Number(itemsPage)
  );
  const [currentPage, setCurrentPage] = useState(Number(1));

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

  const getScannerAgency = page => {
    return Services.Rest.instance({
      url: `${agenciesUrl}/agencies/get-scanners-installed`,
      data: {
        dateFrom: fromDate,
        dateTo: toDate,
        agency: agencyCode,
        pageSize: itemsPage,
        pageNum: page,
      },
      token,
      method: 'POST',
      axiosInstance,
    });
  };

  const onGetScanners = page => {
    setIsLoading(true);

    getScannerAgency(page)
      .then(response => {
        if (response?.data && response.data) {
          setAgenciesArray(response.data);
          setTotalTransactions(
            response.data.length === 0 ? 0 : response.data[0].totalRecords
          );
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
      setCurrentPage(Number(1));
      onGetScanners(1);
    } else {
      setAgenciesArray([]);
    }
  };

  const handleSelectPage = async (event, page) => {
    event.preventDefault();

    const _currentPage = Number(page);
    setCurrentPage(_currentPage);

    if (validateDates(fromDate, toDate)) {
      onGetScanners(_currentPage);
    } else {
      setAgenciesArray([]);
    }
  };

  const handleSelectPagination = async (event, paginationInput) => {
    event.preventDefault();

    setPaginationSelected(paginationInput);

    if (validateDates(fromDate, toDate)) {
      onGetScanners(paginationInput);
    } else {
      setAgenciesArray([]);
    }
  };

  useEffect(() => {
    getAllAgencies();
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
        setAgencyCode(event[0].agencyName);
      } else {
        setAgencyCode('');
      }
    } else {
      const agencySelected = agencies.filter(
        agency => agency.agencyName === event.toUpperCase()
      );

      setAgencyCode(
        agencySelected.length > 0
          ? agencySelected[0].agencyName
          : event.toUpperCase()
      );
    }
  };

  const handleKeyDownEnter = event => {
    if (event.key === 'Enter') {
      onSearch();

      if (event.target.type === 'text') {
        event.target.blur();
      }
    }
  };

  const useEventListener = (eventName, handler, element = window) => {
    const savedHandler = useRef();
    useEffect(() => {
      savedHandler.current = handler;
    }, [handler]);

    useEffect(() => {
      const isSupported = element && element.addEventListener;
      if (!isSupported) {
        return;
      }
      const eventListener = event => savedHandler.current(event);
      // Add event listener
      element.addEventListener(eventName, eventListener);
      // eslint-disable-next-line consistent-return
      return () => {
        // Remove event listener
        element.removeEventListener(eventName, eventListener);
      };
    }, [eventName, element]);
  };

  useEventListener('keydown', handleKeyDownEnter);

  const onHandlerExport = async () => {
    setIsLoading(true);

    try {
      const info = await getScannerAgency(-1);
      if (info && info.data.length > 0) {
        const newData = [];
        newData.push([
          t('scanner.agency'),
          t('scanner.type'),
          t('scanner.userName'),
          t('scanner.dateCreated'),
        ]);
        info.data.forEach(item => {
          const newItem = [
            item.agency,
            item.scannerType,
            item.userName,
            item.creationDate,
          ];
          newData.push(newItem);
        });

        const ws = XLSX.utils.aoa_to_sheet(newData);
        const wb = XLSX.utils.book_new();

        XLSX.utils.book_append_sheet(wb, ws, 'Result');
        setIsLoading(false);
        XLSX.writeFile(wb, 'scannerReport.xlsx');
      }
    } catch (e) {
      setIsLoading(false);
      console.log('Error in onHandlerExport', e);
    }
  };

  return (
    <div data-testid="scanner-agencies" className={className}>
      <div className="scanner-report__container-title">
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
            mainContainer:
              'scanner-report__modal-loading-frame scanner-report__zindex1000',
            subContainer:
              'scanner-report__modal-dialog scanner-report__notice-modal scanner-report__align-loading ',
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
          onHandleChangeDateTo={onHandleChangeDateTo}
          onHandleChangeDateFrom={onHandleChangeDateFrom}
          onHandleClickSearch={onSearch}
          onChangeAgency={onChangeAgency}
          t={t}
        />
      </div>

      <div className="scanner-report__table-container">
        {agenciesArray && agenciesArray.length > 0 ? (
          <div className="scanner-report__table-subContainer">
            <ScannerTable agenciesArray={agenciesArray} t={t} />
            <br />
            <div className="container-pagination-modified">
              <Pagination
                paginationSelected={paginationSelected}
                totalRecords={Number(totalTransactions)}
                currentPage={currentPage}
                handleSelectPage={handleSelectPage}
                handleSelectPagination={handleSelectPagination}
                titlePagination={t('paginator.checksPerPage')}
                titleFirst={t('paginator.first')}
                titlePrevious={t('paginator.before')}
                titleNext={t('paginator.next')}
                titleLast={t('paginator.last')}
                maxButtonsArea={Number(maxButtonsArea)}
              />
              <div className="right-align-table summary-component-container">
                <input
                  type="button"
                  className="btn btn-secondary"
                  value={t('scanner.export')}
                  onClick={() => {
                    onHandlerExport();
                  }}
                />
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Main;
