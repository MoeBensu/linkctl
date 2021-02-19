export function toClientHostname(redirectCode) {
  return `${process.env.REACT_APP_CLIENT_HOSTNAME}/${redirectCode}`;
}

export function toServerHostename(redirectCode) {
  return `${process.env.REACT_APP_HOSTURI}/${redirectCode}`;
}
