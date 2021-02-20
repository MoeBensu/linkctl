import React from 'react';
import { useLocation } from 'react-router-dom';

function ErrorPage() {
  const { pathname } = useLocation();
  const errorCode = pathname.replace('/error/', '');

  function createErrorMessage() {
    switch (errorCode) {
      case '401':
        return (
          <big style={{ fontSize: '60px' }}>401 - Invalid url was given :/</big>
        );
      case '500':
        return (
          <big style={{ fontSize: '60px' }}>
            500 - Sorry! It seems server can't response at the moment ^^"
          </big>
        );
      default:
        return <big style={{ fontSize: '60px' }}>404 - Page not found :(</big>;
    }
  }

  return (
    <div
      id="wrapper"
      style={{ width: '50%', margin: '0 auto', padding: '20px auto' }}>
      <div id="info" style={{ textAlign: 'center' }}>
        {createErrorMessage()}
        <br></br>
        <br></br>
        <a href="/home">
          <h3> Go Home</h3>
        </a>
      </div>
    </div>
  );
}

export default ErrorPage;
