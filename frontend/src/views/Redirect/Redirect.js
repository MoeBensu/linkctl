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
    <div id="wrapper" style={{ width: '5%', margin: 'auto' }}>
      <div>
        <ReactLoading type="bars" color="#000"></ReactLoading>
      </div>
    </div>
  );
}

export default Redirect;
