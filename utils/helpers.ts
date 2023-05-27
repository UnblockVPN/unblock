// This code imports the `Price` type from the `types` module.

// The `getURL` function gets the URL of the current site.
// It first checks the `NEXT_PUBLIC_SITE_URL` environment variable.
// If that is not set, it checks the `NEXT_PUBLIC_VERCEL_URL` environment variable.
// If neither of those are set, it defaults to `http://localhost:3000/`.

// The `getURL` function then checks if the URL includes `http`.
// If it does not, it prepends `https://`.
// The `getURL` function then checks if the URL ends with `/`.
// If it does not, it appends `/`.
// The `getURL` function then returns the URL.

// The `postData` function posts data to an API endpoint.
// It takes two arguments:
// - `url`: The URL of the API endpoint.
// - `data`: The data to post.
// The `postData` function first logs the `url` and `data` arguments.
// It then makes a `fetch` request to the `url` endpoint.
// The `fetch` request has the following properties:
// - `method`: `POST`
// - `headers`: A header with the `Content-Type` set to `application/json`
// - `credentials`: `same-origin`
// - `body`: The `data` argument, serialized as JSON
// The `postData` function then checks the status code of the `fetch` response.
// If the status code is not `200`, the `postData` function logs an error and throws an error.
// If the status code is `200`, the `postData` function returns the JSON response body.

// The `toDateTime` function converts a Unix timestamp to a Date object.
// It takes one argument:
// - `secs`: The Unix timestamp.
// The `toDateTime` function first creates a new Date object with the date `1970-01-01T00:30:00Z`.
// It then sets the seconds property of the Date object to the `secs` argument.
// The `toDateTime` function then returns the Date object.

import { Price } from 'types';

export const getURL = () => {
  let url =
    process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
    process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
    'http://localhost:3000/';
  // Make sure to include `https://` when not localhost.
  url = url.includes('http') ? url : `https://${url}`;
  // Make sure to including trailing `/`.
  url = url.charAt(url.length - 1) === '/' ? url : `${url}/`;
  return url;
};

export const postData = async ({
  url,
  data
}: {
  url: string;
  data?: { price: Price };
}) => {
  console.log('posting,', url, data);

  const res: Response = await fetch(url, {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    credentials: 'same-origin',
    body: JSON.stringify(data)
  });

  if (!res.ok) {
    console.log('Error in postData', { url, data, res });

    throw Error(res.statusText);
  }

  return res.json();
};

export const toDateTime = (secs: number) => {
  var t = new Date('1970-01-01T00:30:00Z'); // Unix epoch start.
  t.setSeconds(secs);
  return t;
};
