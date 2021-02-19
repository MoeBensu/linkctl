import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import { createShortUrl } from './../api';
import { toServerHostename } from './../utlis';

function Routers({ redirectCode }) {
  const [redirected, setRedirected] = useState(false);

  useEffect(() => createShortUrl(redirectCode).then(setRedirected(true)), [
    redirectCode,
    redirected,
  ]);

  return (
    <>
      {redirected ? (
        <Redirect to={toServerHostename(redirectCode)}></Redirect>
      ) : null}
    </>
  );
}

export default Routers;
