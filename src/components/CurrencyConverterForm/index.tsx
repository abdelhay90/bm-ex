import { useState } from 'react';
import {
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { Currency } from 'services/fixer-api';

export type CurrecyConverterFormProps = {
  symbols: Currency[];
  loading: boolean;
  initials: { [key: string]: any };
  submit?: (param: { [key: string]: number | string }) => void;
  swap?: (param: { [key: string]: number | string }) => void;

  disableFrom?: boolean;
  disableSwap?: boolean;
};

const CurrencyConverterForm = ({
  symbols,
  loading,
  initials,
  submit = () => {},
  swap = () => {},
  disableFrom = false,
  disableSwap = false,
}: CurrecyConverterFormProps) => {
  const [formValues, setFormValues] = useState(initials);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    submit(formValues);
  };

  const swapCurrencies = () => {
    setFormValues((prev) => {
      swap({
        ...prev,
        from: prev.to,
        to: prev.from,
      });
      return {
        ...prev,
        from: prev.to,
        to: prev.from,
      };
    });
  };

  return (
    <>
      {symbols && (
        <form onSubmit={handleSubmit}>
          <Grid
            container
            spacing={2}
            sx={{
              margin: 2,
            }}
          >
            <Grid item xs={4}>
              <TextField
                id="amount"
                name="amount"
                label="Amount"
                type="number"
                value={formValues.amount}
                //   min="0"
                onChange={handleInputChange}
                sx={{
                  width: '200px',
                }}
                inputProps={{
                  min: 0,
                }}
              />
            </Grid>
            <Grid xs={4} item>
              <FormControl disabled={loading}>
                <Select
                  name="from"
                  value={formValues.from}
                  onChange={handleInputChange}
                  fullWidth
                  sx={{
                    width: '200px',
                  }}
                  disabled={disableFrom}
                >
                  {symbols.map(({ value, name }: Currency) => {
                    return (
                      <MenuItem key={`from_${value}`} value={value}>
                        {name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid xs={4} item>
              <FormControl disabled={loading}>
                <Select
                  name="from"
                  value={formValues.to}
                  onChange={handleInputChange}
                  fullWidth
                  sx={{
                    width: '200px',
                  }}
                >
                  {symbols.map(({ value, name }: Currency) => {
                    return (
                      <MenuItem key={`to_${value}`} value={value}>
                        {name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6} alignItems={'flex-end'} alignContent={'flex-end'}>
              <Button
                variant="contained"
                color="secondary"
                type="button"
                style={{
                  margin: '5px',
                }}
                onClick={swapCurrencies}
                disabled={disableSwap}
              >
                Swap
              </Button>
            </Grid>
            <Grid item xs={6} alignItems={'flex-end'} alignContent={'flex-end'}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{
                  backgroundColor: 'green',
                  margin: '5px',
                }}
              >
                Convert
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </>
  );
};

export default CurrencyConverterForm;
