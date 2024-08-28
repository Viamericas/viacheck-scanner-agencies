import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
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
        token="eyJraWQiOiIzcncremFOZ0kzSXFyTXMwRkUyanJHaTQ1QmM0cVVwWFZDZGo2SWZLUlhVPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIzOWU1N2U4NS1lYjFlLTRkYWMtYTk2Zi01NWFmYTM3NmNiYzYiLCJjb2duaXRvOmdyb3VwcyI6WyJEZXRhbGxlRGVCaWxsZXMiLCJFc3RhZG9EZUN1ZW50YSIsIlZpYVRvcFVwIiwiVmlhQ2hlY2siLCJDb21pc2lvbmVzIiwiQWRtaW5WaWFUYXNhIiwiRW52aW9zRGVPdHJvc0NhamVyb3MiLCJCaWxsUGF5bWVudCIsIkFkbWluIiwiUmVwb3J0ZURlQ2hlcXVlcyIsIkltcHJlc29yYXMiLCJIaXN0b3JpYWxEZVRyYW5zYWNjaW9uZXMiLCJWaWFUYXNhIiwiTW9uZXlUcmFuc2ZlciIsIkNoZXF1ZXNEZU90cm9zQ2FqZXJvcyIsIkFkbWluVXN1YXJpb3MiLCJUcmFuc2FjY2lvbmVzRGVPdHJvc0NhamVyb3MiLCJEZXRhbGxlRGVFbnZpb3MiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfN0lKZUZ2T1dZIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjpmYWxzZSwiY29nbml0bzp1c2VybmFtZSI6Imp1YW4ub3J0aXoiLCJhdWQiOiIydjBqb2RvZ2hkbmlrNThwbzBoZ3ZidmYzbCIsImV2ZW50X2lkIjoiOWUzZmVkZTMtZTllMS00OTFhLThiZjYtZThiYTdkMWMzYjQ4IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE3MjQ4NTgxMTAsIm5hbWUiOiJKdWFuIiwicGhvbmVfbnVtYmVyIjoiKzE2MTk5MzY1MTQ4IiwiY3VzdG9tOklkQnJhbmNoIjoiQTAwNzY1IiwiZXhwIjoxNzI0ODc2MTEwLCJpYXQiOjE3MjQ4NTgxMTAsImZhbWlseV9uYW1lIjoiT3J0aXoifQ.YS6B8oHZrtMHIwjRerNXvKxpidiqSFobuagzQ4wjdl6EiWwyNxwPPTTYL-NSbEaRrLZmuluFRRTWdakuHcr7BIiMNrcRjMaB0TWla0FFBXMQ_WkxQmcOae7qAOm4r5JJ6a8k-k61CKRLo_br796TAY-FWWZ9I8Yuazzgfr1df7oN70L0TPmPEW1MrYM9N8SXdoKAjbNlhbyLB_KeGDl6zrYW_CzicXIaeSBQnVOWfjujrs5RQAyr6WYO8jhbOMoUBDU6S2QL8A7Na4l3mJxZEHDtPla3l2vCu2reyvyHAXj-27WKo59paIInWoQ9KZmaaJg2Bq97TGB3xS0URwiPTA"
      />
    </Suspense>
  );
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <AppTest />
    </Suspense>
  </React.StrictMode>
);
