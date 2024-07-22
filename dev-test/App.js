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
        token="eyJraWQiOiIzcncremFOZ0kzSXFyTXMwRkUyanJHaTQ1QmM0cVVwWFZDZGo2SWZLUlhVPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI0ZjFiOTEyZS0wZWJjLTQ3YjctYTBhMy1hOTY3NDhjNDUyNDgiLCJjb2duaXRvOmdyb3VwcyI6WyJEZXRhbGxlRGVCaWxsZXMiLCJFc3RhZG9EZUN1ZW50YSIsIkNvbWlzaW9uZXMiLCJFbnZpb3NEZU90cm9zQ2FqZXJvcyIsIlJlcG9ydGVEZUNoZXF1ZXMiLCJJbXByZXNvcmFzIiwiSGlzdG9yaWFsRGVUcmFuc2FjY2lvbmVzIiwiVmlhVGFzYSIsIlJlcG9ydHMiLCJDaGVxdWVzRGVPdHJvc0NhamVyb3MiLCJUcmFuc2FjY2lvbmVzRGVPdHJvc0NhamVyb3MiLCJEZXRhbGxlRGVFbnZpb3MiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfN0lKZUZ2T1dZIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjpmYWxzZSwiY29nbml0bzp1c2VybmFtZSI6ImFkbWludmlhY2VudHJhbHNsIiwiYXVkIjoiMnYwam9kb2doZG5pazU4cG8waGd2YnZmM2wiLCJldmVudF9pZCI6IjUyM2U0ZmM0LTY1YWUtNDUxNC1iYmFlLTI0Y2ExMDMxNTQ2MyIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNzIxNjczMTQyLCJwaG9uZV9udW1iZXIiOiIrNTczMjI1MTE2NTAzIiwiY3VzdG9tOklkQnJhbmNoIjoiQTAwNzY1LEExNDgzOCIsImV4cCI6MTcyMTY5MTE0MiwiaWF0IjoxNzIxNjczMTQyfQ.oDNaniMzk4pXoKa6iirjZXeWeKo1bm0VnHuNtqqSbICZ7-_h69s6fMyQ0J3PVxtaoyRAjN_8oCHt4G6oLhZtmcOxNg51K3PZnJyjkrlv_cvx7czl4Daxyn2EsNDN9fKNN8m6NQNIfr-82_yZNRp2ct0S6R8KyfAasI2X8wIG0vVJ4P1VhmmkUVxqTWxvTL7L1wpsIbmKtTOv_PVpv1sfUin3nD5HhqTe5woyXUvfJZsEj0gEaw0KrLKF0M8Ym4sYTQ3jOHRpck6BQEJgMjOcyQ6yL_CMA_qND0WmZCXaqGs0Pl1NDZgnyuI2XLZXpFofafoWbVjUTaFuggl5gH6z2A"
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
