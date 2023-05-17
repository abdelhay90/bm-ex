import React, { createContext, useEffect, useState } from 'react';
import {
  Alert,
  Backdrop,
  CircularProgress,
  Container,
  Snackbar,
} from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main, { RateInfo } from 'components/Main';
import RateDetails from 'components/RateDetails';
import Error from 'components/Error';
import { Currency, listAllCurrencies } from 'services/fixer-api';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Error />,
  },
  {
    path: '/details',
    element: <RateDetails />,
  },

  {
    path: '/error',
    element: <Error />,
  },
]);

type RateInfoContext = {
  currentRateInfo?: RateInfo;
  setCurrentRateInfo: React.Dispatch<React.SetStateAction<RateInfo>>;
  symbols: Currency[];
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const DataContext = createContext({} as RateInfoContext);

export default function AppContainer() {
  const [currentRateInfo, setCurrentRateInfo] = useState<RateInfo>({});
  const [symbols, setSymbols] = useState<Currency[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    listAllCurrencies()
      .then((symbols: Currency[] | undefined) => {
        setSymbols(symbols || []);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        setError(error);
      });
  }, []);

  return (
    <DataContext.Provider
      value={{
        currentRateInfo,
        setCurrentRateInfo,
        symbols,
        loading,
        setLoading,
      }}
    >
      <Container>
        <RouterProvider router={router} />
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
          // onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <Snackbar open={!!error} autoHideDuration={6000}>
          <Alert
            // onClose={handleClose}
            severity="error"
            sx={{ width: '100%' }}
          >
            {error?.errorMessage}
          </Alert>
        </Snackbar>
      </Container>
    </DataContext.Provider>
  );
}
