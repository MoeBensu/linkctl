import axios from 'axios';
import { toServerHostename } from './../utlis';

/**
 *
 *
 * @description         GET hostname/
 *                      fetch longUrl to get redirected by server to the original url
 *
 * @param redirectCode  url code to which long url got mapped, used for redirecting
 *
 * @return String       longUrl if success else error url
 */
export const fetchLongUrl = (redirectCode) =>
  axios
    .get(toServerHostename(redirectCode))
    .then((res) => res.data.longUrl)
    .catch((err) => {
      return `/error/${err?.response?.status}`;
    });

/**
 *
 * @param longUrl       url that will get shortened by server
 *
 * @description         POST hostname/endpoint
 *                      create a short url from the longUrl
 * 
 * @return response data/error

 */
export const createShortUrl = (longUrl) =>
  axios
    .post(process.env.REACT_APP_HOSTURI_POST, longUrl)
    .then((res) => res)
    .catch((err) => err);
