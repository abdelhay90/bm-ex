import { useContext, useState } from 'react';
import { convert, latest } from 'services/fixer-api';
import CurrencyConverterForm from 'components/CurrencyConverterForm';
import RatesList from 'components/RatesList';
import { Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { DataContext } from 'components/AppContainer';

export type RateInfo = {
  amount?: number;
  from?: string;
  to?: string;
  rate?: number;
  result?: number;
};

const Main = () => {
  const navigate = useNavigate();
  const [latestCurrencies, setLatestCurrencies] = useState<any>({});
  const [rateInfo, setRateInfo] = useState<RateInfo>({});
  const { setCurrentRateInfo, symbols, loading, setLoading } =
    useContext(DataContext);

  const initialValues = {
    from: 'USD',
    to: 'EGP',
    amount: 5,
  };

  const convertCurrency = async (values: any) => {
    try {
      const data = await convert(values.from, values.to, values.amount);
      // @ts-ignore
      const rateInfo = {
        // @ts-ignore
        amount: data.query.amount,
        // @ts-ignore
        from: data.query.from,
        // @ts-ignore
        to: data.query.to,
        // @ts-ignore
        rate: data.info.rate,
        // @ts-ignore
        result: data.result,
      };
      const latestItems = await latest();
      setLatestCurrencies(latestItems);
      setRateInfo(rateInfo);
      setCurrentRateInfo(rateInfo);
    } catch (error) {
      console.error(error);
    }
  };

  const goToDetails = () => {
    navigate(
      `/details?from=${rateInfo.from}&to=${rateInfo.to}&amount=${rateInfo.amount}&rate=${rateInfo.rate}`,
    );
  };

  return (
    <>
      <CurrencyConverterForm
        symbols={symbols}
        loading={loading}
        initials={initialValues}
        submit={convertCurrency}
        swap={convertCurrency}
      />

      <Grid container spacing={2} sx={{ marginTop: 10, marginBottom: 10 }}>
        <Grid item xs={4}>
          <Typography variant="body2">
            {rateInfo.rate && (
              <>{`1 ${rateInfo.from} = ${rateInfo.rate} ${rateInfo.to}`}</>
            )}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          {rateInfo.result && (
            <Typography
              variant="body2"
              sx={{
                border: '1px solid',
              }}
            >
              {`${rateInfo.result} ${rateInfo.to}`}
            </Typography>
          )}
        </Grid>

        <Grid item xs={4}>
          {rateInfo.result && (
            <Button
              variant="contained"
              color="primary"
              type="button"
              style={{
                backgroundColor: 'green',
                margin: '5px',
              }}
              onClick={goToDetails}
            >
              Details
            </Button>
          )}
        </Grid>
      </Grid>

      {latestCurrencies.ratesConverted && (
        <RatesList rates={latestCurrencies} from={initialValues.from} />
      )}
    </>
  );
};

export default Main;
