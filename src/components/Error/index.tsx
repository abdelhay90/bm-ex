import { useRouteError } from 'react-router-dom';

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>
        Sorry, an unexpected error has occurred, API limit reached, please
        change API key
      </p>
      <p>{/* <i>{error.statusText || error.message}</i> */}</p>
    </div>
  );
}
