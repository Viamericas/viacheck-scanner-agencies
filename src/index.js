import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import MainT from './core/main';

const Demo = ({
  paginationSelected,
  itemsPage,
  maxButtonsArea,
  agenciesUrl,
  token,
  className,
  t,
  axiosInstance,
  loadingImage,
  user,
}) => {
  const loadTranslation = () => {
    const { t: t18 } = useTranslation('translation');
    return t18;
  };

  return (
    <MainT
      paginationSelected={paginationSelected}
      itemsPage={itemsPage}
      className={className}
      agenciesUrl={agenciesUrl}
      token={token}
      axiosInstance={axiosInstance}
      t={t || loadTranslation()}
      loadingImage={loadingImage}
      user={user}
      maxButtonsArea={maxButtonsArea}
    />
  );
};

Demo.propTypes = {
  agenciesUrl: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Demo.defaultProps = {
  className: 'scanner-report',
};

export default Demo;
