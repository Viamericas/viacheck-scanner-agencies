import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Demo from '../src/index';
import './locales/i18n';
import './styles/style.scss';

const AppTest = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Demo
        paginationSelected={50}
        user="cindy.lamadrid"
        loadingImage="./assets/loading.gif"
        itemsPage={50}
        agenciesUrl="https://vck-ag-dev.viamericas.io"
        token="eyJraWQiOiIzcncremFOZ0kzSXFyTXMwRkUyanJHaTQ1QmM0cVVwWFZDZGo2SWZLUlhVPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIzZjg4YTljMS04ZmRjLTQ4YjAtYmE3NC1lNzc4YzFjYTdlY2UiLCJjb2duaXRvOmdyb3VwcyI6WyJFc3RhZG9EZUN1ZW50YSIsIlZpYVRvcFVwIiwiVmlhQ2hlY2siLCJDb21pc2lvbmVzIiwiQWRtaW5WaWFUYXNhIiwiQmlsbFBheW1lbnQiLCJBZG1pbiIsIkltcHJlc29yYXMiLCJWaWFUYXNhIiwiTW9uZXlUcmFuc2ZlciIsIkFkbWluVXN1YXJpb3MiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfN0lKZUZ2T1dZIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjpmYWxzZSwiY29nbml0bzp1c2VybmFtZSI6IkEwMTk3NDEiLCJhdWQiOiIydjBqb2RvZ2hkbmlrNThwbzBoZ3ZidmYzbCIsImV2ZW50X2lkIjoiMTgzNDc0MzQtNTkyMS00NDNhLTlhMzItZDhkMzQ0MzFmN2NjIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE3MTI3NzUwNjgsInBob25lX251bWJlciI6IisxMzIzODM2MjY4NCIsImN1c3RvbTpJZEJyYW5jaCI6IkEwMTk3NCxBMTY2NzgsQTE3NjI2LEEwMDc2NSIsImV4cCI6MTcxMjc5MzA2OCwiaWF0IjoxNzEyNzc1MDY4fQ.nfJIi5YzHCMPE5L1eaCJ3q4TKb6pL95BItclE8QexJqgx4b6JGWZFRMIoit8XIG8rsylNmhJ76Mzvp1wV3J7xPYL9Om8zUKfEM5Vx_wl0N2ew1gDKeiNOieK7dFcwY3YhfEQba0mpsndqhMu3UEEsoWEok-Ggvdz0QZIgBK_4BwWj_PzzpJ0nzs0XwnQz5HTZfPnNtOggDAjaQ0VGIJTLgZ7xK2s1YzgX34ErvutG0St49zkqsQJzKlqhSBnjS5ESgyhZg09iVKasxRmWAgAWcCWGqaawm4Zjj7QBymNsrG9Deuvm6yaUuAA3madNsbZB1fUEjK6pQgke62IMV77BQ"
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
