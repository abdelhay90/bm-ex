import { Grid, Typography } from '@mui/material';
import RateCard from './RateCard';

type RatesListProps = {
  from: string;
  rates: {
    [key: string]: any;
    ratesConverted: any[];
  };
};

const RatesList = ({ rates, from }: RatesListProps) => {
  return (
    <>
      <Grid>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {`Date: ${new Date(rates.timestamp * 1000)}`}
        </Typography>
      </Grid>
      <Grid container spacing={2}>
        {rates?.ratesConverted.map((item) => (
          <Grid item xs={4} key={`${from}-${item.value}-${item.rate}`}>
            <RateCard from={from} value={item.value} rate={item.rate} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default RatesList;
