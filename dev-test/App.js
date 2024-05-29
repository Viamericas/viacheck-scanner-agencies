import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Demo from '../src/index';
import './locales/i18n';
import './styles/style.scss';

const AppTest = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Demo
        className="scanner-report"
        paginationSelected={50}
        maxButtonsArea="5"
        user="cindy.lamadrid"
        loadingImage="./assets/loading.gif"
        itemsPage={50}
        agenciesUrl="https://vck-ag-dev.viamericas.io"
        token="eyJraWQiOiIzcncremFOZ0kzSXFyTXMwRkUyanJHaTQ1QmM0cVVwWFZDZGo2SWZLUlhVPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI0ZjFiOTEyZS0wZWJjLTQ3YjctYTBhMy1hOTY3NDhjNDUyNDgiLCJjb2duaXRvOmdyb3VwcyI6WyJEZXRhbGxlRGVCaWxsZXMiLCJFc3RhZG9EZUN1ZW50YSIsIkNvbWlzaW9uZXMiLCJFbnZpb3NEZU90cm9zQ2FqZXJvcyIsIlJlcG9ydGVEZUNoZXF1ZXMiLCJJbXByZXNvcmFzIiwiSGlzdG9yaWFsRGVUcmFuc2FjY2lvbmVzIiwiVmlhVGFzYSIsIlJlcG9ydHMiLCJDaGVxdWVzRGVPdHJvc0NhamVyb3MiLCJUcmFuc2FjY2lvbmVzRGVPdHJvc0NhamVyb3MiLCJEZXRhbGxlRGVFbnZpb3MiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfN0lKZUZ2T1dZIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjpmYWxzZSwiY29nbml0bzp1c2VybmFtZSI6ImFkbWludmlhY2VudHJhbHNsIiwiYXVkIjoiMnYwam9kb2doZG5pazU4cG8waGd2YnZmM2wiLCJldmVudF9pZCI6ImNmNzdiZmUyLWE4MmItNGYxYi1iOTM3LTBhNzJlNzhiZGQ1OCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNzE2OTg3OTI3LCJwaG9uZV9udW1iZXIiOiIrNTczMjI1MTE2NTAzIiwiY3VzdG9tOklkQnJhbmNoIjoiQTAwNzY1LEExNDgzOCIsImV4cCI6MTcxNzAwNTkyNywiaWF0IjoxNzE2OTg3OTI3fQ.RK6p8gbn849V9HHSbv5Z-i-h3X8ay0w-viZsNW2MrnnEeBfp6j6mbcdRSSIePxe8cx8GpEw7kTkDAFRR0YOMdT5KWa6JWJC93LteFUE36SOdEdOZnk2f194NU_DwDW18wD8DydFFIKVJNylCPhTXB3ycBovUEQ9wcopJJT_uUJp8WxTGXJwbHWBMX9s-HWgZd5izxht_3z2g_mnIhrFovaCvu9Myn911JXuo7WgswuSONbnDQNBPxKCuXWOIAXz-iVD6hIDFpGMklmFcHk527NdRQjWctoR6eh07ZUWukrspczwLiqbMrolsbVfu6VDqMEicHTF1q4O6yusNzJ89NA"
      />
    </Suspense>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <AppTest />
    </Suspense>
  </React.StrictMode>,

  document.getElementById('app')
);
