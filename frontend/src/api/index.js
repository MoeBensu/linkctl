import axios from 'axios';
import { toServerHostename, toClientHostname } from './../utlis';
import { Redirect } from 'react-router-dom';
/**
 *
 * @param redirectCode  url code to which long url got mapped, used for redirecting
 *
 * @description         GET hostname/
 *                      fetch longUrl to get redirected by server to the original url
 */
export const fetchLongUrl = (redirectCode) =>
  axios
    .get(toServerHostename(redirectCode))
    .then((res) => res.data.longUrl)
    .catch((error) => {
      return `/error/${error?.response?.status}`;
    });

/**
 *
 * @param longUrl       url that will get shortened by server
 *
 * @description         POST hostname/endpoint
 *                      create a short url from the longUrl
 */
export const createShortUrl = (longUrl) =>
  axios.post(process.env.REACT_APP_HOSTURI_POST, longUrl);
