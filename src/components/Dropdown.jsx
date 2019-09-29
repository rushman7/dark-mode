import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 360,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const Dropdown = ({ coinData, handleChange }) => {
  const classes = useStyles();
  return (
    <form className={classes.root} autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-simple">Coin</InputLabel>
        <Select
          value={coinData.map(coin => coin.name)}
          onChange={handleChange}
        >
        {coinData.map(coin => <MenuItem key={coin.name} value={coin.name}>{coin.name}</MenuItem>)}
        </Select>
      </FormControl>
    </form>
  )
}