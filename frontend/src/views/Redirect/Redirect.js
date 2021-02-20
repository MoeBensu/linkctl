import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchLongUrl } from './../../api';
import ReactLoading from 'react-loading';

function Redirect() {
  const { redirectCode } = useParams();

  async function urlRedirectTo() {
    const redirectTo = await fetchLongUrl(redirectCode);
    console.log(redirectTo);
    window.location = redirectTo;
  }

  useEffect(() => setTimeout(() => urlRedirectTo(), 1000));

  return (
    <div id="wrapper" style={{ paddingTop: '60px' }}>
      <div style={{ width: '50%', margin: 'auto' }}>
        <h2 style={{ textAlign: 'center' }}>Redirecting...</h2>
      </div>
      <div style={{ width: '5%', margin: 'auto' }}>
        <ReactLoading type="bars" color="#000"></ReactLoading>
      </div>
    </div>
  );
}

export default Redirect;
