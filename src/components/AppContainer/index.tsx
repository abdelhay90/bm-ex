import React, { createContext, useEffect, useState } from 'react';
import { Container } from '@mui/material';
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

  useEffect(() => {
    listAllCurrencies().then((symbols: Currency[] | undefined) => {
      setSymbols(symbols || []);
      setLoading(false);
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
      </Container>
    </DataContext.Provider>
  );
}
