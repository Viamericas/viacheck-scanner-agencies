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
        token="eyJraWQiOiIzcncremFOZ0kzSXFyTXMwRkUyanJHaTQ1QmM0cVVwWFZDZGo2SWZLUlhVPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI0ZjFiOTEyZS0wZWJjLTQ3YjctYTBhMy1hOTY3NDhjNDUyNDgiLCJjb2duaXRvOmdyb3VwcyI6WyJEZXRhbGxlRGVCaWxsZXMiLCJFc3RhZG9EZUN1ZW50YSIsIkNvbWlzaW9uZXMiLCJFbnZpb3NEZU90cm9zQ2FqZXJvcyIsIlJlcG9ydGVEZUNoZXF1ZXMiLCJJbXByZXNvcmFzIiwiSGlzdG9yaWFsRGVUcmFuc2FjY2lvbmVzIiwiVmlhVGFzYSIsIlJlcG9ydHMiLCJDaGVxdWVzRGVPdHJvc0NhamVyb3MiLCJUcmFuc2FjY2lvbmVzRGVPdHJvc0NhamVyb3MiLCJEZXRhbGxlRGVFbnZpb3MiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfN0lKZUZ2T1dZIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjpmYWxzZSwiY29nbml0bzp1c2VybmFtZSI6ImFkbWludmlhY2VudHJhbHNsIiwiYXVkIjoiMnYwam9kb2doZG5pazU4cG8waGd2YnZmM2wiLCJldmVudF9pZCI6ImY3ZGUwNTM0LWQ3ZTMtNDIzNy1iZWMxLTNmNzAyY2JkMDBjZiIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNzEyOTI1OTU2LCJwaG9uZV9udW1iZXIiOiIrNTczMjI1MTE2NTAzIiwiY3VzdG9tOklkQnJhbmNoIjoiQTAwNzY1IiwiZXhwIjoxNzEyOTQzOTU2LCJpYXQiOjE3MTI5MjU5NTZ9.fL4JfRvwn7SpGLEsOqWAeeG6tmD0lEBGwAUK4WVrJpZMNTMJ-IfD1dEkomoENv5qzx7v53PQrmpLIAEDDgfEIgytcADcF6KHS5qfL_gkKfLkW9JGwUm-XfLzoN1hhYC98oFmbQxjCn4udlMI4_CUYxsw8RmIfEdK7NWY_vpsu_XW6L-UhThs3oNPGvB7ZkvgLVfdHteX5PjRP6Wwa7paVryYGnKe5pJL2gYZbc_IdAJkcQNwXJWLcjbXHSkIXsdifhOpXmCGv7KAVPYuBInBAvVpJa3WHzXBH9fB9mswpjEqYUPNiv4nOKeh28HElz05iAI1KlP2PRT0yd1ptioJCQ"
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
