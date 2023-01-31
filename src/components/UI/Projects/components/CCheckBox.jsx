import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';

export default function CustomCheckbox(props) {
  const {checked, onChange, label, name} = props

  return (
    <div className='flex space-x-1 items-center' id="customCheckbox">
      <Checkbox
        checked={checked}
        onChange={onChange}
        name={name}
        id={`${name}-${label}`}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      <label htmlFor={`${name}-${label}`}><Typography variant='h5'>{label}</Typography></label>
    </div>
  );
}