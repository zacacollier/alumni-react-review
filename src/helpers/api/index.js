import fetchPonyfill from 'fetch-ponyfill';

const {
  fetch,
} = fetchPonyfill();

export const get = (url, options) =>
  fetch(url, { ...options })

export const post = (url, body, options) =>
  fetch(url, { ...options, body })

export const put = (url, body, options) =>
  fetch(url, { ...options, body })
