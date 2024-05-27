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
        token="eyJraWQiOiIzcncremFOZ0kzSXFyTXMwRkUyanJHaTQ1QmM0cVVwWFZDZGo2SWZLUlhVPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI0ZjFiOTEyZS0wZWJjLTQ3YjctYTBhMy1hOTY3NDhjNDUyNDgiLCJjb2duaXRvOmdyb3VwcyI6WyJEZXRhbGxlRGVCaWxsZXMiLCJFc3RhZG9EZUN1ZW50YSIsIkNvbWlzaW9uZXMiLCJFbnZpb3NEZU90cm9zQ2FqZXJvcyIsIlJlcG9ydGVEZUNoZXF1ZXMiLCJJbXByZXNvcmFzIiwiSGlzdG9yaWFsRGVUcmFuc2FjY2lvbmVzIiwiVmlhVGFzYSIsIlJlcG9ydHMiLCJDaGVxdWVzRGVPdHJvc0NhamVyb3MiLCJUcmFuc2FjY2lvbmVzRGVPdHJvc0NhamVyb3MiLCJEZXRhbGxlRGVFbnZpb3MiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfN0lKZUZ2T1dZIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjpmYWxzZSwiY29nbml0bzp1c2VybmFtZSI6ImFkbWludmlhY2VudHJhbHNsIiwiYXVkIjoiMnYwam9kb2doZG5pazU4cG8waGd2YnZmM2wiLCJldmVudF9pZCI6IjJiMzJhNjUwLWY0MDAtNGIyMS1hYTE5LTFkZTg5M2EzZmY5YiIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNzE2ODQ0MzI3LCJwaG9uZV9udW1iZXIiOiIrNTczMjI1MTE2NTAzIiwiY3VzdG9tOklkQnJhbmNoIjoiQTAwNzY1LEExNDgzOCIsImV4cCI6MTcxNjg2MjMyNywiaWF0IjoxNzE2ODQ0MzI3fQ.CHGe_EaF9grdDbsqdNqsNYiVUHRdnmrhqKKLB7sPELGNk70QgblaiTWjCklnmD1DskOlOGLJRxdaPGK3FNDSiLhxabXP3KZaE_fzLznuRvECaLQCzW9ayUB6VDK0EysJcMfpSlWf8EBKAOVnSeap4CNIrbmOWAq2cSiak8bllyrv5ZQFZwHa67TN7lRWPlzJuaTybWBX28QTWyHnYgcxiu735tkp_5YeA2xWnzfnklSoNwNwbOlizvWcCucjVHA-brHFffKrTaAtYXcmklibycje93v2c0N5im2akhy-WFZxqtDbzhizbzuYaZveMz7_owt1-_AGTI1PFaH_rYI3Cw"
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
