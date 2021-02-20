import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toServerHostename } from '../../utlis';

function Redirect() {
  const { redirectCode } = useParams();

  function redirectToServer() {
    window.location = toServerHostename(redirectCode);
  }
  useEffect(() => setTimeout(() => redirectToServer(), 1000));

  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
}

export default Redirect;
