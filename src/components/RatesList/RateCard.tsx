import { Card, CardContent, Typography } from '@mui/material';

type RateCardProps = { rate: number; value: string; from: string; to?: string };

export default function RateCard({ value, from, to, rate }: RateCardProps) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {`${from} to ${value}`}
        </Typography>
        <Typography variant="body2">{`1 ${from} = ${rate} ${value}`}</Typography>
      </CardContent>
    </Card>
  );
}
