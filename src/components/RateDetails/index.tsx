import { useContext, useEffect, useMemo } from 'react';
import CurrencyConverterForm from 'components/CurrencyConverterForm';
import { convert, timeseries } from 'services/fixer-api';
import { TimeseriesChart } from './TimeseriesChart';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button, Grid, Typography } from '@mui/material';
import { DataContext } from 'components/AppContainer';

export default function RateDetails(): JSX.Element {
  let [searchParams] = useSearchParams();
  let navigate = useNavigate();
  const {
    currentRateInfo: rateInfo,
    setCurrentRateInfo,
    symbols,
    loading,
  } = useContext(DataContext);

  const currenctCurrencyName = useMemo(() => {
    return symbols.find((item) => item.value === rateInfo?.from)?.name || '';
  }, [symbols, rateInfo]);

  useEffect(() => {
    timeseries().then((data) => {
      //   console.log(data);
    });
  }, []);

  useEffect(() => {
    console.log(searchParams.get('from'), searchParams.get('to'));
  }, [searchParams]);

  const initialValues = {
    from: rateInfo?.from,
    to: rateInfo?.to,
    amount: rateInfo?.amount,
  };

  const convertAmount = async (values: any) => {
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
      setCurrentRateInfo((prev) => ({ ...rateInfo }));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Grid container spacing={2} sx={{ marginTop: 1, marginBottom: 1 }}>
        <Grid item xs={6}>
          <Typography variant="h5">{currenctCurrencyName}</Typography>
        </Grid>

        <Grid item xs={6}>
          <Button
            variant="contained"
            color="primary"
            type="button"
            style={{
              backgroundColor: 'green',
              margin: '5px',
            }}
            onClick={() => {
              navigate('/');
            }}
          >
            Home
          </Button>
        </Grid>
      </Grid>
      <CurrencyConverterForm
        symbols={symbols}
        loading={loading}
        initials={initialValues}
        disableFrom
        disableSwap
        submit={convertAmount}
      />

      <Grid container spacing={2} sx={{ marginTop: 10, marginBottom: 10 }}>
        <Grid item xs={6}>
          <Typography variant="body2">
            {rateInfo?.rate && (
              <>{`1 ${rateInfo?.from} = ${rateInfo?.rate} ${rateInfo?.to}`}</>
            )}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          {rateInfo?.result && (
            <Typography
              variant="body2"
              sx={{
                border: '1px solid',
              }}
            >
              {`${rateInfo?.result} ${rateInfo?.to}`}
            </Typography>
          )}
        </Grid>
      </Grid>

      <TimeseriesChart />
    </>
  );
}
