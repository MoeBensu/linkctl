import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchLongUrl } from './../../api';

function Redirect() {
  const { redirectCode } = useParams();

  async function urlRedirectTo() {
    const redirectTo = await fetchLongUrl(redirectCode);
    console.log(redirectTo);
    window.location = redirectTo;
  }

  useEffect(() => setTimeout(() => urlRedirectTo(), 1000));

  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
}

export default Redirect;
